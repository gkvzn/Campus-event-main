import React, { useState, useEffect } from "react";
import { ItemDetailsViewPageProps } from "@/types_and_interfaces/types";
import { useRouter } from "next/router";
import { useModelGetSingleEvent } from "@/models/events.model";
import { extractDateForEvents } from "@/utils/helper";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { ShareComponent } from "../shareComponent";
import {
  facebookShareUrl,
  linkedInShareUrl,
  twitterShareUrl,
  whatsappShareUrl,
} from "../shareUrlConstant";

export const EventDetailedArea: React.FC = () => {

  // clinet secret

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);

  const setModalVisibility = (isVisible: boolean) => {
    setShowModal(isVisible);
  };

  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  const { id, slug } = router.query as ItemDetailsViewPageProps;

  // get solo event
  const {
    data: event_data,
    isLoading: event_loading,
    refetch: eventRefetch,
  } = useModelGetSingleEvent({ item: id, user: user?.id });

  const event = event_data?.data;

  // end get solo event
  // start and end date conversions
  const start_date = extractDateForEvents(event?.start_date ?? "");
  const end_date = extractDateForEvents(event?.end_date ?? "");

  const evnttUrl = `/events/${id}/${slug}`;

  const facebookShare = `${facebookShareUrl}${evnttUrl}`;
  const twitterShare = `${twitterShareUrl}${evnttUrl}`;
  const linkedInShare = `${linkedInShareUrl}${evnttUrl}`;
  const whatsappShare = `${whatsappShareUrl}${evnttUrl}`;
  const url = `${process.env.NEXT_PUBLIC_APP_URL}${evnttUrl}`;

  if (event_loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading.....!</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid p-0">
        <img
          src={
            event && event.feature_banner != ""
              ? `${event.feature_banner}`
              : `/assets/media/icons/Rectangle 191.png`
          }
          className="w-100"
          style={{ height: "350px" }}
          alt=""
        />
      </div>
      {!event_loading && event && (
        <div className="container space-detailed-main-top-div  event-detailed-main-top-div mt-30">
          <div className="row  main-row-space-detailed">
            <div className="col-md-12 col-12 mb-4">
              <div className="d-flex gap-5 justify-content-end align-items-baseline">
                <div className="tpproduct d-flex gap-4"></div>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="d-flex gap-5 align-items-baseline">
                <div className="tpproduct">
                  <h1 className="space-detailed-top-heading">{event.name}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="tpfilter spac-price-column d-flex align-items-center">
                <div className="tpproduct d-flex gap-4">
                  <div className="add-to-wishlist-space-detailed"></div>
                  <button
                    className="tp-share"
                    onClick={() => setModalVisibility(true)}
                  >
                    <img src="/assets/media/icons/share.svg" alt="" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5 mt-3 main-location-and-type-space">
            <div className="col-md-12 col-12">
              <div className="d-flex gap-2 align-items-baseline">
                <div className="tpproduct">
                  <img
                    src="/assets/media/icons/calendar.png"
                    alt=""
                    style={{ marginTop: "-3px" }}
                  />
                </div>

                <div className="tpproduct">
                  <p>
                    {event.start_date != event.end_date
                      ? `${start_date.day} ${start_date.month}, ${start_date.year} - ${end_date.day} ${end_date.month}, ${end_date.year}`
                      : event.start_date}{" "}
                    |{" "}
                    {event.start_time == event.end_time
                      ? event.start_time_renew
                      : `${event.start_time_renew} - ${event.end_time_renew}`}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-12">
              <div className="d-flex gap-2 align-items-baseline">
                <div className="tpproduct event-organized-by">
                  <p className="event-organized-by-p">
                    Organizer Name: {event.organizer_name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-10 ">
            <div className="col-xl-10 col-lg-8  p-0 p-relative">
              <div className="col-xl-12 col-lg-12 col-md-12 p-0 p-relative space-detailed-page-left-column">
                <div className="faq-accordion space-detailed-accordian-location">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-items">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button show`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=""
                          aria-expanded={true}
                          aria-controls=""
                        >
                          Description
                        </button>
                      </h2>

                      <div className="line-bar-main-div">
                        <div className="accordion-bottom-heading-line"></div>
                      </div>

                      <div
                        className={`accordion-collapse collapse show`}
                        aria-labelledby=""
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className="accordion-content"
                          dangerouslySetInnerHTML={{
                            __html: event.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 p-0 p-relative space-detailed-page-left-column">
                <div className="faq-accordion space-detailed-accordian-location">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-items">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button show`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target=""
                          aria-expanded={true}
                          aria-controls=""
                        >
                          Location
                        </button>
                      </h2>

                      <div className="line-bar-main-div">
                        <div className="accordion-bottom-heading-line"></div>
                      </div>

                      <div className="space-detaile-localtion-icon-text d-flex gap-3 align-items-center">
                        <div className="left-column">
                          <img
                            src="/assets/media/icons/venue-location (1).svg"
                            alt=""
                          />
                        </div>

                        <div className="right-column">
                          <p className="space-detailed-our-venue-location">
                            Our Venue Location
                          </p>
                          <p className="space-detailed-location">
                            {event.location}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`accordion-collapse collapse show`}
                        aria-labelledby=""
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-content">
                          <div className="space-location-image d-flex justify-content-center">
                            <img
                              src="/assets/media/icons/location-image.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ShareComponent
        ShowModelVisible={showModal}
        setModalVisibility={setModalVisibility}
        facebookShare={facebookShare}
        twitterShare={twitterShare}
        linkedInShare={linkedInShare}
        whatsappShare={whatsappShare}
      />
    </>
  );
};

export default EventDetailedArea;
