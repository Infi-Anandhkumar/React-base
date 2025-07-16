import "./PassengerDetails.scss";
import {
  // Alert,
  Card,
  Checkbox,
  Col,
  InputNumber,
  Row,
  Switch,
  Typography,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
// import { useAppSelector } from "../../../hooks/App.hook";
import type { CheckboxChangeEvent } from "antd/lib/checkbox";
// import { updateSelectedPassengersList } from "@/stores/Passenger.store";
import { useTranslation } from "react-i18next";
import React from "react";
import { sessionStorageAccessor } from "../../../utils/browserStorage";
import { useResize } from "../../../utils/resize";
const { Text } = Typography;

const PassengerDetails = (props: any) => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isSmallScreen } = useResize(1199);
  // eslint-disable-next-line
  const [editPassenger] = useState(props?.pnrData ? true : false);
  // const { activePNR } = useAppSelector((state: any) => state.PNRReducer);
  const [ SgetFinalViewPnrData ] = sessionStorageAccessor<any>("finalViewPNRData");
  const [ SfinalReviewPnrData ] = sessionStorageAccessor<any>("finalReviewPNRData");
  // var activePNRSession:any = props?.isConfirmpage ? SfinalReviewPnrData : SgetFinalViewPnrData();
  // var activePNRData = props?.pnrData 
  //   ? props.pnrData 
  //   : activePNR.length 
  //     ? activePNR 
  //     : activePNRSession;
  const activePNRData = useMemo(() => {
    if (props?.pnrData) return props.pnrData;
    // if (activePNR.length) return activePNR;
    return props?.isConfirmpage ? SfinalReviewPnrData() || [] : SgetFinalViewPnrData() || [];
  }, [props?.pnrData, props?.isConfirmpage, SgetFinalViewPnrData, SfinalReviewPnrData]);
  const [passengerCount, setPassengerCount] = useState({
    adult: 0,
    infant: 0,
  });
  const [passengerList, setPassengerList] = useState<any>([]);
  const [selectedPassengerCount, setSelectedPassengerCount] = useState({
    adult: 0,
    infant: 0,
  });
  // eslint-disable-next-line
  const [isCountOnly] = useState(false); //Switch between passenger list and count
  const [isCountDisabled, setIsCountDisabled] = useState(true);

  // const handleSwitch = () => {
  //   seteditPassenger(!editPassenger);
  //   setSelectedPassengerCount({
  //     ...selectedPassengerCount,
  //     adult: 0,
  //     infant: 0,
  //   });
  // };

  const handleCheck = (event: CheckboxChangeEvent, passengerData: any) => {
    let updatedCount;
    let tempData;
    if (event.target.checked) {
      tempData = [...passengerList, passengerData];
      updatedCount =
        passengerData.type === "ADT"
          ? {
              ...selectedPassengerCount,
              adult: selectedPassengerCount.adult + 1,
            }
          : {
              ...selectedPassengerCount,
              infant: selectedPassengerCount.infant + 1,
            };
    } else {
      tempData = passengerList.filter(
        (passenger: any) => passenger.id !== passengerData.id
      );
      updatedCount =
        passengerData.type === "ADT"
          ? {
              ...selectedPassengerCount,
              adult: selectedPassengerCount.adult - 1,
            }
          : {
              ...selectedPassengerCount,
              infant: selectedPassengerCount.infant - 1,
            };
    }
    setSelectedPassengerCount(updatedCount);
    setPassengerList(tempData);
  };

  useEffect(() => {
    // dispatch(updateSelectedPassengersList(passengerList));
    // eslint-disable-next-line
  }, [passengerList]);

  useEffect(() => {
    if (activePNRData.length) {
      let adultCount = 0;
      let infantCount = 0;
      for (const passengerData of activePNRData?.[0]?.paxInfo || []) {
        if (passengerData.type === "ADT") {
          adultCount++;
        } else if (passengerData.type === "CNN") {
          infantCount++;
        }
      }
      if (adultCount !== passengerCount.adult || infantCount !== passengerCount.infant) {
        setPassengerCount({ adult: adultCount, infant: infantCount });
      }
    }
  }, [activePNRData]);

  return (
    <>
      {/* delete */}
      {isCountOnly ? (
        <Row
          className={`cls-passenger-count-only-container  ${!props?.isConfirmpage ? "cls-pd-border" : ""}`}
        >
          <Col xl={12} className="f-med fs-16">
            {t("passengers")} 24 (12A / 8C / 4I)
          </Col>
          <Col xl={12} className="f-med" style={{ textAlign: "end" }}>
            <Switch onChange={() => setIsCountDisabled(!isCountDisabled)} />
            <span className="ml-10">
              {t('would_you_like_to_change_the_passengers_list')}
            </span>
          </Col>
          <Col xl={24}>
            <span>
              {t("adult")} :{" "}
              <InputNumber min={0} max={12} disabled={isCountDisabled} />
            </span>
            <span>
              {t("child")} : <InputNumber min={0} max={8} disabled={isCountDisabled} />
            </span>
            <span>
              {t("infant")} :{" "}
              <InputNumber min={0} max={4} disabled={isCountDisabled} />
            </span>
          </Col>
        </Row>
      ) : (
        <div className="cls-passenger-det">
          <Card>
            <Row justify="space-between">
              {!props?.pnrData ? 
                <Col className={`${isSmallScreen ? "fs-14 f-sbold p-clr" : "f-med fs-16"}`}>
                  {t("passengers")} {activePNRData[0]?.totalPaxCount}({" "}
                  {activePNRData[0]?.totalAdultPaxCount}A /{" "}
                  {activePNRData[0]?.totalChildPaxCount}C /{" "}
                  {activePNRData[0]?.totalInfantPaxCount}I )
                </Col>
                : <></>
              }
              {!props?.isConfirmpage ? (
                <>
                  {/* <Col className="cls-switch f-med">
                    <Switch 
                      defaultChecked={editPassenger} 
                      onChange={handleSwitch} 
                      className="mr-10"
                    />
                    {t('would_you_like_to_change_the_passengers_list')}
                  </Col> */}
                </>
              ) : <></>}
            </Row>
            <Row>
              <Col xs={24} xl={24} className="f-med mt-15">
                <Text className="cls-passenger-heading">
                  <Text className="Infi-44_Adult"></Text>
                  {t("adult")}
                </Text>
              </Col>
              <Row className={`${props?.pnrData ? "" : "ml-30"} w-100 cls-sideBorder`}>
                {activePNRData[0]?.paxInfo?.map((item: any, index:number) => (
                  <React.Fragment key={"Adult"+index}>
                    {item.type === "Adult" ? (
                      editPassenger ? (
                        <Col xs={24} sm={12} md={8} xl={props?.pnrData ? 12 :8} className="mt-10 mb-10 ">
                          <Checkbox
                            name={item.id}
                            defaultChecked={props?.pnrData ? true : false}
                            onChange={(e) => {
                              handleCheck(e, item);
                            }}
                          >
                            <Col className="f-med text-ellipsis pr-15" title={item.passengerDetail.firstName + " " + item.passengerDetail.lastName}>
                              {item.passengerDetail.firstName +
                                " " +
                                item.passengerDetail.lastName}
                            </Col>
                            <Col className="cls-pas-details">
                              {item.passengerDetail.age},{" "}
                              {item.passengerDetail.gender}
                            </Col>
                          </Checkbox>
                        </Col>
                      ) : (
                        <Col xs={12} sm={8} xl={props?.pnrData ? 12 :8} className="mt-10 mb-10 ">
                          <Col className={`${isSmallScreen ? "fs-13" : ""} f-med text-ellipsis pr-15`} title={item.passengerDetail.firstName + " " + item.passengerDetail.lastName}>
                            {item.passengerDetail.firstName +
                              " " +
                              item.passengerDetail.lastName}
                          </Col>
                          <Col className={`${isSmallScreen ? "fs-12 f-med" : ""} cls-pas-details`}>
                            {item.passengerDetail.age},{" "}
                            {item.passengerDetail.gender}
                          </Col>
                        </Col>
                      )
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Row>
            <Row>
              <Col xs={24} xl={24} className="f-med mt-15">
                <Text className="cls-passenger-heading">
                  <Text className="Infi-45_Child"></Text> {t("child")}
                </Text>
              </Col>
              <Row className={`${props?.pnrData ? "" : "ml-30"} w-100 cls-sideBorder`}>
                {activePNRData[0]?.paxInfo?.map((item: any, index:number) => (
                  <React.Fragment key={"Child"+index}>
                    {item.type === "Child" ? (
                      editPassenger ? (
                        <Col  xs={24} sm={12} md={8} xl={props?.pnrData ? 12 :8} className="mt-10 mb-10 ">
                          <Checkbox
                            name={item.id}
                            defaultChecked={props?.pnrData ? true : false}
                            onChange={(e) => {
                              handleCheck(e, item);
                            }}
                          >
                            <Col className="f-med text-ellipsis pr-15" title={item.passengerDetail.firstName + " " + item.passengerDetail.lastName}>
                              {item.passengerDetail.firstName +
                                " " +
                                item.passengerDetail.lastName}
                            </Col>
                            <Col className="cls-pas-details">
                              {item.passengerDetail.age},{" "}
                              {item.passengerDetail.gender}
                            </Col>
                          </Checkbox>
                        </Col>
                      ) : (
                        <Col xs={12} sm={8} xl={props?.pnrData ? 12 :8} className="mt-10 mb-10 ">
                          <Col className="f-med text-ellipsis pr-15" title={item.passengerDetail.firstName + " " + item.passengerDetail.lastName}>
                            {item.passengerDetail.firstName +
                              " " +
                              item.passengerDetail.lastName}
                          </Col>
                          <Col className="cls-pas-details">
                            {item.passengerDetail.age},{" "}
                            {item.passengerDetail.gender}
                          </Col>
                        </Col>
                      )
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Row>
            <Row>
              <Col xs={24} xl={24} className="f-med mt-15">
                <Text className="cls-passenger-heading">
                  <Text className="Infi-46_Infant"></Text> {t("infant")}
                </Text>
              </Col>
              <Row className={`${props?.pnrData ? "" : "ml-30"} w-100`}>
                {activePNRData[0]?.paxInfo?.map((item: any, index: number) => (
                  <React.Fragment key={"Infant"+index}>
                    {item.type === "Infant" ? (
                      editPassenger ? (
                        <Col xs={24} sm={12} md={8} xl={props?.pnrData ? 12 :8} className="mt-10 mb-10 ">
                          <Checkbox
                            name={item.id}
                            defaultChecked={props?.pnrData ? true : false}
                            onChange={(e) => {
                              handleCheck(e, item);
                            }}
                          >
                            <Col className="f-med text-ellipsis pr-15" title={item.passengerDetail.firstName + " " + item.passengerDetail.lastName}>
                              {item.passengerDetail.firstName +
                                " " +
                                item.passengerDetail.lastName}
                            </Col>
                            <Col className="cls-pas-details">
                              {item.passengerDetail.age},{" "}
                              {item.passengerDetail.gender}
                            </Col>
                          </Checkbox>
                        </Col>
                      ) : (
                        <Col xs={12} sm={8} xl={props?.pnrData ? 12 :8} className="mt-10 mb-10 ">
                          <Col className="f-med text-ellipsis pr-15" title={item.passengerDetail.firstName + " " + item.passengerDetail.lastName}>
                            {item.passengerDetail.firstName +
                              " " +
                              item.passengerDetail.lastName}
                          </Col>
                          <Col className="cls-pas-details">
                            {item.passengerDetail.age},{" "}
                            {item.passengerDetail.gender}
                          </Col>
                        </Col>
                      )
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </Row>
            </Row>
            {/* {!props?.isConfirmpage ? (
              <Col xl={24} className="cls-infoalert mt-10">
                <Alert
                  className="fs-13"
                  message={
                    <Text className="d-iblock ml-20">
                      {editPassenger ? t("pax_downsize_description") : t("pax_selection_description")}
                    </Text>
                  }
                  type="info"
                />
              </Col>
            ) : (
              ""
            )} */}
          </Card>
        </div>
      )}
    </>
  );
};
export default PassengerDetails;
