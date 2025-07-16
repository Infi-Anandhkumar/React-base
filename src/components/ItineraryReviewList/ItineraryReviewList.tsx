import { Row, Col, Tag, Alert, QRCode, Divider, Typography } from "antd";
import "./ItineraryReviewList.scss";
// import { FdFlightDestinationDotIcon, FlightRouteRe } from "../Icons/Icons";
import { useState } from "react";
// import { useAppSelector } from "../../hooks/App.hook";
import { t } from "i18next";
import { sessionStorageAccessor } from "./../../utils/browserStorage";
import React from "react";
import { getDynamicDate } from "./../../utils/general";
import { useResize } from "./../../utils/resize";
const Text = Typography.Text;

const ItineraryReviewList = (props: any) => {
  const { isSmallScreen } = useResize(1199);
  // eslint-disable-next-line
  const [text, _setText] = useState("https://reschedule.grouprm.net/");
  // const { activePNR } = useAppSelector((state) => state.PNRReducer);
  const [SgetFinalViewPnrData] =
    sessionStorageAccessor<any>("finalViewPNRData");
  const SfinalViewPnrData = SgetFinalViewPnrData();
  const [SgetSearchFlightPNRData] = sessionStorageAccessor<any>(
    "searchFlightPNRData"
  );
  const SsearchFlightPNRData = SgetSearchFlightPNRData();
  const [SgetFinalReviewPnrData] =
    sessionStorageAccessor<any>("finalReviewPNRData");
  const SfinalReviewPnrData = SgetFinalReviewPnrData();
  var activePNR: any = [
    {
      id: 1,
      PNR: "VAD001",
      flightNumber: "VA-0135",
      active: true,
      readAt: "-",
      policy: "Delayed_01",
      score: "+10.00",
      scoreStatus: "least",
      status: "Email not sent",
      reason: "Due to air traffic control",
      alertStatus: {
        whatsapp: "#",
        mail: "#",
        sms: "#",
      },
      firstName: "Pradeep",
      lastName: "Kumar",
      emailId: "pradeepkumar@infinitisoftware.net",
      dateOfBooking: "0,0,21, 11:05 (UTC+05:30)",
      totalPaxCount: 5,
      totalAdultPaxCount: 3,
      totalChildPaxCount: 1,
      totalInfantPaxCount: 1,
      totalAmount: 550,
      paidAmount: 550,
      balanceAmount: 0,
      scorePolicyName: "Voyager pax",
      scoreAttributes: [
        {
          type: "SSR",
          value: "-",
          label: "-",
        },
        {
          type: "Travel type",
          value: "leisure",
          label: "Leisure",
        },
        {
          type: "Cabin",
          value: "business",
          label: "Business",
        },
        {
          type: "Booking channel",
          value: "ota",
          label: "OTA",
        },
      ],
      paxInfo: [
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
      ],
      originalFlightDetails: [
        {
          trip: 1,
          date: "0,0,31",
          origin: "Delhi",
          originAirportCode: "DEL",
          destination: "London",
          destinationAirportCode: "LHR",
          stops: 1,
          stopDetails: [
            {
              airportName: "Bahrain",
              airportCode: "BAH",
              stopOverTime: "10h 50m",
            },
          ],
          flightDetails: [
            {
              id: 1,
              origin: "Delhi",
              originAirportCode: "DEL",
              destination: "Bahrain",
              destinationAirportCode: "BAH",
              flightNumber: "VA-0135",
              stops: 1,
              paxCount: 10,
              departDate: "0,0,31",
              depart: "21:50",
              arrivalDate: "0,0,31",
              arrival: "23:35",
              departTimezone: "UTC+05:30",
              arrivalTimezone: "UTC+03:00",
              nextDayArrival: "",
              duration: "04h 15m",
              status: "Time change",
              statusCode: "TK",
            },
            {
              id: 2,
              origin: "Bahrain",
              originAirportCode: "BAH",
              destination: "London",
              destinationAirportCode: "LHR",
              flightNumber: "VA-0003",
              stops: 1,
              paxCount: 10,
              departDate: "0,1,1",
              depart: "10:25",
              arrivalDate: "0,1,1",
              arrival: "14:45",
              departTimezone: "UTC+03:00",
              arrivalTimezone: "UTC+01:00",
              nextDayArrival: "",
              duration: "07h 20m",
              status: "Confirmed",
              statusCode: "HK",
            },
          ],
        },
      ],
      rebookOptionalFlightDetails: [
        {
          trip: 1,
          date: "0,0,31",
          origin: "Delhi",
          originAirportCode: "DEL",
          destination: "London",
          destinationAirportCode: "LHR",
          stops: 1,
          stopDetails: [
            {
              airportName: "Bahrain",
              airportCode: "BAH",
              stopOverTime: "2h 25m",
            },
          ],
          flightDetails: [
            {
              id: 1,
              origin: "Delhi",
              originAirportCode: "DEL",
              destination: "Bahrain",
              destinationAirportCode: "BAH",
              flightNumber: "VA-0135",
              stops: 1,
              paxCount: 10,
              departDate: "0,1,1",
              depart: "05:40",
              arrivalDate: "0,1,1",
              arrival: "08:00",
              departTimezone: "UTC+05:30",
              arrivalTimezone: "UTC+03:00",
              nextDayArrival: "",
              duration: "04h 50m",
              status: "Schedule changed",
              statusCode: "SC",
              ssrData: {
                seatData: [
                  {
                    item: "Free",
                    icon: "FreeSeatIcon",
                  },
                  {
                    item: "Occupied",
                    icon: "OccupiedSeatIcon",
                  },
                  {
                    item: "USD 5",
                    icon: "USD5SeatIcon",
                  },
                  {
                    item: "USD 10",
                    icon: "USD10SeatIcon",
                  },
                  {
                    item: "Baby Bassinets",
                    icon: "BabySeatIcon",
                  },
                  {
                    item: "Selected",
                    icon: "SelectedSeatIcon",
                  },
                ],
                seatList: [
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I1",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I2",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I3",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I4",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I5",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I6",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I7",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I8",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I9",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I10",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I11",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I12",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I13",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I14",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I15",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I16",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I17",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I18",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I19",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I20",
                      type: "Window",
                      price: "2",
                    },
                  ],
                  [
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H1",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H2",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H3",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H4",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H5",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H6",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H7",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G1",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G2",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G3",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G4",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G5",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G6",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G7",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F1",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F2",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F3",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F4",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F5",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F6",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F7",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F8",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F9",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F10",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F11",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F12",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F13",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F14",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F15",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F16",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F17",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F18",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F19",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F20",
                      type: "Aisle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E1",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E2",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E3",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E4",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E5",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E6",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E7",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D1",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D2",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D3",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D4",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D5",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D6",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D7",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C1",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C2",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C3",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C4",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C5",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C6",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C7",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C8",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C9",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C10",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C11",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C12",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C13",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C14",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C15",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C16",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C17",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C18",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C19",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C20",
                      type: "Aisle",
                      price: "2",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B1",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B2",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B3",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B4",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B5",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B6",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B7",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A1",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A2",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A3",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A4",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 10",
                      icon: "USD10SeatIcon",
                      seat_number: "A5",
                      type: "Window",
                      price: "10",
                    },
                    {
                      item: "USD 10",
                      icon: "USD10SeatIcon",
                      seat_number: "A6",
                      type: "Window",
                      price: "10",
                    },
                    {
                      item: "USD 10",
                      icon: "USD10SeatIcon",
                      seat_number: "A7",
                      type: "Window",
                      price: "10",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A8",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A9",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A10",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A11",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A12",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A13",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A14",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A15",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A16",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A17",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A18",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A19",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A20",
                      type: "Window",
                      price: "2",
                    },
                  ],
                ],
                baggageList: [
                  {
                    item: "5kg",
                    price: "1800.00",
                  },
                  {
                    item: "10kg",
                    price: "3600.00",
                  },
                  {
                    item: "15kg",
                    price: "4500.00",
                  },
                  {
                    item: "20kg",
                    price: "7200.00",
                  },
                  {
                    item: "25kg",
                    price: "9000.00",
                  },
                  {
                    item: "30kg",
                    price: "11800.00",
                  },
                ],
                mealsList: [
                  {
                    Kosher: [
                      {
                        item: "Kosher Meal Western",
                        type: "veg",
                        price: "140.50",
                      },
                      {
                        item: "Kosher Meal Turkish",
                        type: "nonveg",
                        price: "120.50",
                      },
                    ],
                    "Non Veg": [
                      {
                        item: "Non Vegetarian Western",
                        type: "nonveg",
                        price: "130.50",
                      },
                      {
                        item: "Non Vegetarian Turkish",
                        type: "nonveg",
                        price: "150.50",
                      },
                    ],
                    Veg: [
                      {
                        item: "Vegetarian Western",
                        type: "veg",
                        price: "110.50",
                      },
                      {
                        item: "Vegetarian Turkish",
                        type: "veg",
                        price: "130.50",
                      },
                    ],
                    Baby: [
                      {
                        item: "Baby Meal Western",
                        type: "veg",
                        price: "160.50",
                      },
                      {
                        item: "Baby Meal Turkish",
                        type: "veg",
                        price: "170.50",
                      },
                    ],
                    Jain: [
                      {
                        item: "Jain Meal Western",
                        type: "veg",
                        price: "160.50",
                      },
                      {
                        item: "Jain Meal Turkish",
                        type: "nonveg",
                        price: "190.50",
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 2,
              origin: "Bahrain",
              originAirportCode: "BAH",
              destination: "London",
              destinationAirportCode: "LHR",
              flightNumber: "VA-0003",
              stops: 1,
              paxCount: 10,
              departDate: "0,1,1",
              depart: "10:25",
              arrivalDate: "0,1,1",
              arrival: "14:45",
              departTimezone: "UTC+03:00",
              arrivalTimezone: "UTC+01:00",
              nextDayArrival: "",
              duration: "07h 20m",
              status: "Confirmed",
              statusCode: "HK",
              ssrData: {
                seatData: [
                  {
                    item: "Free",
                    icon: "FreeSeatIcon",
                  },
                  {
                    item: "Occupied",
                    icon: "OccupiedSeatIcon",
                  },
                  {
                    item: "USD 5",
                    icon: "USD5SeatIcon",
                  },
                  {
                    item: "USD 10",
                    icon: "USD10SeatIcon",
                  },
                  {
                    item: "Baby Bassinets",
                    icon: "BabySeatIcon",
                  },
                  {
                    item: "Selected",
                    icon: "SelectedSeatIcon",
                  },
                ],
                seatList: [
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I1",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I2",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I3",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I4",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I5",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I6",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I7",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I8",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I9",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I10",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "I11",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I12",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I13",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I14",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I15",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I16",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I17",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I18",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I19",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "I20",
                      type: "Window",
                      price: "2",
                    },
                  ],
                  [
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H1",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H2",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H3",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H4",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H5",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H6",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H7",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "H15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G1",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G2",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G3",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G4",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G5",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G6",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G7",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "G14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "H20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F1",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F2",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F3",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F4",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F5",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F6",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "F7",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F8",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F9",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F10",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F11",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F12",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F13",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F14",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F15",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F16",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F17",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F18",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F19",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "F20",
                      type: "Aisle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E1",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E2",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E3",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E4",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E5",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E6",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "E7",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "E20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D1",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D2",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D3",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D4",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D5",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D6",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "D7",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "D20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C1",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C2",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C3",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C4",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C5",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C6",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "C7",
                      type: "Aisle",
                      price: "5",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C8",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C9",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C10",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C11",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C12",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C13",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C14",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "C15",
                      type: "Aisle",
                      price: "0",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C16",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C17",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C18",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C19",
                      type: "Aisle",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "C20",
                      type: "Aisle",
                      price: "2",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B1",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B2",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B3",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B4",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B5",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B6",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "B7",
                      type: "Middle",
                      price: "5",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B8",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B9",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B10",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B11",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B12",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B13",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B14",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B15",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B16",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B17",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B18",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B19",
                      type: "Middle",
                      price: "0",
                    },
                    {
                      item: "Occupied",
                      icon: "OccupiedSeatIcon",
                      seat_number: "B20",
                      type: "Middle",
                      price: "0",
                    },
                  ],
                  [
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A1",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A2",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A3",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 5",
                      icon: "USD5SeatIcon",
                      seat_number: "A4",
                      type: "Window",
                      price: "5",
                    },
                    {
                      item: "USD 10",
                      icon: "USD10SeatIcon",
                      seat_number: "A5",
                      type: "Window",
                      price: "10",
                    },
                    {
                      item: "USD 10",
                      icon: "USD10SeatIcon",
                      seat_number: "A6",
                      type: "Window",
                      price: "10",
                    },
                    {
                      item: "USD 10",
                      icon: "USD10SeatIcon",
                      seat_number: "A7",
                      type: "Window",
                      price: "10",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A8",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A9",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A10",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Free",
                      icon: "FreeSeatIcon",
                      seat_number: "A11",
                      type: "Window",
                      price: "0",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A12",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A13",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A14",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A15",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A16",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A17",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A18",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A19",
                      type: "Window",
                      price: "2",
                    },
                    {
                      item: "Baby",
                      icon: "BabySeatIcon",
                      seat_number: "A20",
                      type: "Window",
                      price: "2",
                    },
                  ],
                ],
                baggageList: [
                  {
                    item: "5kg",
                    price: "1800.00",
                  },
                  {
                    item: "10kg",
                    price: "3600.00",
                  },
                  {
                    item: "15kg",
                    price: "4500.00",
                  },
                  {
                    item: "20kg",
                    price: "7200.00",
                  },
                  {
                    item: "25kg",
                    price: "9000.00",
                  },
                  {
                    item: "30kg",
                    price: "11800.00",
                  },
                ],
                mealsList: [
                  {
                    Kosher: [
                      {
                        item: "Kosher Meal Western",
                        type: "veg",
                        price: "140.50",
                      },
                      {
                        item: "Kosher Meal Turkish",
                        type: "nonveg",
                        price: "120.50",
                      },
                    ],
                    "Non Veg": [
                      {
                        item: "Non Vegetarian Western",
                        type: "nonveg",
                        price: "130.50",
                      },
                      {
                        item: "Non Vegetarian Turkish",
                        type: "nonveg",
                        price: "150.50",
                      },
                    ],
                    Veg: [
                      {
                        item: "Vegetarian Western",
                        type: "veg",
                        price: "110.50",
                      },
                      {
                        item: "Vegetarian Turkish",
                        type: "veg",
                        price: "130.50",
                      },
                    ],
                    Baby: [
                      {
                        item: "Baby Meal Western",
                        type: "veg",
                        price: "160.50",
                      },
                      {
                        item: "Baby Meal Turkish",
                        type: "veg",
                        price: "170.50",
                      },
                    ],
                    Jain: [
                      {
                        item: "Jain Meal Western",
                        type: "veg",
                        price: "160.50",
                      },
                      {
                        item: "Jain Meal Turkish",
                        type: "nonveg",
                        price: "190.50",
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ];

  console.log(activePNR, props.isConfirmpage);
  // const { reviewStatus } = useAppSelector((state) => state.ReviewFlightReducer);
  const [SgetReviewStatus] = sessionStorageAccessor<string>("reviewStatus");
  const SreviewStatus = SgetReviewStatus();
  const [reviewOption, setReviewOption] = useState<"Cancel" | "Accept" | "Modify" | "Custom">("Accept");
  // !reviewStatus
  //   ? SreviewStatus
  //   : props?.reviewStatus ? props.reviewStatus
  //                        : reviewStatus;
  const [SgetSelectedFlights] = sessionStorageAccessor<any>("selectedFlights");
  const SselectedFlights = SgetSelectedFlights();
  const selectedFlightData = SselectedFlights
    ? SselectedFlights
    : props?.selectedFlightData
    ? props?.selectedFlightData
    : [];
  const flightSpacing = "--";
  const allFlightChanged = selectedFlightData.length
    ? activePNR?.[0]?.rebookOptionalFlightDetails?.length ===
      selectedFlightData?.length
    : false;

  console.log(activePNR?.[0]?.rebookOptionalFlightDetails);

  return (
    <div data-testid="ItineraryReviewList" className="cls-itineraryReviewList">
      {reviewOption !== "Custom" && !props?.isConfirmpage ? (
        <div
          className={`cls-review-list cls-${reviewOption?.toLowerCase()}-border`}
        >
          <Row justify="start" className="cls-statusRow">
            <Text className={`cls-${reviewOption?.toLowerCase()}-span`}>
              {reviewOption === "Accept"
                ? "Accepted"
                : reviewOption === "Modify"
                ? "Modified"
                : reviewOption === "Cancel"
                ? "Cancelled"
                : ""}
            </Text>
          </Row>
          {reviewOption === "Accept" || reviewOption === "Cancel" ? (
            activePNR?.[0]?.rebookOptionalFlightDetails?.map(
              (data: any, mainIndex: number) =>
                data?.flightDetails?.map((item: any, index: number) => (
                  <React.Fragment
                    key={reviewOption + reviewOption + mainIndex + index}
                  >
                    {index === 0 ? (
                      <Text className="d-iblock pt-10 ml-20 p-clr cls-trip">
                        Trip {data.trip}
                      </Text>
                    ) : null}
                    <Row
                      style={{ padding: "5px 0px 15px" }}
                      justify="space-between"
                      className={`ml-20 mr-30 ${
                        data.flightDetails.length === index + 1 &&
                        activePNR?.[0]?.rebookOptionalFlightDetails?.length !==
                          mainIndex + 1
                          ? "bordered-row"
                          : ""
                      }`}
                    >
                      <Col
                        xs={24}
                        md={24}
                        lg={4}
                        xl={4}
                        className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                      >
                        {getDynamicDate(item?.departDate) as string}
                      </Col>
                      <Col
                        xs={6}
                        xl={4}
                        className={`${
                          isSmallScreen ? "fs-12 f-med" : "f-sbold"
                        } py-10 text-ellipsis`}
                        title={item?.flightNumber}
                      >
                        {item?.flightNumber}
                      </Col>
                      <Col xs={4} xl={5}>
                        <Text
                          className={`${
                            isSmallScreen ? "fs-14" : "fs-16"
                          } f-sbold d-block`}
                        >
                          {item?.originAirportCode}
                          <Text
                            className={`${
                              isSmallScreen
                                ? "fs-12 d-block"
                                : "fs-16 d-iblock pl-5"
                            } f-sbold`}
                          >
                            {item?.depart}
                          </Text>
                        </Text>
                        <Text className="fs-13 hide-res-only">
                          {getDynamicDate(item?.departDate) as string}
                        </Text>
                      </Col>
                      <Col xs={9} xl={5} className="fs-13 cls-lightgray py-10">
                        <Row className="cls-flight-route-container">
                          <Col className="cls-flight-duration">
                            {/* <FlightRouteRe /> */}
                          </Col>
                          <Text className="cls-travel-point">
                            {flightSpacing}
                          </Text>
                          <Col
                            className={`cls-flight-duration ${
                              isSmallScreen ? "fs-11" : "fs-12"
                            }`}
                          >
                            {item?.duration}
                          </Col>
                          <Text className="cls-travel-point">
                            {flightSpacing}
                          </Text>
                          <Col>{/* <FdFlightDestinationDotIcon /> */}</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={5}
                        xl={5}
                        className={`${isSmallScreen ? "text-right" : ""}`}
                      >
                        <Text
                          className={`${
                            isSmallScreen ? "fs-14" : "fs-16"
                          } f-sbold d-block`}
                        >
                          {item?.destinationAirportCode}
                          <Text
                            className={`${
                              isSmallScreen
                                ? "fs-12 d-block"
                                : "fs-16 d-iblock pl-5"
                            } f-sbold`}
                          >
                            {item?.arrival}
                          </Text>
                        </Text>
                        <Text className="fs-13 hide-res-only">
                          {getDynamicDate(item?.arrivalDate) as string}
                        </Text>
                      </Col>
                      <Col
                        xs={24}
                        xl={5}
                        className="py-10 text-left cls-disruptionStatus"
                      >
                        <Tag
                          color={
                            item?.statusCode === "HK"
                              ? "var(--ant-color-success-text-active)"
                              : item.statusCode === "SC"
                              ? "var(--t-primary)"
                              : item.statusCode === "WK"
                              ? "var(--ant-color-error-text-active)"
                              : "var(--t-orange-dark)"
                          }
                          className="mr-0"
                        >
                          {item?.status} ({item.statusCode})
                        </Tag>
                      </Col>
                    </Row>
                    {data.flightDetails.length !== index + 1 &&
                    data.stops !== "" ? (
                      <Row className="text-center">
                        <span className="d-block cls-stop">
                          {data?.stops} stop(s) -{" "}
                          {data?.stopDetails[index]?.airportName} (
                          {data?.stopDetails[index]?.airportCode}){" - "}
                          {data?.stopDetails[index]?.stopOverTime}
                        </span>
                      </Row>
                    ) : null}
                  </React.Fragment>
                ))
            )
          ) : (
            <></>
          )}
          {!allFlightChanged && reviewOption === "Modify" ? (
            activePNR?.[0]?.rebookOptionalFlightDetails?.map(
              (data: any, mainIndex: number) =>
                data?.flightDetails?.map((item: any, index: number) =>
                  item?.statusCode === "HK" ? (
                    <React.Fragment key={reviewOption + mainIndex + index}>
                      {index === 0 ? (
                        <Text className="d-iblock pt-10 ml-20 p-clr cls-trip">
                          Trip {data.trip}
                        </Text>
                      ) : null}
                      <Row
                        style={{ padding: "5px 0px 15px" }}
                        justify="space-between"
                        className={`ml-20 mr-30 ${
                          data.flightDetails.length === index + 1 &&
                          activePNR?.[0]?.rebookOptionalFlightDetails
                            ?.length !==
                            mainIndex + 1
                            ? "bordered-row"
                            : ""
                        }`}
                      >
                        <Col
                          xs={24}
                          md={24}
                          lg={4}
                          xl={4}
                          className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                        >
                          {getDynamicDate(item?.departDate) as string}
                        </Col>
                        <Col
                          xs={6}
                          xl={4}
                          className={`${
                            isSmallScreen ? "fs-12 f-med" : "f-sbold"
                          } py-10 text-ellipsis`}
                          title={item?.flightNumber}
                        >
                          {item?.flightNumber}
                        </Col>
                        <Col xs={4} xl={5}>
                          <Text
                            className={`${
                              isSmallScreen ? "fs-14" : "fs-16"
                            } f-sbold d-block`}
                          >
                            {item?.originAirportCode}
                            <Text
                              className={`${
                                isSmallScreen
                                  ? "fs-12 d-block"
                                  : "fs-16 d-iblock pl-5"
                              } f-sbold`}
                            >
                              {item?.depart}
                            </Text>
                          </Text>
                          <Text className="fs-13 hide-res-only">
                            {getDynamicDate(item?.departDate) as string}
                          </Text>
                        </Col>
                        <Col
                          xs={9}
                          xl={5}
                          className="fs-13 cls-lightgray py-10"
                        >
                          <Row className="cls-flight-route-container">
                            <Col className="cls-flight-duration">
                              {/* <FlightRouteRe /> */}
                            </Col>
                            <Text className="cls-travel-point">
                              {flightSpacing}
                            </Text>
                            <Col
                              className={`cls-flight-duration ${
                                isSmallScreen ? "fs-11" : "fs-12"
                              }`}
                            >
                              {item?.duration}
                            </Col>
                            <Text className="cls-travel-point">
                              {flightSpacing}
                            </Text>
                            <Col>{/* <FdFlightDestinationDotIcon /> */}</Col>
                          </Row>
                        </Col>
                        <Col
                          xs={5}
                          xl={5}
                          className={`${isSmallScreen ? "text-right" : ""}`}
                        >
                          <Text
                            className={`${
                              isSmallScreen ? "fs-14" : "fs-16"
                            } f-sbold d-block`}
                          >
                            {item?.destinationAirportCode}
                            <Text
                              className={`${
                                isSmallScreen
                                  ? "fs-12 d-block"
                                  : "fs-16 d-iblock pl-5"
                              } f-sbold`}
                            >
                              {item?.arrival}
                            </Text>
                          </Text>
                          <Text className="fs-13 hide-res-only">
                            {getDynamicDate(item?.arrivalDate) as string}
                          </Text>
                        </Col>
                        <Col
                          xs={24}
                          xl={5}
                          className="py-10 text-left cls-disruptionStatus"
                        >
                          <Tag
                            color={
                              item?.statusCode === "HK"
                                ? "var(--ant-color-success-text-active)"
                                : item.statusCode === "SC"
                                ? "var(--t-primary)"
                                : item.statusCode === "WK"
                                ? "var(--ant-color-error-text-active)"
                                : "var(--t-orange-dark)"
                            }
                            className="mr-0"
                          >
                            {item?.status} ({item.statusCode})
                          </Tag>
                        </Col>
                      </Row>
                      {data.flightDetails.length !== index + 1 &&
                      data.stops !== "" ? (
                        <Row className="text-center">
                          <span className="d-block cls-stop">
                            {data?.stops} stop(s) -{" "}
                            {data?.stopDetails[index]?.airportName} (
                            {data?.stopDetails[index]?.airportCode}){" - "}
                            {data?.stopDetails[index]?.stopOverTime}
                          </span>
                        </Row>
                      ) : null}
                    </React.Fragment>
                  ) : (
                    <></>
                  )
                )
            )
          ) : (
            <></>
          )}
          {selectedFlightData?.length ? (
            selectedFlightData?.map((data: any, flightIndex: number) => (
              <React.Fragment key={"CustomSelect" + flightIndex}>
                {data?.viaFlightDetails?.map((item: any, index: number) => (
                  <React.Fragment key={reviewOption + flightIndex + index}>
                    {index === 0 ? (
                      <Text className="d-iblock pt-10 ml-20 p-clr cls-trip">
                        Trip {data.trip}
                      </Text>
                    ) : (
                      <></>
                    )}
                    <Row
                      style={{ padding: "5px 0px 15px" }}
                      justify="space-between"
                      className={`ml-20 mr-30 ${
                        data.viaFlightDetails.length === index + 1 &&
                        selectedFlightData?.length !== flightIndex + 1
                          ? "bordered-row"
                          : ""
                      }`}
                    >
                      <Col
                        xs={24}
                        md={24}
                        lg={4}
                        xl={4}
                        className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                      >
                        {getDynamicDate(item?.departDate) as string}
                      </Col>
                      <Col
                        xs={6}
                        xl={4}
                        className={`${
                          isSmallScreen ? "fs-12 f-med" : "f-sbold"
                        } py-10 text-ellipsis`}
                        title={item?.flightNumber}
                      >
                        {item?.flightNumber}
                      </Col>
                      <Col xs={4} xl={5}>
                        <Text
                          className={`${
                            isSmallScreen ? "fs-14" : "fs-16"
                          } f-sbold d-block`}
                        >
                          {item?.originAirportCode}
                          <Text
                            className={`${
                              isSmallScreen
                                ? "fs-12 d-block"
                                : "fs-16 d-iblock pl-5"
                            } f-sbold`}
                          >
                            {item?.depart}
                          </Text>
                        </Text>
                        <Text className="fs-13 hide-res-only">
                          {getDynamicDate(item?.departDate) as string}
                        </Text>
                      </Col>
                      <Col xs={9} xl={5} className="fs-13 cls-lightgray py-10">
                        <Row className="cls-flight-route-container">
                          <Col className="cls-flight-duration">
                            {/* <FlightRouteRe /> */}
                          </Col>
                          <Text className="cls-travel-point">
                            {flightSpacing}
                          </Text>
                          <Col
                            className={`cls-flight-duration ${
                              isSmallScreen ? "fs-11" : "fs-12"
                            }`}
                          >
                            {item?.duration}
                          </Col>
                          <Text className="cls-travel-point">
                            {flightSpacing}
                          </Text>
                          <Col>{/* <FdFlightDestinationDotIcon /> */}</Col>
                        </Row>
                      </Col>
                      <Col
                        xs={5}
                        xl={5}
                        className={`${isSmallScreen ? "text-right" : ""}`}
                      >
                        <Text
                          className={`${
                            isSmallScreen ? "fs-14" : "fs-16"
                          } f-sbold d-block`}
                        >
                          {item?.destinationAirportCode}
                          <Text
                            className={`${
                              isSmallScreen
                                ? "fs-12 d-block"
                                : "fs-16 d-iblock pl-5"
                            } f-sbold`}
                          >
                            {item?.arrival}
                          </Text>
                        </Text>
                        <Text className="fs-13 hide-res-only">
                          {getDynamicDate(item?.arrivalDate) as string}
                        </Text>
                      </Col>
                      <Col
                        xs={24}
                        xl={5}
                        className="py-10 text-left cls-disruptionStatus"
                      >
                        <Tag
                          color={
                            data?.statusCode === "HK"
                              ? "var(--ant-color-success-text-active)"
                              : data?.statusCode === "SC"
                              ? "var(--t-primary)"
                              : data?.statusCode === "WK"
                              ? "var(--ant-color-error-text-active)"
                              : "var(--t-orange-dark)"
                          }
                          className="mr-0"
                        >
                          {data?.status} ({data?.statusCode})
                        </Tag>
                      </Col>
                    </Row>
                    {data?.stops !== 0 &&
                    data?.viaFlightDetails.length !== index + 1 ? (
                      <Row className="text-center">
                        <span className="d-block cls-stop">
                          {data?.stops} stop(s) - ({data?.viaPoints})
                        </span>
                      </Row>
                    ) : (
                      <></>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))
          ) : (
            <></>
          )}
          <Col className="mt-5 mb-10 mx-10 py-5 px-10">
            <Alert
              message={
                <Text className="ml-20 d-iblock">
                  {SreviewStatus?.toLowerCase() === "cancel"
                    ? (t("reject_flight_description") as string)
                    : (t("review_flight_description") as string)}
                </Text>
              }
              type="info"
            />
          </Col>
        </div>
      ) : reviewOption === "Custom" && !props?.isConfirmpage ? (
        <>
          {!allFlightChanged ? (
            activePNR?.[0]?.rebookOptionalFlightDetails?.map(
              (pnr: any, mainIndex: number) => (
                <div
                  className={`cls-review-list cls-${pnr?.itinerary_status?.toLowerCase()}-border mb-10 ${
                    mainIndex !== 0 && !isSmallScreen ? "mt-25" : ""
                  }`}
                >
                  {pnr?.itinerary_status?.toLowerCase() !== "modify" ? (
                    pnr?.flightDetails?.map((item: any, index: number) => (
                      <React.Fragment
                        key={
                          "pnrFlight" +
                          pnr?.itinerary_status?.toLowerCase() +
                          mainIndex +
                          index
                        }
                      >
                        {index === 0 ? (
                          <React.Fragment
                            key={
                              reviewOption +
                              pnr?.itinerary_status?.toLowerCase() +
                              "pnr" +
                              mainIndex +
                              index
                            }
                          >
                            <Row justify="start" className="cls-statusRow">
                              <Text
                                className={`cls-${pnr?.itinerary_status?.toLowerCase()}-span`}
                              >
                                {pnr?.itinerary_status?.toLowerCase() ===
                                "accept"
                                  ? "Accepted"
                                  : pnr?.itinerary_status?.toLowerCase() ===
                                    "modify"
                                  ? "Modified"
                                  : pnr?.itinerary_status?.toLowerCase() ===
                                    "cancel"
                                  ? "Cancelled"
                                  : ""}
                              </Text>
                            </Row>
                            <Text className="d-iblock pt-10 ml-20 p-clr cls-trip">
                              Trip {pnr.trip}
                            </Text>
                          </React.Fragment>
                        ) : (
                          <></>
                        )}
                        <Row
                          justify="space-between"
                          className={`py-15 pr-10 pl-20`}
                        >
                          <Col
                            xs={24}
                            md={24}
                            lg={4}
                            xl={4}
                            className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                          >
                            {getDynamicDate(item?.departDate) as string}
                          </Col>
                          <Col
                            xs={6}
                            xl={4}
                            className={`${
                              isSmallScreen ? "fs-12 f-med" : "f-sbold"
                            } py-10 text-ellipsis`}
                            title={item?.flightNumber}
                          >
                            {item?.flightNumber}
                          </Col>
                          <Col xs={4} xl={5}>
                            <Text
                              className={`${
                                isSmallScreen ? "fs-14" : "fs-16"
                              } f-sbold d-block`}
                            >
                              {item?.originAirportCode}
                              <Text
                                className={`${
                                  isSmallScreen
                                    ? "fs-12 d-block"
                                    : "fs-16 d-iblock pl-5"
                                } f-sbold`}
                              >
                                {item?.depart}
                              </Text>
                            </Text>
                            <Text className="fs-13 hide-res-only">
                              {getDynamicDate(item?.departDate) as string}
                            </Text>
                          </Col>
                          <Col
                            xs={9}
                            xl={5}
                            className="fs-13 cls-lightgray py-10"
                          >
                            <Row className="cls-flight-route-container">
                              <Col className="cls-flight-duration">
                                {/* <FlightRouteRe /> */}
                              </Col>
                              <Text className="cls-travel-point">
                                {flightSpacing}
                              </Text>
                              <Col
                                className={`cls-flight-duration ${
                                  isSmallScreen ? "fs-11" : "fs-12"
                                }`}
                              >
                                {item?.duration}
                              </Col>
                              <Text className="cls-travel-point">
                                {flightSpacing}
                              </Text>
                              <Col>{/* <FdFlightDestinationDotIcon /> */}</Col>
                            </Row>
                          </Col>
                          <Col
                            xs={5}
                            xl={5}
                            className={`${isSmallScreen ? "text-right" : ""}`}
                          >
                            <Text
                              className={`${
                                isSmallScreen ? "fs-14" : "fs-16"
                              } f-sbold d-block`}
                            >
                              {item?.destinationAirportCode}
                              <Text
                                className={`${
                                  isSmallScreen
                                    ? "fs-12 d-block"
                                    : "fs-16 d-iblock pl-5"
                                } f-sbold`}
                              >
                                {item?.arrival}
                              </Text>
                            </Text>
                            <Text className="fs-13 hide-res-only">
                              {getDynamicDate(item?.arrivalDate) as string}
                            </Text>
                          </Col>
                          <Col
                            xs={24}
                            xl={5}
                            className="py-10 text-left cls-disruptionStatus"
                          >
                            <Tag
                              color={
                                item?.statusCode === "HK"
                                  ? "var(--ant-color-success-text-active)"
                                  : item.statusCode === "SC"
                                  ? "var(--t-primary)"
                                  : item.statusCode === "WK"
                                  ? "var(--ant-color-error-text-active)"
                                  : "var(--t-orange-dark)"
                              }
                              className="mr-0"
                            >
                              {item?.status} ({item.statusCode})
                            </Tag>
                          </Col>
                        </Row>
                        {pnr.flightDetails.length !== index + 1 &&
                        pnr.stops !== "" ? (
                          <Row className="text-center">
                            <span className="d-block cls-stop">
                              {" "}
                              {pnr?.stops} stop(s) -{" "}
                              {pnr?.stopDetails[index]?.airportName} (
                              {pnr?.stopDetails[index]?.airportCode}){" - "}
                              {pnr?.stopDetails[index]?.stopOverTime}
                            </span>
                          </Row>
                        ) : (
                          <></>
                        )}
                        {pnr?.itinerary_status &&
                          pnr?.flightDetails?.length === index + 1 && (
                            <Col className="mt-5 mb-10 mx-10 py-5 px-10">
                              <Alert
                                message={
                                  <Text className="ml-20 d-iblock">
                                    {pnr?.itinerary_status === "cancel"
                                      ? (t(
                                          "reject_flight_description"
                                        ) as string)
                                      : (t(
                                          "review_flight_description"
                                        ) as string)}
                                  </Text>
                                }
                                type="info"
                              />
                            </Col>
                          )}
                      </React.Fragment>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              )
            )
          ) : (
            <></>
          )}
          {selectedFlightData &&
            activePNR?.[0]?.rebookOptionalFlightDetails?.map(
              (pnr: any, mainIndex: number) => (
                <div
                  className={`cls-review-list cls-${pnr?.itinerary_status?.toLowerCase()}-border mb-10 ${
                    mainIndex !== 0 ? "mt-25" : ""
                  }`}
                >
                  {allFlightChanged && mainIndex === 0 ? (
                    selectedFlightData?.map((data: any, index: number) => (
                      <React.Fragment
                        key={reviewOption + "review" + mainIndex + index}
                      >
                        {index === 0 ? (
                          <Row justify="start" className="cls-statusRow">
                            <Text
                              className={`cls-${pnr?.itinerary_status?.toLowerCase()}-span`}
                            >
                              {pnr?.itinerary_status?.toLowerCase() === "accept"
                                ? "Accepted"
                                : pnr?.itinerary_status?.toLowerCase() ===
                                  "modify"
                                ? "Modified"
                                : pnr?.itinerary_status?.toLowerCase() ===
                                  "cancel"
                                ? "Cancelled"
                                : ""}
                            </Text>
                          </Row>
                        ) : (
                          <></>
                        )}
                        {data?.viaFlightDetails.map(
                          (item: any, index: number) => (
                            <React.Fragment key={"dataFlight" + index}>
                              {index === 0 ? (
                                <Text className="d-iblock pt-10 ml-20 p-clr cls-trip">
                                  Trip {data.trip}
                                </Text>
                              ) : (
                                <></>
                              )}
                              <Row
                                style={{ padding: "5px 0px 15px" }}
                                justify="space-between"
                                className={`mx-20 ${
                                  data?.viaFlightDetails.length === index + 1 &&
                                  item.trip !== "return"
                                    ? "bordered-row"
                                    : ""
                                }`}
                              >
                                <Col
                                  xs={24}
                                  md={24}
                                  lg={4}
                                  xl={4}
                                  className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                                >
                                  {getDynamicDate(item?.departDate) as string}
                                </Col>
                                <Col
                                  xs={6}
                                  xl={4}
                                  className={`${
                                    isSmallScreen ? "fs-12 f-med" : "f-sbold"
                                  } py-10 text-ellipsis`}
                                  title={item?.flightNumber}
                                >
                                  {item?.flightNumber}
                                </Col>
                                <Col xs={4} xl={5}>
                                  <Text
                                    className={`${
                                      isSmallScreen ? "fs-14" : "fs-16"
                                    } f-sbold d-block`}
                                  >
                                    {item?.originAirportCode}
                                    <Text
                                      className={`${
                                        isSmallScreen
                                          ? "fs-12 d-block"
                                          : "fs-16 d-iblock pl-5"
                                      } f-sbold`}
                                    >
                                      {item?.depart}
                                    </Text>
                                  </Text>
                                  <Text className="fs-13 hide-res-only">
                                    {getDynamicDate(item?.departDate) as string}
                                  </Text>
                                </Col>
                                <Col
                                  xs={9}
                                  xl={5}
                                  className="fs-13 cls-lightgray py-10"
                                >
                                  <Row className="cls-flight-route-container">
                                    <Col className="cls-flight-duration">
                                      {/* <FlightRouteRe /> */}
                                    </Col>
                                    <Text className="cls-travel-point">
                                      {flightSpacing}
                                    </Text>
                                    <Col
                                      className={`cls-flight-duration ${
                                        isSmallScreen ? "fs-11" : "fs-12"
                                      }`}
                                    >
                                      {item?.duration}
                                    </Col>
                                    <Text className="cls-travel-point">
                                      {flightSpacing}
                                    </Text>
                                    <Col>
                                      {/* <FdFlightDestinationDotIcon /> */}
                                    </Col>
                                  </Row>
                                </Col>
                                <Col
                                  xs={5}
                                  xl={5}
                                  className={`${
                                    isSmallScreen ? "text-right" : ""
                                  }`}
                                >
                                  <Text
                                    className={`${
                                      isSmallScreen ? "fs-14" : "fs-16"
                                    } f-sbold d-block`}
                                  >
                                    {item?.destinationAirportCode}
                                    <Text
                                      className={`${
                                        isSmallScreen
                                          ? "fs-12 d-block"
                                          : "fs-16 d-iblock pl-5"
                                      } f-sbold`}
                                    >
                                      {item?.arrival}
                                    </Text>
                                  </Text>
                                  <Text className="fs-13 hide-res-only">
                                    {
                                      getDynamicDate(
                                        item?.arrivalDate
                                      ) as string
                                    }
                                  </Text>
                                </Col>
                                <Col
                                  xs={24}
                                  xl={5}
                                  className="py-10 text-left cls-disruptionStatus"
                                >
                                  <Tag
                                    color={
                                      data?.statusCode === "HK"
                                        ? "var(--ant-color-success-text-active)"
                                        : data?.statusCode === "SC"
                                        ? "var(--t-primary)"
                                        : data?.statusCode === "WK"
                                        ? "var(--ant-color-error-text-active)"
                                        : "var(--t-orange-dark)"
                                    }
                                    className="mr-0"
                                  >
                                    {data?.status} ({data?.statusCode})
                                  </Tag>
                                </Col>
                              </Row>
                              {data?.stops !== 0 &&
                              data?.viaFlightDetails.length !== index + 1 ? (
                                <Row className="text-center">
                                  <span className="d-block cls-stop">
                                    {data?.stops} stop(s) - ({data?.viaPoints})
                                  </span>
                                </Row>
                              ) : (
                                <></>
                              )}
                            </React.Fragment>
                          )
                        )}
                        {pnr?.itinerary_status &&
                          selectedFlightData?.length === index + 1 && (
                            <Col className="mt-5 mb-10 mx-10 py-5 px-10">
                              <Alert
                                message={
                                  <Text className="ml-20 d-iblock">
                                    {pnr?.itinerary_status === "cancel"
                                      ? (t(
                                          "reject_flight_description"
                                        ) as string)
                                      : (t(
                                          "review_flight_description"
                                        ) as string)}
                                  </Text>
                                }
                                type="info"
                              />
                            </Col>
                          )}
                      </React.Fragment>
                    ))
                  ) : pnr?.itinerary_status?.toLowerCase() === "modify" &&
                    !allFlightChanged ? (
                    selectedFlightData?.map((data: any, index: number) => (
                      <React.Fragment
                        key={reviewOption + "select" + mainIndex + index}
                      >
                        {index === 0 ? (
                          <Row justify="start" className="cls-statusRow">
                            <Text
                              className={`cls-${pnr?.itinerary_status?.toLowerCase()}-span`}
                            >
                              {pnr?.itinerary_status?.toLowerCase() === "accept"
                                ? "Accepted"
                                : pnr?.itinerary_status?.toLowerCase() ===
                                  "modify"
                                ? "Modified"
                                : pnr?.itinerary_status?.toLowerCase() ===
                                  "cancel"
                                ? "Cancelled"
                                : ""}
                            </Text>
                          </Row>
                        ) : (
                          <></>
                        )}
                        {data?.viaFlightDetails.map(
                          (item: any, index: number) => (
                            <React.Fragment key={"data" + index}>
                              {index === 0 ? (
                                <Text className="d-iblock pt-10 ml-20 p-clr cls-trip">
                                  Trip {data.trip}
                                </Text>
                              ) : (
                                <></>
                              )}
                              <Row
                                style={{ padding: "5px 0px 15px" }}
                                justify="space-between"
                                className={`mx-20 ${
                                  data?.viaFlightDetails.length === index + 1 &&
                                  item.trip !== "return"
                                    ? "bordered-row"
                                    : ""
                                }`}
                              >
                                <Col
                                  xs={24}
                                  md={24}
                                  lg={4}
                                  xl={4}
                                  className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                                >
                                  {getDynamicDate(item?.departDate) as string}
                                </Col>
                                <Col
                                  xs={6}
                                  xl={4}
                                  className={`${
                                    isSmallScreen ? "fs-12 f-med" : "f-sbold"
                                  } py-10 text-ellipsis`}
                                  title={item?.flightNumber}
                                >
                                  {item?.flightNumber}
                                </Col>
                                <Col xs={4} xl={5}>
                                  <Text
                                    className={`${
                                      isSmallScreen ? "fs-14" : "fs-16"
                                    } f-sbold d-block`}
                                  >
                                    {item?.originAirportCode}
                                    <Text
                                      className={`${
                                        isSmallScreen
                                          ? "fs-12 d-block"
                                          : "fs-16 d-iblock pl-5"
                                      } f-sbold`}
                                    >
                                      {item?.depart}
                                    </Text>
                                  </Text>
                                  <Text className="fs-13 hide-res-only">
                                    {getDynamicDate(item?.departDate) as string}
                                  </Text>
                                </Col>
                                <Col
                                  xs={9}
                                  xl={5}
                                  className="fs-13 cls-lightgray py-10"
                                >
                                  <Row className="cls-flight-route-container">
                                    <Col className="cls-flight-duration">
                                      {/* <FlightRouteRe /> */}
                                    </Col>
                                    <Text className="cls-travel-point">
                                      {flightSpacing}
                                    </Text>
                                    <Col
                                      className={`cls-flight-duration ${
                                        isSmallScreen ? "fs-11" : "fs-12"
                                      }`}
                                    >
                                      {item?.duration}
                                    </Col>
                                    <Text className="cls-travel-point">
                                      {flightSpacing}
                                    </Text>
                                    <Col>
                                      {/* <FdFlightDestinationDotIcon /> */}
                                    </Col>
                                  </Row>
                                </Col>
                                <Col
                                  xs={5}
                                  xl={5}
                                  className={`${
                                    isSmallScreen ? "text-right" : ""
                                  }`}
                                >
                                  <Text
                                    className={`${
                                      isSmallScreen ? "fs-14" : "fs-16"
                                    } f-sbold d-block`}
                                  >
                                    {item?.destinationAirportCode}
                                    <Text
                                      className={`${
                                        isSmallScreen
                                          ? "fs-12 d-block"
                                          : "fs-16 d-iblock pl-5"
                                      } f-sbold`}
                                    >
                                      {item?.arrival}
                                    </Text>
                                  </Text>
                                  <Text className="fs-13 hide-res-only">
                                    {
                                      getDynamicDate(
                                        item?.arrivalDate
                                      ) as string
                                    }
                                  </Text>
                                </Col>
                                <Col
                                  xs={24}
                                  xl={5}
                                  className="py-10 text-left cls-disruptionStatus"
                                >
                                  <Tag
                                    color={
                                      data?.statusCode === "HK"
                                        ? "var(--ant-color-success-text-active)"
                                        : data?.statusCode === "SC"
                                        ? "var(--t-primary)"
                                        : data?.statusCode === "WK"
                                        ? "var(--ant-color-error-text-active)"
                                        : "var(--t-orange-dark)"
                                    }
                                    className="mr-0"
                                  >
                                    {data?.status} ({data?.statusCode})
                                  </Tag>
                                </Col>
                              </Row>
                              {data?.stops !== 0 &&
                              data?.viaFlightDetails.length !== index + 1 ? (
                                <Row className="text-center">
                                  <span className="d-block cls-stop">
                                    {data?.stops} stop(s) - ({data?.viaPoints})
                                  </span>
                                </Row>
                              ) : (
                                <></>
                              )}
                            </React.Fragment>
                          )
                        )}
                        {pnr?.itinerary_status &&
                          selectedFlightData?.length === index + 1 && (
                            <Col className="mt-5 mb-10 mx-10 py-5 px-10">
                              <Alert
                                message={
                                  <Text className="ml-20 d-iblock">
                                    {pnr?.itinerary_status === "cancel"
                                      ? (t(
                                          "reject_flight_description"
                                        ) as string)
                                      : (t(
                                          "review_flight_description"
                                        ) as string)}
                                  </Text>
                                }
                                type="info"
                              />
                            </Col>
                          )}
                      </React.Fragment>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              )
            )}
        </>
      ) : (
        <></>
      )}
      {props?.isConfirmpage ? (
        <Row>
          <Col xs={24} lg={24} xl={20}>
            {selectedFlightData?.length &&
            (reviewOption === "Modify" || reviewOption === "Custom") ? (
              <React.Fragment key={reviewOption + "confirmselected"}>
                {selectedFlightData?.length !==
                activePNR?.[0]?.rebookOptionalFlightDetails?.length
                  ? activePNR?.[0]?.rebookOptionalFlightDetails?.map(
                      (data: any, mainIndex: number) => (
                        <React.Fragment
                          key={reviewOption + "selectedpnr" + mainIndex}
                        >
                          {data.flightDetails.map((item: any, index: number) =>
                            item?.statusCode === "HK" ||
                            (data?.itinerary_status &&
                              data?.itinerary_status?.toLowerCase() !==
                                "modify") ? (
                              <React.Fragment
                                key={
                                  reviewOption + "selectedpnrsub" + mainIndex
                                }
                              >
                                {index === 0 && (
                                  <Text className="d-iblock pt-10 p-clr cls-trip">
                                    Trip {data.trip}
                                  </Text>
                                )}
                                <Row
                                  style={{ padding: "5px 0px 15px" }}
                                  justify="space-between"
                                  className={`mr-20 ${
                                    data?.flightDetails.length === index + 1 &&
                                    activePNR?.[0]?.rebookOptionalFlightDetails
                                      ?.length !==
                                      mainIndex + 1
                                      ? "bordered-row"
                                      : ""
                                  }`}
                                >
                                  <Col
                                    xs={24}
                                    md={24}
                                    lg={4}
                                    xl={4}
                                    className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                                  >
                                    {getDynamicDate(item?.departDate) as string}
                                  </Col>
                                  <Col
                                    xs={6}
                                    xl={4}
                                    className={`${
                                      isSmallScreen ? "fs-12 f-med" : "f-sbold"
                                    } py-10 text-ellipsis`}
                                    title={item?.flightNumber}
                                  >
                                    {item?.flightNumber}
                                  </Col>
                                  <Col xs={4} xl={5}>
                                    <Text
                                      className={`${
                                        isSmallScreen ? "fs-14" : "fs-16"
                                      } f-sbold d-block`}
                                    >
                                      {item?.originAirportCode}
                                      <Text
                                        className={`${
                                          isSmallScreen
                                            ? "fs-12 d-block"
                                            : "fs-16 d-iblock pl-5"
                                        } f-sbold`}
                                      >
                                        {item?.depart}
                                      </Text>
                                    </Text>
                                    <Text className="fs-13 hide-res-only">
                                      {
                                        getDynamicDate(
                                          item?.departDate
                                        ) as string
                                      }
                                    </Text>
                                  </Col>
                                  <Col
                                    xs={9}
                                    xl={5}
                                    className="fs-13 cls-lightgray py-10"
                                  >
                                    <Row className="cls-flight-route-container">
                                      <Col className="cls-flight-duration">
                                        {/* <FlightRouteRe /> */}
                                      </Col>
                                      <Text className="cls-travel-point">
                                        {flightSpacing}
                                      </Text>
                                      <Col
                                        className={`cls-flight-duration ${
                                          isSmallScreen ? "fs-11" : "fs-12"
                                        }`}
                                      >
                                        {item?.duration}
                                      </Col>
                                      <Text className="cls-travel-point">
                                        {flightSpacing}
                                      </Text>
                                      <Col>
                                        {/* <FdFlightDestinationDotIcon /> */}
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col
                                    xs={5}
                                    xl={5}
                                    className={`${
                                      isSmallScreen ? "text-right" : ""
                                    }`}
                                  >
                                    <Text
                                      className={`${
                                        isSmallScreen ? "fs-14" : "fs-16"
                                      } f-sbold d-block`}
                                    >
                                      {item?.destinationAirportCode}
                                      <Text
                                        className={`${
                                          isSmallScreen
                                            ? "fs-12 d-block"
                                            : "fs-16 d-iblock pl-5"
                                        } f-sbold`}
                                      >
                                        {item?.arrival}
                                      </Text>
                                    </Text>
                                    <Text className="fs-13 hide-res-only">
                                      {
                                        getDynamicDate(
                                          item?.arrivalDate
                                        ) as string
                                      }
                                    </Text>
                                  </Col>
                                  <Col
                                    xs={24}
                                    xl={5}
                                    className="py-10 text-left cls-disruptionStatus"
                                  >
                                    <Tag
                                      color={
                                        item?.statusCode === "HK"
                                          ? "var(--ant-color-success-text-active)"
                                          : item.statusCode === "SC"
                                          ? "var(--t-primary)"
                                          : item.statusCode === "WK"
                                          ? "var(--ant-color-error-text-active)"
                                          : "var(--t-orange-dark)"
                                      }
                                      className="mr-0"
                                    >
                                      {data?.itinerary_status === "cancel" ||
                                      item?.status === "Cancelled"
                                        ? "Cancelled"
                                        : item?.status +
                                          " (" +
                                          item.statusCode +
                                          ")"}
                                    </Tag>
                                  </Col>
                                </Row>
                                {data.flightDetails.length !== index + 1 &&
                                  data.stops !== "" && (
                                    <Row className="text-center">
                                      <span className="d-block cls-stop">
                                        {data?.stops} stop(s) -{" "}
                                        {data?.stopDetails[index]?.airportName}{" "}
                                        ({data?.stopDetails[index]?.airportCode}
                                        ){" - "}
                                        {data?.stopDetails[index]?.stopOverTime}
                                      </span>
                                    </Row>
                                  )}
                              </React.Fragment>
                            ) : (
                              <></>
                            )
                          )}
                        </React.Fragment>
                      )
                    )
                  : activePNR?.[0]?.rebookOptionalFlightDetails?.map(
                      (data: any, mainIndex: number) => (
                        <React.Fragment key={reviewOption + "pnr" + mainIndex}>
                          {data.flightDetails.map((item: any, index: number) =>
                            item?.statusCode === "HK" &&
                            data?.itinerary_status &&
                            data?.itinerary_status?.toLowerCase() !==
                              "modify" ? (
                              <React.Fragment
                                key={reviewOption + "pnrsub" + index}
                              >
                                {index === 0 && (
                                  <Text className="d-iblock pt-10 p-clr cls-trip">
                                    Trip {data.trip}
                                  </Text>
                                )}
                                <Row
                                  style={{ padding: "5px 0px 15px" }}
                                  justify="space-between"
                                  className={`mr-20 ${
                                    data.flightDetails.length === index + 1 &&
                                    activePNR?.[0]?.rebookOptionalFlightDetails
                                      ?.length !==
                                      mainIndex + 1
                                      ? "bordered-row"
                                      : ""
                                  }`}
                                >
                                  <Col
                                    xs={24}
                                    md={24}
                                    lg={4}
                                    xl={4}
                                    className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                                  >
                                    {getDynamicDate(item?.departDate) as string}
                                  </Col>
                                  <Col
                                    xs={6}
                                    xl={4}
                                    className={`${
                                      isSmallScreen ? "fs-12 f-med" : "f-sbold"
                                    } py-10 text-ellipsis`}
                                    title={item?.flightNumber}
                                  >
                                    {item?.flightNumber}
                                  </Col>
                                  <Col xs={4} xl={5}>
                                    <Text
                                      className={`${
                                        isSmallScreen ? "fs-14" : "fs-16"
                                      } f-sbold d-block`}
                                    >
                                      {item?.originAirportCode}
                                      <Text
                                        className={`${
                                          isSmallScreen
                                            ? "fs-12 d-block"
                                            : "fs-16 d-iblock pl-5"
                                        } f-sbold`}
                                      >
                                        {item?.depart}
                                      </Text>
                                    </Text>
                                    <Text className="fs-13 hide-res-only">
                                      {
                                        getDynamicDate(
                                          item?.departDate
                                        ) as string
                                      }
                                    </Text>
                                  </Col>
                                  <Col
                                    xs={9}
                                    xl={5}
                                    className="fs-13 cls-lightgray py-10"
                                  >
                                    <Row className="cls-flight-route-container">
                                      <Col className="cls-flight-duration">
                                        {/* <FlightRouteRe /> */}
                                      </Col>
                                      <Text className="cls-travel-point">
                                        {flightSpacing}
                                      </Text>
                                      <Col
                                        className={`cls-flight-duration ${
                                          isSmallScreen ? "fs-11" : "fs-12"
                                        }`}
                                      >
                                        {item?.duration}
                                      </Col>
                                      <Text className="cls-travel-point">
                                        {flightSpacing}
                                      </Text>
                                      <Col>
                                        {/* <FdFlightDestinationDotIcon /> */}
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col
                                    xs={5}
                                    xl={5}
                                    className={`${
                                      isSmallScreen ? "text-right" : ""
                                    }`}
                                  >
                                    <Text
                                      className={`${
                                        isSmallScreen ? "fs-14" : "fs-16"
                                      } f-sbold d-block`}
                                    >
                                      {item?.destinationAirportCode}
                                      <Text
                                        className={`${
                                          isSmallScreen
                                            ? "fs-12 d-block"
                                            : "fs-16 d-iblock pl-5"
                                        } f-sbold`}
                                      >
                                        {item?.arrival}
                                      </Text>
                                    </Text>
                                    <Text className="fs-13 hide-res-only">
                                      {
                                        getDynamicDate(
                                          item?.arrivalDate
                                        ) as string
                                      }
                                    </Text>
                                  </Col>
                                  <Col
                                    xs={24}
                                    xl={5}
                                    className="py-10 text-left cls-disruptionStatus"
                                  >
                                    <Tag
                                      color={
                                        item?.statusCode === "HK"
                                          ? "var(--ant-color-success-text-active)"
                                          : item.statusCode === "SC"
                                          ? "var(--t-primary)"
                                          : item.statusCode === "WK"
                                          ? "var(--ant-color-error-text-active)"
                                          : "var(--t-orange-dark)"
                                      }
                                      className="mr-0"
                                    >
                                      {data?.itinerary_status === "cancel" ||
                                      item?.status === "Cancelled"
                                        ? "Cancelled"
                                        : item?.status +
                                          " (" +
                                          item.statusCode +
                                          ")"}
                                    </Tag>
                                  </Col>
                                </Row>
                                {data.flightDetails.length !== index + 1 &&
                                  data.stops !== "" && (
                                    <Row className="text-center">
                                      <span className="d-block cls-stop">
                                        {data?.stops} stop(s) -{" "}
                                        {data?.stopDetails[index]?.airportName}{" "}
                                        ({data?.stopDetails[index]?.airportCode}
                                        ){" - "}
                                        {data?.stopDetails[index]?.stopOverTime}
                                      </span>
                                    </Row>
                                  )}
                              </React.Fragment>
                            ) : (
                              <></>
                            )
                          )}
                        </React.Fragment>
                      )
                    )}
                {selectedFlightData?.map((data: any, mainIndex: number) => (
                  <React.Fragment key={"selectedFlight" + mainIndex}>
                    {data?.viaFlightDetails?.map((item: any, index: number) => (
                      <React.Fragment key={reviewOption + "selected" + index}>
                        {index === 0 ? (
                          <Text className="d-iblock pt-10 p-clr cls-trip">
                            Trip {data.trip}
                          </Text>
                        ) : (
                          <></>
                        )}
                        <Row
                          style={{ padding: "5px 0px 15px" }}
                          justify="space-between"
                          className={`mr-20 ${
                            data.viaFlightDetails.length === index + 1 &&
                            selectedFlightData?.length !== mainIndex + 1
                              ? "bordered-row"
                              : ""
                          }`}
                        >
                          <Col
                            xs={24}
                            md={24}
                            lg={4}
                            xl={4}
                            className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                          >
                            {getDynamicDate(item?.departDate) as string}
                          </Col>
                          <Col
                            xs={6}
                            xl={4}
                            className={`${
                              isSmallScreen ? "fs-12 f-med" : "f-sbold"
                            } py-10 text-ellipsis`}
                            title={item?.flightNumber}
                          >
                            {item?.flightNumber}
                          </Col>
                          <Col xs={4} xl={5}>
                            <Text
                              className={`${
                                isSmallScreen ? "fs-14" : "fs-16"
                              } f-sbold d-block`}
                            >
                              {item?.originAirportCode}
                              <Text
                                className={`${
                                  isSmallScreen
                                    ? "fs-12 d-block"
                                    : "fs-16 d-iblock pl-5"
                                } f-sbold`}
                              >
                                {item?.depart}
                              </Text>
                            </Text>
                            <Text className="fs-13 hide-res-only">
                              {getDynamicDate(item?.departDate) as string}
                            </Text>
                          </Col>
                          <Col
                            xs={9}
                            xl={5}
                            className="fs-13 cls-lightgray py-10"
                          >
                            <Row className="cls-flight-route-container">
                              <Col className="cls-flight-duration">
                                {/* <FlightRouteRe /> */}
                              </Col>
                              <Text className="cls-travel-point">
                                {flightSpacing}
                              </Text>
                              <Col
                                className={`cls-flight-duration ${
                                  isSmallScreen ? "fs-11" : "fs-12"
                                }`}
                              >
                                {item?.duration}
                              </Col>
                              <Text className="cls-travel-point">
                                {flightSpacing}
                              </Text>
                              <Col>{/* <FdFlightDestinationDotIcon /> */}</Col>
                            </Row>
                          </Col>
                          <Col
                            xs={5}
                            xl={5}
                            className={`${isSmallScreen ? "text-right" : ""}`}
                          >
                            <Text
                              className={`${
                                isSmallScreen ? "fs-14" : "fs-16"
                              } f-sbold d-block`}
                            >
                              {item?.destinationAirportCode}
                              <Text
                                className={`${
                                  isSmallScreen
                                    ? "fs-12 d-block"
                                    : "fs-16 d-iblock pl-5"
                                } f-sbold`}
                              >
                                {item?.arrival}
                              </Text>
                            </Text>
                            <Text className="fs-13 hide-res-only">
                              {getDynamicDate(item?.arrivalDate) as string}
                            </Text>
                          </Col>
                          <Col
                            xs={24}
                            xl={5}
                            className="py-10 text-left cls-disruptionStatus"
                          >
                            <Tag
                              color={"var(--ant-color-success-text-active)"}
                              className="mr-0"
                            >
                              Confirmed (HK)
                            </Tag>
                          </Col>
                        </Row>
                        {data?.stops !== 0 &&
                        data?.viaFlightDetails.length !== index + 1 ? (
                          <Row className="text-center">
                            <span className="d-block cls-stop">
                              {data?.stops} stop(s) - ({data?.viaPoints})
                            </span>
                          </Row>
                        ) : (
                          <></>
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment key={reviewOption + "confirm"}>
                {activePNR?.[0]?.rebookOptionalFlightDetails?.map(
                  (data: any, mainIndex: any) => (
                    <React.Fragment
                      key={reviewOption + "activepnr" + mainIndex}
                    >
                      {data?.flightDetails?.map((item: any, index: number) => (
                        <React.Fragment
                          key={reviewOption + "activepnrsub" + index}
                        >
                          {index === 0 ? (
                            <Text className="d-iblock pt-10 p-clr cls-trip">
                              Trip {data.trip}
                            </Text>
                          ) : (
                            <></>
                          )}
                          <Row
                            style={{
                              padding: isSmallScreen
                                ? "5px 0 15px 0"
                                : "5px 10px 15px 0",
                            }}
                            justify="space-between"
                            className={`${
                              data.flightDetails.length === index + 1 &&
                              activePNR?.[0]?.rebookOptionalFlightDetails
                                ?.length !==
                                mainIndex + 1
                                ? "bordered-row"
                                : ""
                            }`}
                          >
                            <Col
                              xs={24}
                              md={24}
                              lg={4}
                              xl={4}
                              className={`res-only cls-depDate fs-13 f-reg d-iblock h-24`}
                            >
                              {getDynamicDate(item?.departDate) as string}
                            </Col>
                            <Col
                              xs={6}
                              xl={4}
                              className={`${
                                isSmallScreen ? "fs-12 f-med" : "f-sbold"
                              } py-10 text-ellipsis`}
                              title={item?.flightNumber}
                            >
                              {item?.flightNumber}
                            </Col>

                            <Col xs={4} xl={5}>
                              <Text
                                className={`${
                                  isSmallScreen ? "fs-14" : "fs-16"
                                } f-sbold d-block`}
                              >
                                {item?.originAirportCode}
                                <Text
                                  className={`${
                                    isSmallScreen
                                      ? "fs-12 d-block"
                                      : "fs-16 d-iblock pl-5"
                                  } f-sbold`}
                                >
                                  {item?.depart}
                                </Text>
                              </Text>
                              <Text className="fs-13 hide-res-only">
                                {getDynamicDate(item?.departDate) as string}
                              </Text>
                            </Col>
                            <Col
                              xs={9}
                              xl={5}
                              className="fs-13 cls-lightgray py-10"
                            >
                              <Row className="cls-flight-route-container">
                                <Col className="cls-flight-duration">
                                  {/* <FlightRouteRe /> */}
                                </Col>
                                <Text className="cls-travel-point">
                                  {flightSpacing}
                                </Text>
                                <Col
                                  className={`cls-flight-duration ${
                                    isSmallScreen ? "fs-11" : "fs-12"
                                  }`}
                                >
                                  {item?.duration}
                                </Col>
                                <Text className="cls-travel-point">
                                  {flightSpacing}
                                </Text>
                                <Col>
                                  {/* <FdFlightDestinationDotIcon /> */}
                                </Col>
                              </Row>
                            </Col>
                            <Col
                              xs={5}
                              xl={5}
                              className={`${isSmallScreen ? "text-right" : ""}`}
                            >
                              <Text
                                className={`${
                                  isSmallScreen ? "fs-14" : "fs-16"
                                } f-sbold d-block`}
                              >
                                {item?.destinationAirportCode}
                                <Text
                                  className={`${
                                    isSmallScreen
                                      ? "fs-12 d-block"
                                      : "fs-16 d-iblock pl-5"
                                  } f-sbold`}
                                >
                                  {item?.arrival}
                                </Text>
                              </Text>
                              <Text className="fs-13 hide-res-only">
                                {getDynamicDate(item?.arrivalDate) as string}
                              </Text>
                            </Col>
                            <Col
                              xs={24}
                              xl={5}
                              className="py-10 text-left cls-disruptionStatus"
                            >
                              <Tag
                                color={
                                  item?.statusCode === "HK"
                                    ? "var(--ant-color-success-text-active)"
                                    : item.statusCode === "SC"
                                    ? "var(--t-primary)"
                                    : item.statusCode === "WK"
                                    ? "var(--ant-color-error-text-active)"
                                    : "var(--t-orange-dark)"
                                }
                                className="mr-0"
                              >
                                {data.itinerary_status === "cancel" ||
                                reviewOption === "Cancel" ||
                                item?.status === "Cancelled"
                                  ? "Cancelled"
                                  : item?.status + " (" + item.statusCode + ")"}
                              </Tag>
                            </Col>
                          </Row>
                          {data.flightDetails.length !== index + 1 &&
                          data.stops !== "" ? (
                            <Row className="text-center">
                              <span className="d-block cls-stop">
                                {data?.stops} stop(s) -
                                {data?.stopDetails[index]?.airportName} (
                                {data?.stopDetails[index]?.airportCode}){" - "}
                                {data?.stopDetails[index]?.stopOverTime}
                              </span>
                            </Row>
                          ) : (
                            <></>
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  )
                )}
              </React.Fragment>
            )}
          </Col>
          {isSmallScreen ? (
            <></>
          ) : (
            <>
              <Col xl={4} className="cls-qr-col">
                <QRCode value={text || "-"} size={110} />
              </Col>
              <Divider dashed />
            </>
          )}
        </Row>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItineraryReviewList;
