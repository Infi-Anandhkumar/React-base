import { Button, Card, Col, Modal, QRCode, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import "./ItineraryConfirm.scss";
import ItineraryReviewList from "../../components/ItineraryReviewList/ItineraryReviewList";
import PassengerDetails from "../ReviewFlight/PassengerDetails/PassengerDetails";
// import { PrintIcon } from "@/components/Icons/Icons";
// import { useAppSelector } from "./../../hooks/App.hook";
import CFG from "./../../config/config.json";
// import BreadcrumbComponent from "@/components/Breadcrumb/Breadcrumb";
import { useEffect, useRef, useState } from "react";
import { sessionStorageAccessor } from "./../../utils/browserStorage";
import ItineraryConfirmSkeleton from "./ItineraryConfirm.skeleton";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { useSendEmailMutation } from "@/services/email/Email";
import { useResize } from "./../../utils/resize";
const Text = Typography.Text;

// interface SlideUpSlideDownProps {
//   children: React.ReactNode;
//   className?: string;
// }

const ItineraryConfirm = () => {
  const { t } = useTranslation();
  const { Title } = Typography;
  const { isSmallScreen } = useResize(1200);
  // const { activePNR } = useAppSelector((state: any) => state.PNRReducer);
  const [SgetFinalReviewPnrData] =
    sessionStorageAccessor<any>("finalReviewPNRData");
  console.log(SgetFinalReviewPnrData());
  var activePNRData = SgetFinalReviewPnrData();
  // const [sendEmailService] = useSendEmailMutation();
  // const { reviewStatus } = useAppSelector(
  //   (state: any) => state.ReviewFlightReducer
  // );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, _setText] = useState("https://reschedule.grouprm.net/");
  const [SgetReviewStatus] = sessionStorageAccessor<string>("reviewStatus");
  var reviewOption = SgetReviewStatus();
  // const [visible, setVisible] = useState(false);

  // const toggleVisibility = () => {
  //   setVisible(!visible);
  // };

  // const [WhatsappData, setWhatsappData] = useState<any>();

  // const breadcrumbProps = [
  //   {
  //     path: "planB",
  //     title: t("planb"),
  //     breadcrumbName: "planB",
  //     key: "planB",
  //   },
  //   {
  //     path: "viewPnrInfo",
  //     title: t("itinerary_details"),
  //     breadcrumbName: "viewPnrInfo",
  //     key: "viewPnrInfo",
  //   },
  //   ...(reviewOption !== "cancelled"
  //     ? [{
  //         path: "reviewflight",
  //         title: t("review_itinerary_changes"),
  //         breadcrumbName: "reviewflight",
  //         key: "reviewflight",
  //       }]
  //     : []),
  //   {
  //     path: "itineraryConfirm",
  //     title: t("itinerary_confirm"),
  //     breadcrumbName: "itineraryConfirm",
  //     key: "itineraryConfirm",
  //   },
  // ];
  const dynamicImagePath = new URL(
    `@/assets/images/itineraryConfirm.gif`,
    import.meta.url
  ).href;
  const [SfinalPaymentAmount] =
    sessionStorageAccessor<any>("finalPaymentAmount");
  var finalAmount = SfinalPaymentAmount ? Number(SfinalPaymentAmount) : 0;
  var ItineraryDeclineStatus;
  if (activePNRData) {
    ItineraryDeclineStatus =
      activePNRData[0]?.rebookOptionalFlightDetails?.some(
        (trip: any) =>
          trip.itinerary_status && trip.itinerary_status === "decline"
      );
  }

  useEffect(() => {
    window.scroll(0, 0);
  });

  // const printPage = () => {
  //   const printContent = document.getElementById("printable");
  //   if (printContent) {
  //     // Convert canvas elements to images
  //     const canvasElements = printContent.getElementsByTagName("canvas");
  //     Array.from(canvasElements).forEach((canvas) => {
  //       const dataURL = canvas.toDataURL();
  //       const img = document.createElement("img");
  //       img.src = dataURL;
  //       img.style.width = canvas.style.width;
  //       img.style.height = canvas.style.height;
  //       canvas.parentNode?.replaceChild(img, canvas);
  //     });

  //     const printIframe = document.createElement("iframe");
  //     printIframe.style.position = "absolute";
  //     printIframe.style.width = "0";
  //     printIframe.style.height = "0";
  //     printIframe.style.border = "none";

  //     document.body.appendChild(printIframe);
  //     const printWindow = printIframe.contentWindow;

  //     if (printWindow) {
  //       printWindow.document.open();
  //       // // Extract SASS variables from the main document
  //       // const htmlElement = document.documentElement;
  //       // const sassVariables = htmlElement.getAttribute('style');

  //       printWindow.document.write(`
  //         <html>
  //           <head>
  //             <title>Print Preview</title>
  //             <style>
  //               :root {
  //                 --t-red-light: #D0434A;
  //                 --t-primary: #133769;
  //                 --t-green-lighter: #2E8540;
  //               }
  //               body {
  //                 font-family: 'InfiIcons';
  //               }
  //             </style>
  //           </head>
  //           <body class="mt-50">${printContent.innerHTML}</body>
  //         </html>
  //       `);

  //       const newDocument = printWindow.document;
  //       // Copy all stylesheets from the original document to the new document
  //       const stylesheets = Array.from(document.styleSheets);
  //       stylesheets.forEach((stylesheet: CSSStyleSheet) => {
  //         try {
  //           if (stylesheet.href) {
  //             // External stylesheet
  //             const linkElement = newDocument.createElement("link");
  //             linkElement.rel = "stylesheet";
  //             linkElement.href = stylesheet.href;
  //             newDocument.head.appendChild(linkElement);
  //           } else if (stylesheet.cssRules) {
  //             // Inline styles
  //             const styleElement = newDocument.createElement("style");
  //             Array.from(stylesheet.cssRules).forEach((rule) => {
  //               styleElement.appendChild(
  //                 newDocument.createTextNode(rule.cssText)
  //               );
  //             });
  //             newDocument.head.appendChild(styleElement);
  //           }
  //         } catch (e) {
  //           console.error("Error copying styles:", e);
  //         }
  //       });

  //       printWindow.document.close();
  //       printWindow.focus();
  //       printWindow.print();
  //       // Delay to ensure the print dialog has been opened before removing the iframe
  //       setTimeout(() => {
  //         document.body.removeChild(printIframe);
  //       }, 1000);
  //     }
  //   }
  // };

  const printableRef = useRef<HTMLDivElement>(null);

  // FINAL PDF DOWNLOAD
  const shareFile = async () => {
    const printContent = printableRef.current;
    var printContentWidth = (printContent as HTMLElement).style.width;
    (printContent as HTMLElement).style.width = "1300px";

    if (printContent) {
      const canvas = await html2canvas(printContent, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      const topMargin = 20; // Adjust this value to add more space at the top
      let heightLeft = imgHeight;
      let position = topMargin;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight,
        "someAlias",
        "FAST"
      );
      heightLeft -= pdfHeight - topMargin;

      while (heightLeft > 0) {
        pdf.addPage();
        position = heightLeft - imgHeight + topMargin;
        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "someAlias",
          "FAST"
        );
        heightLeft -= pdfHeight - topMargin;
      }
      // Trigger download
      pdf.save("document.pdf");
      (printContent as HTMLElement).style.width = printContentWidth;
    }
  };

  const generateEmail = () => {
    if (printableRef.current) {
      const doc = new jsPDF();

      // Convert HTML to PDF
      doc.html(printableRef.current, {
        callback: function (doc: any) {
          // Get the PDF document as a blob
          const pdfBlob = doc.output("blob");

          // Convert blob to base64 string
          const reader = new FileReader();
          reader.readAsDataURL(pdfBlob);
          reader.onloadend = () => {
            const pdfBase64 = reader.result as string;
            // Send email with attachment as base64 string
            // setWhatsappData(pdfBase64);
            sendEmail(pdfBase64);
          };
        },
      });
    }
  };

  const sendEmail = (_pdfBase64: string) => {
    const postData: any = {
      setting_id: 173,
      // globalData: pdfBase64,
      globalData: "Hello",
      regards: "Anandh",
      attachments: [],
    };

    postData["recipientList"] = {
      action_name: "rs_reschedule_flight_details",
      language_code: "EN",
      to: "anandhkumar.m@infinitisoftware.net",
      cc: [],
      bcc: [],
      // data: pdfBase64
      data: "hiiiii",
    };

    // sendEmailService(postData);
  };

  // FINAL PRINT
  const printPage = async () => {
    const printContent = printableRef.current;
    if (printContent) {
      const canvas = await html2canvas(printContent, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
            <title> Voyager Aid </title>
            </head>
            <style>
              @media print {
                .hide-on-print {
                  display: none;
                }
              }
            </style>
            <body style="margin-top: 40px;">
              <img src="${imgData}" style="width: 100%;"/>
            </body>
          </html>
        `);
        newWindow.document.close();
        newWindow.addEventListener("load", () => {
          newWindow.print();
          newWindow.close();
        });
      } else {
        alert("Please allow popups for this website");
      }
    }
  };

  console.log(activePNRData);

  activePNRData = [
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

  return (
    <div className="cls-itinerary-confirm" data-testId="itineraryConfirm">
      <div className="cls-confirm-page">
        {activePNRData?.length ? (
          <>
            {/* <BreadcrumbComponent props={breadcrumbProps} /> */}
            <Row>
              <Col
                xs={24}
                xl={24}
                className="cls-share-col d-flex align-center text-right"
              >
                <Button type="text" className="disabled no-events">
                  <MailOutlined />
                  <Text
                    className="p-clr fs-14 f-med"
                    style={{ color: "var(--ant-color-text-heading)" }}
                    onClick={generateEmail}
                  >
                    Email
                  </Text>
                </Button>
                <Button type="text" className="disabled no-events">
                  <WhatsAppOutlined />
                  <Text
                    className="p-clr fs-14 f-med"
                    style={{ color: "var(--ant-color-text-heading)" }}
                    onClick={shareFile}
                  >
                    Whatsapp
                  </Text>
                </Button>
                {/* <Link
                  type="link"
                  to={`https://web.whatsapp.com/send??phone=9444331425&text=${encodeURIComponent(dynamicImagePath)}`}
                  className="px-0 py-0 d-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-action="share/whatsapp/share"
                >
                  send
                </Link> */}
                <Button
                  onClick={() => printPage()}
                  type="text"
                  className="cls-print-card"
                >
                  {/* <PrintIcon />  */}
                  <Text
                    className="p-clr fs-14 f-med"
                    style={{ color: "var(--ant-color-text-heading)" }}
                  >
                    Print
                  </Text>
                </Button>
              </Col>
            </Row>
            <Row justify="center">
              <img src={dynamicImagePath} alt="ConfirmGif" width={150}></img>
            </Row>
            <Row justify="center" style={{ marginTop: "-20px" }}>
              <Col className="text-center" xs={24} lg={20} xl={14}>
                <Title level={isSmallScreen ? 5 : 3} className="p-clr f-sbold">
                  {reviewOption === "Decline" || ItineraryDeclineStatus
                    ? t("itinerary_decline_header")
                    : reviewOption === "cancelled"
                    ? t("itinerary_cancelled_header")
                    : t("itinerary_confirm_header")}
                </Title>
                <Text
                  className={`${
                    isSmallScreen ? "fs-13" : "fs-16"
                  } d-block py-5`}
                  style={{
                    lineHeight: isSmallScreen ? "16px" : "22px",
                    color: "var(--t-text-grey-dark)",
                  }}
                >
                  {reviewOption === "Decline" || ItineraryDeclineStatus ? (
                    t("itinerary_decline_description")
                  ) : reviewOption === "cancelled" ? (
                    <>
                      {t("itinerary_cancelled_description")}
                      {t("itinerary_voucher")}
                      <Text
                        className={`${
                          isSmallScreen ? "fs-15" : "fs-20"
                        } f-sbold`}
                      >
                        {CFG.currency}{" "}
                        {Number(activePNRData[0]?.paidAmount)?.toFixed(2)}
                      </Text>
                      {t("itinerary_decline_check_description")}
                    </>
                  ) : (
                    <>
                      {t("itinerary_confirm_description")}
                      {(reviewOption === "Modify" ||
                        reviewOption === "Custom") &&
                      finalAmount &&
                      finalAmount < 0 ? (
                        <Text
                          className="fs-16 py-5 pl-5"
                          style={{ lineHeight: "22px" }}
                        >
                          {t("itinerary_voucher")}
                          <Text
                            className={`${
                              isSmallScreen ? "fs-15" : "fs-20"
                            } f-sbold`}
                          >
                            {CFG.currency}{" "}
                            {Number(finalAmount * -1)?.toFixed(2)}
                          </Text>
                          .
                        </Text>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </Text>
              </Col>
            </Row>
            <Row
              justify="space-between"
              className="cls-pnr-info mt-25"
              id="printable"
              ref={printableRef}
            >
              <Col xs={24} xl={24}>
                <Row>
                  <Col xs={10} xl={10} className="text-left">
                    <Text
                      className={`${isSmallScreen ? "fs-12" : "fs-13"} f-reg`}
                      style={{ color: "var(--t-text-grey-dark)" }}
                    >
                      {t("pnr_no")} :&nbsp;
                    </Text>
                    <Text
                      className={`${isSmallScreen ? "fs-14" : "fs-18"} f-bold`}
                      style={{ color: "var(--ant-color-text-heading)" }}
                    >
                      {activePNRData[0]?.PNR}
                    </Text>
                  </Col>
                  <Col xs={14} xl={14} className="text-right">
                    <Text
                      className="fs-13"
                      style={{ color: "var(--t-text-grey-dark)" }}
                    >
                      {t(isSmallScreen ? "status" : "pnr_status")} :&nbsp;
                    </Text>
                    <Text
                      className={`fs-14 p-clr f-bold`}
                      style={{
                        color:
                          reviewOption === "Decline" ||
                          ItineraryDeclineStatus ||
                          reviewOption === "cancelled"
                            ? "var(--t-pink-light)"
                            : "var(--t-green-light)",
                      }}
                    >
                      {" "}
                      {reviewOption === "Decline" || ItineraryDeclineStatus
                        ? t("cancelled")
                        : reviewOption === "cancelled"
                        ? t("cancelled")
                        : t("confirmed_cnf")}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} xl={24} className="mt-15">
                <Card className="cls-main-card">
                  <Title
                    level={5}
                    className={`d-flex f-sbold p-clr ${
                      isSmallScreen ? "fs-14" : "fs-17"
                    }`}
                  >
                    {t("itinerary_details")}
                    {isSmallScreen ? (
                      <Text
                        className="fs-14 f-reg p-clr ml-auto d-block"
                        onClick={() => setIsModalOpen(true)}
                      >
                        {t("scan_qr")}
                      </Text>
                    ) : (
                      ""
                    )}
                  </Title>
                  <ItineraryReviewList isConfirmpage={true} />
                  <PassengerDetails isConfirmpage={true} />
                </Card>
              </Col>
            </Row>
            {isSmallScreen ? (
              <Modal
                width="max-content"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                closeIcon={
                  <Text className="Infi-09_CloseIcon cls-close-modal-icon" />
                }
                footer={false}
                className={`cls-qrCodePopup`}
              >
                <Row justify="center">
                  <Col
                    span={24}
                    className="fs-17 f-med pb-10 p-clr text-center"
                  >
                    {" "}
                    {t("scan_qr")}
                  </Col>
                  <Col span={24} className="text-center">
                    <Text className="cls-qrContainer d-iblock">
                      <QRCode value={text || "-"} size={110} />
                      <Text className="cls-bdrBtmLeft" />
                      <Text className="cls-bdrBtmRight" />
                    </Text>
                  </Col>
                  <Col span={24} className="text-center mt-20">
                    <Button
                      type="default"
                      size="large"
                      className="fs-14 f-reg px-40"
                    >
                      <Text className="Infi-84_QRCode p-clr fs-17" />
                      {t("scan_qr")} {t("code")}
                    </Button>
                  </Col>
                </Row>
              </Modal>
            ) : (
              <></>
            )}
            {/* <Row justify="center" className="mt-25 cls-itinerary-card">
              <Col xs={3} xl={3} className="pointer">
                <Card onClick={() => printPage()} className="cls-print-card">
                  <Col className="text-center">
                    <PrintIcon />
                  </Col>
                  <Col className="f-sbold fs-18 text-center p-clr">
                    {t("print")}
                  </Col>
                </Card>
              </Col>
              <Col xs={3} xl={3}  offset={1} className="pointer">
                <Card>
                  <Col className="text-center">
                    <SpecialserviceSSRIcon />
                  </Col>
                  <Col className="f-sbold fs-18 text-center p-clr">Add SSR</Col>
                </Card>
              </Col>
              <Col xs={3} xl={3}  offset={1} className="pointer">
                <Card>
                  <Col className="text-center">
                    <SpecialserviceSeatIcon />
                  </Col>
                  <Col className="f-sbold fs-18 text-center p-clr">Add Seat</Col>
                </Card>
              </Col>
            </Row>
            <Row justify="center" className="mt-25 cls-itinerary-btn mb-20">
              <Col xs={3} xl={3}>
                  <Button type="default" size="large" onClick={()=>{redirect('viewpnrinfo')}}>{t('go_back')}</Button>
              </Col>
              <Col xs={3} xl={3} className="ml-15">
                  <Button type="primary" size="large" onClick={()=>{redirect('dashboard')}}>{t('dashboard')}</Button>
              </Col>
            </Row> */}
          </>
        ) : (
          <ItineraryConfirmSkeleton />
        )}
      </div>
    </div>
  );
};

export default ItineraryConfirm;
