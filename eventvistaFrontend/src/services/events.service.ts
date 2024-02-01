import { Api } from "@/constants/app";
import request from "./request";
import { BookingCheckoutResponse, CouponResponse, Event, EventAndSpaceCategory, EventBooking, EventSidebarT, EventWishlist, GenSuccessResponseI, GetDataResponseI, Pagination, SuccessResponseI } from "@/types_and_interfaces/types";

const events_service = {

    wishlist: {
        get: (params?: any): Promise<GetDataResponseI<EventWishlist[]>> => request.get(Api.events_and_spaces.events.wishlist.get, { params }),
        
        add: (data: any): Promise<SuccessResponseI> => request.post(Api.events_and_spaces.events.wishlist.add, data),

        remove: (data: any): Promise<SuccessResponseI> => request.delete(Api.events_and_spaces.events.wishlist.remove, { data }),
    },
    addCalendae: (data: any): Promise<SuccessResponseI> => request.post(Api.events_and_spaces.events.calendar.add_calendar, data),

    getCalender: (params?: any): Promise<GetDataResponseI<EventWishlist[]>> => request.get(Api.events_and_spaces.events.calendar.get_calender, { params }),

    removeCalendar: (data: any): Promise<SuccessResponseI> => request.delete(Api.events_and_spaces.events.calendar.remove_calendar, { data }),


    all: (params?: any): Promise<GenSuccessResponseI<Pagination<Event>>> => request.get(Api.events_and_spaces.events.all, { params }),
    categories: (params?: any): Promise<GenSuccessResponseI<EventAndSpaceCategory[]>> => request.get(Api.events_and_spaces.events.categories, { params }),
    solo: (params?: any): Promise<GenSuccessResponseI<Event>> => request.get(Api.events_and_spaces.events.solo, { params }),
    events_sidebar: (params?: any): Promise<GenSuccessResponseI<EventSidebarT>> => request.get(Api.events_and_spaces.events.events_sidebar, { params })
}

export default events_service
