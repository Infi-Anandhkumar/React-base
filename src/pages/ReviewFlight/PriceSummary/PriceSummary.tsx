import React, { type CSSProperties, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Collapse,
  type CollapseProps,
  Divider,
  Drawer,
  Flex,
  Row,
} from "antd";
// import { useAppSelector } from "../../../hooks/App.hook";
import "./PriceSummary.scss";
// import {
//   SpecialserviceSSRIcon,
//   SpecialserviceSeatIcon,
// } from "@/components/Icons/Icons";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
// import { CaretRightOutlined } from "@ant-design/icons";
import { useRedirect } from "../../../hooks/Redirect.hook";
import ConfirmModalPopup from "../../../components/ConfirmModalPopup/ConfirmModalPopup";
import CFG from "../../../config/config.json";
import { useDispatch } from "react-redux";
// import { updateActivePNR } from "../../../stores/Pnr.store";
import { sessionStorageAccessor } from "../../../utils/browserStorage";
// import { useToggle } from "@/hooks/Toggle.hook";
import { useResize } from "../../../utils/resize";

const PriceSummary = () => {
  const { t } = useTranslation();
  const { Text } = Typography;
  const { redirect } = useRedirect();
  const { isSmallScreen } = useResize(991);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [SgetFinalViewPnrData] = sessionStorageAccessor<any>("finalViewPNRData");
  var activePNR: any = SgetFinalViewPnrData();
  // const { reviewStatus } = useAppSelector((state) => state.ReviewFlightReducer);
  const [SgetSsrPrice] = sessionStorageAccessor<any>("ssrPrice");
  const [SgetReviewStatus] = sessionStorageAccessor<string>("reviewStatus");
  const [, SsetFinalReviewPnrData] = sessionStorageAccessor<any>("finalReviewPNRData");
  const [, SsetFinalPaymentAmount] = sessionStorageAccessor<any>("finalPaymentAmount");
  const reviewOption =SgetReviewStatus();

  var ssrPrice = SgetSsrPrice();
  ssrPrice = ssrPrice ? ssrPrice : [];
  const totalSSRAmount = Number(
    ssrPrice?.seat + ssrPrice?.baggage + ssrPrice?.meals
  );

  var finalAmount = Number(totalSSRAmount ? totalSSRAmount : 0) + Number(activePNR ? (activePNR[0]?.totalAmount - activePNR[0]?.paidAmount) : 0);
  
  const handlePopupData = (data: boolean) => {
    setIsModalOpen(data);
    if (data) {
      var temp = JSON.parse(JSON.stringify(activePNR));
      temp[0]?.rebookOptionalFlightDetails.forEach((data: any) => {
        data.flightDetails.forEach((flightData: any) => {
          if (reviewOption === "Accept") {
            flightData.statusCode = "HK";
            flightData.status = "Confirmed";
          } else if (reviewOption === "Cancel") {
            flightData.statusCode = "WK";
            flightData.status = "Cancelled";
          } else {
            if (reviewOption === "Modify") {
              if (flightData.statusCode !== "HK") {
                flightData.statusCode = "WK";
                flightData.status = "Cancelled";
              }
            } else {
              if (data?.itinerary_status) {
                if (data?.itinerary_status?.toLowerCase() === "cancel") {
                  flightData.statusCode = "WK";
                  flightData.status = "Cancelled";
                } else if (data?.itinerary_status?.toLowerCase() === "accept") {
                  flightData.statusCode = "HK";
                  flightData.status = "Confirmed";
                }
              }
            }
          }
        });
      });
      // dispatch(updateActivePNR(temp));
      SsetFinalReviewPnrData(temp);
      SsetFinalPaymentAmount(finalAmount);
      finalAmount > 0 ? redirect("payment") : redirect("itineraryConfirm");
    }
  };

  var ItineraryDeclineStatus = false;
  if (activePNR) {
    ItineraryDeclineStatus =
      activePNR[0]?.rebookOptionalFlightDetails?.some((trip: any) =>
        trip.itinerary_status && trip.itinerary_status === "Cancel"
      );
  }

  // Setting data object for the cancel pnr popup
  const popupData = {
    modalName:
      ItineraryDeclineStatus
        ? "declineOffer"
        : reviewOption === "Accept"
          ? "acceptOffer"
          : reviewOption === "Cancel"
            ? "declineOffer"
            : reviewOption === "Modify" || reviewOption === "Custom"
              ? "modifyOffer"
              : "",
    page: "reviewFlight",
    header:
      ItineraryDeclineStatus
        ? t("review_flight_cancel_popup_header")
        : reviewOption === "Accept"
          ? t("review_flight_confirm_popup_header")
          : reviewOption === "Cancel"
            ? t("review_flight_cancel_popup_header")
            : reviewOption === "Modify" || reviewOption === "Custom"
              ? t("review_flight_modify_popup_header")
              : "",
    description:
      ItineraryDeclineStatus
        ? t("review_flight_cancel_popup_description")
        : reviewOption === "Accept"
          ? t("review_flight_confirm_popup_description")
          : reviewOption === "Cancel"
            ? t("review_flight_cancel_popup_description")
            : reviewOption === "Modify" || reviewOption === "Custom"
              ? t("review_flight_modify_popup_description")
              : "",
    modalToggle: isModalOpen,
    modalClass: "cls-cancelpnr-modal",
    modalWidth: 520,
    primaryBtn: { text: t("no"), value: false },
    secondaryBtn: {
      text: reviewOption === "Cancel" || ItineraryDeclineStatus ? t("yes_cancel") : t("yes_confirm"),
      value: true,
    },
  };

  const panelStyle: React.CSSProperties = {
    background: "var(--ant-color-bg-container)",
    border: "none",
  };

  const renderDetail = (label: string, amount: number | undefined) => (
    amount && Number(amount) !== 0 ? (
      <>
        <Col span={14} className="cls-mod-items"> {label} </Col>
        <Col span={4} className="f-reg fs-14 d-iblock pr-10 text-right">{CFG.currency}</Col>
        <Col span={6} className="text-right f-reg fs-14">
          {Number(amount).toFixed(2)}
        </Col>
      </>
    ) :
      <></>
  );

  const seatAmount = Number(ssrPrice?.seat);
  const baggageAmount = Number(ssrPrice?.baggage);
  const mealsAmount = Number(ssrPrice?.meals);
  const totalAmount = seatAmount + baggageAmount + mealsAmount;

  const getSSRFare: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
      {
        key: "1",
        label: 
          <Row>
            <Col xs={15} sm={19} md={20} lg={13} xl={15} className="cls-collapseHeader"> {t("special_fare")} </Col>
            <Col xs={4} sm={2} md={2} lg={5} xl={4} className="f-med fs-14 d-iblock pr-10 text-right">{CFG.currency}</Col>
            <Col xs={5} sm={3} md={2} lg={6} xl={5} className="text-right f-med"> {totalAmount.toFixed(2)} </Col>
          </Row>
        ,
        children: (
          <Col>
            <Row className="mt-10 cls-modified-row">
              {renderDetail(t("seat"), seatAmount)}
              {renderDetail(t("baggage"), baggageAmount)}
              {renderDetail(t("meals"), mealsAmount)}
            </Row>
          </Col>
        ),
        style: panelStyle,
        // extra: (
        //   <>
        //     <Col span={13} className="text-right f-med" style={{ paddingRight: 3 }}>
        //       {CFG.currency}
        //     </Col>
        //     <Col span={11} className="text-right f-med">
        //       {totalAmount.toFixed(2)}
        //     </Col>
        //   </>
        // ),
      },
    ];

  const drawerFooter = (
    <Flex justify="space-between" className={`cls-drawerFooter ${isDrawerOpen ? "open" : ""}`}>
      <Text>
        <Col className={`${isSmallScreen ? "f-reg fs-12" : "f-sbold fs-16"} cls-title`}>
          {t("fare_summary")}
        </Col>
        <Button
          type="link"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {totalSSRAmount && totalSSRAmount !== 0
            ? Number(totalSSRAmount + activePNR[0]?.totalAmount)?.toFixed(2)
            : totalSSRAmount && totalSSRAmount !== 0 && (!ItineraryDeclineStatus || reviewOption !== "Cancel")
              ? Number(finalAmount < 0 ? finalAmount * -1 : finalAmount)?.toFixed(2)
              : (
                <>
                  <Text className="f-sbold fs-16 d-iblock pr-25 text-right">{CFG.currency}</Text>
                  <Text className="f-sbold fs-16 text-right"> {activePNR[0]?.totalAmount?.toFixed(2)} </Text>
                </>
              )
          }
          <Text className="Infi-06_DownArrow cls-arrow"> </Text>
        </Button>
      </Text>
      <Button
        className={`${isSmallScreen ? "fs-14 f-med" : "fs-16 f-sbold"} cls-primary-btn`}
        onClick={() => {
          setIsDrawerOpen(false);
          setIsModalOpen(true);
        }}
      >
        {t("confirm")}
        {
          !isSmallScreen
          && (reviewOption?.toLowerCase() === "custom"
            ? t("custom_changes")
            : t("to").toLowerCase() + " " + reviewOption?.toLowerCase()
          )
        }
      </Button>
    </Flex>
  )

  const fareCardComponent = (
    <Text className="cls-fareBreakup">
      <Col className={`f-sbold fs-16 cls-title`}>
        {t("payment_summary")}
      </Col>
      <Row className="mt-10" justify="space-between">
        <Col xs={15} sm={19} md={20} lg={13} xl={15}> {t("pnr_total_amount")} </Col>
        <Col xs={4} sm={2} md={2} lg={5} xl={4} className="f-med fs-14 d-iblock pr-10 text-right">{CFG.currency}</Col>
        <Col xs={5} sm={3} md={2} lg={6} xl={5} className="text-right f-med"> {activePNR[0]?.totalAmount?.toFixed(2)} </Col>
      </Row>
      {
        totalSSRAmount && totalSSRAmount !== 0 ? (
          <>
            <Collapse
              bordered={false}
              className="cls-pricesummary-collapse"
              expandIcon={() => <></>}
              // expandIcon={({ isActive }) => (
              //   <CaretRightOutlined rotate={isActive ? 90 : 0} />
              // )}
              items={getSSRFare(panelStyle)}
            />
            <Divider style={{ borderBlockStartWidth: "2px" }} />
            <Row className="mt-10" justify="space-between" style={{ alignItems: "flexEnd" }}>
              <Col xs={18} sm={16} xl={14} className="d-flex space-between">
                {t("total_amount")}
                <Text className="fs-15 f-med">(+)</Text>
              </Col>
              <Col xs={2} sm={2} xl={4} className="f-med fs-14 d-iblock pr-10 text-right">{CFG.currency}</Col>
              <Col xs={4} sm={6} xl={6} className="text-right f-med">
                {Number(totalSSRAmount + activePNR[0]?.totalAmount)?.toFixed(2)}
              </Col>
            </Row>
          </>
        ) : <></>
      }
      {
        totalSSRAmount && totalSSRAmount !== 0 && (!ItineraryDeclineStatus || reviewOption !== "Cancel") ?
          <>
            <Row className="mt-10" justify="space-between" style={{ color: "var(--t-green-lighter)", alignItems: "flexEnd" }}>
              <Col span={14} className="d-flex space-between">
                {t("paid_amount")}
                <Text className="fs-15 f-med" style={{ color: "var(var(--t-green-lighter))" }}>(-)</Text>
              </Col>
              <Col span={4} className="f-med fs-14 d-iblock pr-10 text-right">{CFG.currency}</Col>
              <Col span={6} className="text-right f-med"> {Number(activePNR[0]?.paidAmount)?.toFixed(2)} </Col>
            </Row>
            <Divider style={{ borderBlockStartWidth: "2px" }} />
            <Row className="mt-10" justify="space-between">
              <Col span={14}> {finalAmount < 0 ? t("modified_refund") : t("balance_due")} </Col>
              <Col span={4} className="f-med fs-14 d-iblock pr-10 text-right">{CFG.currency}</Col>
              <Col span={6} className="text-right f-med"> {Number(finalAmount < 0 ? finalAmount * -1 : finalAmount)?.toFixed(2)} </Col>
              {finalAmount < 0 ?
                <Col span={24} className="mt-10">
                  <Alert
                    className="cls-modify-alert"
                    message={
                      <Text className="fs-12 f-reg d-iblock ml-20">
                        Rest assured, your
                        refund
                        <Text className="fs-16 f-sbold d-iblock px-5">
                          {CFG.currency} {(finalAmount < 0 ? finalAmount * -1 : finalAmount)?.toFixed(2)}
                        </Text>
                        will be issued as a voucher for your convenience.
                      </Text>
                    }
                    type="info"
                  />
                </Col> :
                <></>
              }
            </Row>
          </> :
          <></>
      }
      <Row justify="space-between">
        {reviewOption === "Cancelled" ? (
          <Col span={24} className="mt-10">
            <Alert
              message={
                <Text className="fs-12 f-reg d-iblock ml-20">
                  {t("decline_msg")}
                  <Text className="fs-16 f-sbold d-iblock px-5">
                    {CFG.currency} {activePNR[0]?.totalAmount?.toFixed(2)}
                  </Text>
                  {t("decline_voucher_msg")}
                </Text>
              }
              type="info"
            />
          </Col>
        ) : (
          <></>
        )}
      </Row>
      {!isSmallScreen
        ? <Row>
          <Col span={24} className="mt-15 cls-price-summary-btn">
            <Button
              type="primary"
              size="large"
              className="f-sbold fs-16"
              block
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {t("confirm")} {" "}
              {
                reviewOption?.toLowerCase() === "custom"
                  ? t("custom_changes")
                  : t("to").toLowerCase() + " " + reviewOption?.toLowerCase()
              }
            </Button>
          </Col>
          <Col span={24} className="mt-15">
            <Button
              size="large"
              className="f-sbold fs-16 cls-secondary-btn"
              style={{ borderRadius: "0" }}
              block
              onClick={() => {
                redirect("viewPnrInfo");
              }}
            >
              {t("back")}
            </Button>
          </Col>
        </Row>
        : <></>
      }
    </Text>
  )

  return (
    <>
      <Card datatest-id="priceSummary" className="cls-fareCard">
        {isSmallScreen
          ? <>
              {drawerFooter}
              <Drawer
                title={false}
                mask={true}
                height="max-content"
                placement="bottom"
                closable={false}
                onClose={() => setIsDrawerOpen(false)}
                open={isDrawerOpen}
                style={{ bottom: 40 }}
              >
                {fareCardComponent}
                {drawerFooter}
              </Drawer>
            </>
          : fareCardComponent
        }
      </Card>
      {reviewOption === "Accept" ? (
        <Row className={isSmallScreen ? "mb-50 pb-30" : ""}>
          <Col lg={24} xl={20}>
            <Row className={isSmallScreen ? "" : "mt-20"}>
              <Text
                className="fs-16 f-med"
                style={{ color: isSmallScreen ? "var(--t-primary)" : "var(--t-text-grey-dark-bg)"}}
              >
                {t("special_services")}
              </Text>
              <Text
                className="mt-5 fs-13 mb-15"
                style={{ color: "var(--t-text-grey-lighter-bg)" }}
              >
                {t("special_Service_description")}
              </Text>
            </Row>
            <Row className="cls-special-service cg-15">
              <Col className="pointer">
                <Card onClick={() => redirect("addSSR")}>
                  <Col className="text-center">
                    {/* <SpecialserviceSSRIcon /> */}
                  </Col>
                  <Col
                    className={`${isSmallScreen ? "f-med fs-13": "f-sbold fs-18"} text-center`}
                  >
                    {t("add_ssr")}
                  </Col>
                </Card>
              </Col>
              <Col className="pointer">
                <Card onClick={() => redirect("addSSR")}>
                  <Col className="text-center">
                    {/* <SpecialserviceSeatIcon /> */}
                  </Col>
                  <Col
                    className={`${isSmallScreen ? "f-med fs-13": "f-sbold fs-18"} text-center`}
                  >
                    {t("add_seat")}
                  </Col>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <ConfirmModalPopup onData={handlePopupData} props={popupData} />
    </>
  );
};

export default PriceSummary;
