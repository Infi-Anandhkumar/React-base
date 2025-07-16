import { Button, Col, Row, Typography } from "antd";
import "./ReviewFlight.scss";
import { useEffect } from "react";
// import { useAppSelector } from "../../hooks/App.hook";
// import { setReviewFlightDetail } from "../../../stores/ReviewFlight.store";
import { useDispatch } from "react-redux";
import PassengerDetails from "./PassengerDetails/PassengerDetails";
import PriceSummary from "./PriceSummary/PriceSummary";
import ItineraryHeader, {
  type ItineraryHeaderProps,
} from "./../../components/DescriptionHeader/DescriptionHeader";
import ItineraryReviewList from "./../../components/ItineraryReviewList/ItineraryReviewList";
import { useTranslation } from "react-i18next";
import ReviewFlightSkeleton from "./ReviewFlight.skeleton";
import { sessionStorageAccessor } from "./../../utils/browserStorage";
import { getDynamicDate } from "./../../utils/general";
import { useRedirect } from "./../../hooks/Redirect.hook";
import { useResize } from "./../../utils/resize";
const { Text } = Typography;

const ReviewFlight = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isSmallScreen } = useResize(1199);
  // const { activePNRDetails } = useAppSelector(
  //   (state) => state.PNRReducer
  // );
  // const { reviewFlightDetail } = useAppSelector(
  //   (state) => state.ReviewFlightReducer
  // );
  // const options = activePNRDetails.paxInfo;
  const { redirect } = useRedirect();

  const [SgetFinalViewPnrData] =
    sessionStorageAccessor<any>("finalViewPNRData");
  // var activePNR:any = useMemo(() => SgetFinalViewPnrData() || [], [SgetFinalViewPnrData]);
  let activePNR = SgetFinalViewPnrData();

  console.log(activePNR);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // To change the store value for editing flight details or returning to the previous page's details, use the following useEffect.
  // useEffect(() => {
  //   if (reviewFlightDetail.isEdit) redirect("flightReschedule");
  //   // dispatch(setReviewFlightDetail(reviewFlightDetail));
  // }, [reviewFlightDetail?.isEdit]);

  let headerProps: ItineraryHeaderProps["data"] = {
    title: `${t("review_itinerary_changes")}`,
    description: `${t("review_itinerary_changes_description")}`,
  };
  // if (Object.keys(pnrObject).length !== 0) {
  headerProps = {
    ...headerProps,
    primaryHeading: "pnr",
    primaryValue: activePNR?.[0]?.PNR,
    secondaryHeading: "dateOfBooking",
    secondaryValue: `${activePNR?.[0]?.dateOfBooking.split(" ")[1]}, ${
      getDynamicDate(activePNR?.[0]?.dateOfBooking?.split(" ")?.[0]) as string
    } ${activePNR?.[0]?.dateOfBooking?.split(" ")?.[2]}`,
    breadcrumbProps: [
      // {
      //   path: "/planB",
      //   title: t("planb"),
      //   breadcrumbName: "planB",
      //   key: "Plan B"
      // },
      {
        path: "/viewPnrInfo",
        title: t("itinerary_details"),
        breadcrumbName: "viewPnrInfo",
        key: "Itinerary details",
      },
      {
        path: "/reviewflight",
        title: t("review_itinerary_changes"),
        breadcrumbName: "reviewflight",
        key: "Review itinerary changes",
      },
    ],
  };
  // }

  return (
    <>
      {activePNR?.length ? (
        <Row className="cls-reviewflightchange-row" data-testid="reviewFlight">
          <Col span={24}>
            <Row>
              <Col span={24}>
                <ItineraryHeader data={headerProps} />
              </Col>
              <Col xs={24} xl={16} className="cls-edit-btn pr-30">
                <Button
                  type="text"
                  className="f-sbold mb-5"
                  icon={<Text className="Infi-48_EditFill"></Text>}
                  onClick={() => {
                    redirect("viewPnrInfo");
                  }}
                >
                  {t("edit_changes")}
                </Button>
              </Col>
            </Row>
            <Row justify="space-between" className="mt-10">
              <Col xs={24} lg={16} className={isSmallScreen ? "" : "pr-30"}>
                <ItineraryReviewList />
                <Row>
                  <Col span={24} className="cls-passenger-details mt-30">
                    <PassengerDetails
                      options={[
                        {
                          id: 1,
                          type: "Adult",
                          passengerDetail: {
                            firstName: "Jhon",
                            lastName: "Smith",
                            age: "22 yrs",
                            gender: "Male",
                          },
                          originalSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                          rebookSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 2,
                          type: "Adult",
                          passengerDetail: {
                            firstName: "Daniel",
                            lastName: "Jones",
                            age: "33 yrs",
                            gender: "Male",
                          },
                          originalSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                          rebookSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 3,
                          type: "Adult",
                          passengerDetail: {
                            firstName: "David",
                            lastName: "Ford",
                            age: "42 yrs",
                            gender: "Male",
                          },
                          originalSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                          rebookSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 4,
                          type: "Child",
                          passengerDetail: {
                            firstName: "Thomas",
                            lastName: "Louie",
                            age: "11 yrs",
                            gender: "Male",
                          },
                          originalSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                          rebookSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 5,
                          type: "Infant",
                          passengerDetail: {
                            firstName: "William",
                            lastName: "Smith",
                            age: "2 yrs",
                            gender: "Male",
                          },
                          originalSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                          rebookSsrData: [
                            {
                              trip: 1,
                              ssrData: [
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                                {
                                  isSeatChecked: false,
                                  isBaggageChecked: false,
                                  isMealsChecked: false,
                                  seatDetail: {
                                    number: "",
                                    price: "",
                                    item: "",
                                    type: "",
                                    icon: "",
                                    selected: false,
                                  },
                                  baggageDetail: {
                                    item: "",
                                    price: "",
                                    selected: false,
                                  },
                                  mealsDetail: {
                                    item: "",
                                    type: "",
                                    price: "",
                                    selected: false,
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={8} className="cls-price-summary">
                <PriceSummary />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <ReviewFlightSkeleton />
      )}
    </>
  );
};

export default ReviewFlight;
