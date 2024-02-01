import { RootState } from "@/redux/store"
import app_service from "@/services/app.service"
import events_service from "@/services/events.service"
import { FaqType, PageType, allItemsT } from "@/types_and_interfaces/types"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"


// get Events
export const useModelGetEvents = (data: any) => {
    const { events } = useSelector((state: RootState) => state.filters)

    if (events.query != '') data.query = events.query

    data.min = events.min

    if (events.max != 0) data.max = events.max

    if (events.date != '') data.date = events.date

    if (events.time != '') data.time = events.time

    if (events.interest.length > 0) data.interest = events.interest

    if (events.category != 0) data.category = events.category

    if (events.from_date != '') data.from_date = events.from_date

    if (events.to_date != '') data.to_date = events.to_date

    return useQuery(['events', data], () => events_service.all(data), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    })
}




export const useModelGetContact = (data: PageType) => {
    return useQuery(['contact', data], () => app_service.gernal.page(data), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    })
}



export const useModelGetContactUsData = () => {
    return useQuery(['contactUs'], () => app_service.gernal.contact_us(), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    })
}



export const useModelGetEventCategories = (data: any) => {
    return useQuery(['events_categories', data], () => events_service.categories(data), {
        staleTime: 55 * (60 * 1000),
        cacheTime: 60 * (60 * 1000),
        keepPreviousData: true
    })

}



export const useModelGetSingleEvent = (data: any) => useQuery(['solo_event', data], () => events_service.solo(data))



export const useModelGetEventsWishlist = (enable: boolean = true, data: any = {}) => {
    return useQuery('events_wishlist', () => events_service.wishlist.get(data), {
        enabled: enable
    })

}


export const useModelGetEventsCalendar = (enable: boolean = true, data: any = {}) => {
    return useQuery('events_calendar', () => events_service.getCalender(data), {
        enabled: enable
    })

}

export const useModelGetEventSidebar = () => {
    return useQuery(['event_sidebar'], () => events_service.events_sidebar({}), {
        keepPreviousData: true,
        staleTime: 6 * (60 * 1000)
    })
}
