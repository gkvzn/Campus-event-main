import { Button } from "@/utils/forms/button";
import React, { useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ErrorToast } from "../../utils/helper";
import { SuccessResponseI } from "../../types_and_interfaces/types";
import { useEffect } from "react";
import { CalendarBtnProps, WishListBtnProps } from "../account/type";
import {
  useEventAddCalendarAction,
  useEventAddWishListAction,
  useEventRemoveCalendarAction,
  useEventRemoveWishListAction,
} from "@/actions/events.action";

const EventCalenderBtn: React.FC<CalendarBtnProps> = ({
  is_calendar,
  id,
  refetch,
}) => {
  const router = useRouter();

  const { user } = useSelector((state: RootState) => state.auth);

  const [wish_list_is, setwish_list_is] = useState<boolean>(is_calendar);

  const [timer, settimer] = useState(false);
  // addWishlistMutation
  // removeWishlistMutation
  const { mutate: addCalender, isLoading: addWishlistLoading } =
    useEventAddCalendarAction();
  const { mutate: removeCalendart, isLoading: removeWishlistLoading } =
    useEventRemoveCalendarAction();

  let set_time_out_global: NodeJS.Timeout;

  const calendar_handler = (event_id: number) => {
    if (!user?.hasOwnProperty("id")) {
      router.push("/signin");
      return false;
    }
    settimer(true);
    set_time_out_global = setTimeout(() => {
      settimer(false);
    }, 1000);
    let data = {
      event_id: event_id,
    };
    !wish_list_is
      ? addCalender(data, {
          onSuccess(data: SuccessResponseI) {
            successHandler(data);
          },
        })
      : removeCalendart(data, {
          onSuccess(data: SuccessResponseI) {
            successHandler(data);
          },
        });
  };

  const successHandler = (data: SuccessResponseI) => {
    if (data?.flag == 1) {
      ErrorToast(data.message, "success");
      setwish_list_is((prev) => !prev);
    }
    refetch();
  };

  useEffect(() => {
    return () => {
      clearTimeout(set_time_out_global);
    };
  }, []);

  const returnClass = (data: boolean): string => {
    return data ? "bg-transparent" : "";
  };

  return (
    <Button
      class={`${wish_list_is == true && "active"} ${returnClass(
        timer
          ? timer
          : wish_list_is
          ? removeWishlistLoading
          : addWishlistLoading
      )}`}
      Loader={
        timer
          ? timer
          : wish_list_is
          ? removeWishlistLoading
          : addWishlistLoading
      }
      Text={<i className="fa fa-calendar"></i>}
      onClick={() => {
        calendar_handler(id);
      }}
      type="button"
      spinnerClass="text-light "
    />
  );
};

export default EventCalenderBtn;
