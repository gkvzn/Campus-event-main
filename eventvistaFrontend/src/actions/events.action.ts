import events_service from "@/services/events.service"
import { useMutation } from "react-query"




// useEventAddWishListAction
export const useEventAddWishListAction = () => useMutation(events_service.wishlist.add, {

})


// useEventAddWishListAction
export const useEventAddCalendarAction = () => useMutation(events_service.addCalendae, {

})


// useEventAddWishListAction
export const useEventRemoveWishListAction = () => useMutation(events_service.wishlist.remove, {

})


// useEventAddWishListAction
export const useEventRemoveCalendarAction = () => useMutation(events_service.removeCalendar, {

})