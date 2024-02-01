import { SoloEventItemI } from "@/types_and_interfaces/types";
import ShimmerCard from "@/utils/ShimmerCard";
import EventWishListBtn from "./event_wishlist_btn";
import Link from "next/link";
import FeaturedButton from "./featured_btn";
import { extractDateForEvents, strLimit } from "@/utils/helper";
import { ShareComponent } from "../shareComponent";
import { useState } from "react";
import {
  facebookShareUrl,
  linkedInShareUrl,
  twitterShareUrl,
  whatsappShareUrl,
} from "../shareUrlConstant";
import EventCalenderBtn from "./event_calender_btn ";

const SoloEventItem: React.FC<SoloEventItemI> = ({
  event,
  loading,
  eventsRefetch,
}) => {
  const start_date = extractDateForEvents(event?.start_date);

  const end_date = extractDateForEvents(event?.end_date);

  const [showModal, setShowModal] = useState(false);

  const setModalVisibility = (isVisible: boolean) => {
    setShowModal(isVisible);
  };

  const [id, setID] = useState<number>(0);
  const [slug, setSlug] = useState("");

  const evnttUrl = `/events/${id}/${slug}`;

  const facebookShare = `${facebookShareUrl}${evnttUrl}`;
  const twitterShare = `${twitterShareUrl}${evnttUrl}`;
  const linkedInShare = `${linkedInShareUrl}${evnttUrl}`;
  const whatsappShare = `${whatsappShareUrl}${evnttUrl}`;
  const url = `${process.env.NEXT_PUBLIC_APP_URL}${evnttUrl}`;

  return (
    <div className="col-xl-6 col-lg-6 col-md-6 p-relative" key={event.id}>
      {loading && <ShimmerCard />}
      <div className="tpshopitem mb-15 wow fadeInUp" data-wow-delay=".6s">
        <div className="tpshopitem__thumb p-relative fix p-relative event ">
          <Link href="">
            {" "}
            <img
              src={event?.feature_image}
              className="event-featured-image"
              alt="shop-thumb"
            />
          </Link>
          <div className="tpshopitem__thumb-icon">
            <EventWishListBtn
              is_wishlist={event?.is_wishlist}
              refetch={eventsRefetch}
              id={event?.id}
            />

            <EventCalenderBtn
              is_calendar={event?.is_calendar}
              refetch={eventsRefetch}
              id={event?.id}
            />
          </div>

          <div className="tpshopitem__is-featured-event">
            <div
              className="featured-text"
              onClick={() => {
                setModalVisibility(true);
                setID(event?.id);
                setSlug(event?.slug);
              }}
            >
              Share Event
            </div>
          </div>
        </div>

        <div className="row p-4">
          <div className="col-md-6 col-xxl-6 col-6 title-event-col">
            <div className="title-event-div">
              <Link
                href={`/events/${event?.id}/${event?.slug}`}
                className="view-detailed-text"
              >
                <p>{strLimit(event?.name, 45)}</p>
                <p className="calendar-image-and-time-between">
                  <img src="/assets/media/icons/calendar.png" alt="" />
                  <span className="date-between">
                    {" "}
                    {event?.start_time_renew} - {event?.end_time_renew}
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <ShareComponent
            ShowModelVisible={showModal}
            setModalVisibility={setModalVisibility}
            facebookShare={facebookShare}
            twitterShare={twitterShare}
            linkedInShare={linkedInShare}
            whatsappShare={whatsappShare}
          />
        </div>
      </div>
    </div>
  );
};

export default SoloEventItem;
