import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import weekday from 'dayjs/plugin/weekday';
import cogoToast from "cogo-toast";
import { EventCouponPayloadI, EventType, UserResponseI } from "@/types_and_interfaces/types";
import { RootStateAuth } from "@/redux/store";
import { Dayjs } from 'dayjs';
import { getCookie } from "cookies-next";
import Router from "next/router";
const customParseFormat = require('dayjs/plugin/customParseFormat');



export type EventValue<DateType> = DateType | null;

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Dubai');

export const getToken = () => {
    return getCookie('_ca')
}
// strlimit
export const strLimit = (string = '', limit = 0) => {
    if (string.length <= limit) {
        return string;
    }
    return string.slice(0, limit) + '...';
}



export const priceFormatPercentage = (price: number) => {
    return Math.round(price) + "" + " % ";
}
// get current month
export const getCurrentMonth = () => {

    return dayjs().tz('Asia/Dubai').format('MMMM YYYY');
}




export const PreviousDays = (day = 3) => {
    const previousDays = [];
    for (let i = 0; i < day; i++) {
        const previousDay = dayjs().tz('Asia/Dubai').subtract(i + 1, 'day');
        const name = previousDay.format('ddd');
        const date = previousDay.format('D');
        previousDays.push({ name, date });
    }
    return previousDays;
}

export const CurrentTimeSmall = (time: any) => {
    const currentTime = dayjs().tz('Asia/Dubai').format('HH')
    // const isLessThan = currentTime.isBefore(comparisonTime);
    return (time.split(":")[0] ?? 24) > currentTime
}


export const ErrorToast = (Message: any, type = "error", heading = "") => {
    if (type == "error") {
        cogoToast.error(Message, { position: 'top-right', heading: 'Error' })
        return false;
    }

    if (type == "success") {
        cogoToast.success(Message, { position: 'top-right', heading: heading })
        return false;
    }

}




export const getCurrentLocation = async (setFieldValue: any, set_get_location: (val: boolean) => void) => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=` + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                    );
                    const data = await response.json();
                    if (data.results.length > 0) {
                        const result = data.results[0];
                        const placeName = result.formatted_address;

                        const city = result.address_components.find(
                            (component: any) => component.types.includes('locality')
                        )?.long_name;

                        setFieldValue("city", city)
                        setFieldValue("address_1", placeName)
                        setFieldValue("lat", latitude)
                        setFieldValue("long", longitude)


                    }
                } catch (error) {
                    console.error('Error retrieving location information:', error);
                }
                finally {
                    set_get_location(false)
                }
            },
            (error) => {
                console.error('Error getting current position:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by your browser');
    }
}

export const getLocationWithLatLng = async (lat: number, lng: number, setFieldValue: any, set_get_location: (val: boolean) => void) => {

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=` + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        );
        const data = await response.json();
        if (data.results.length > 0) {
            const result = data.results[0];
            const placeName = result.formatted_address;

            const city = result.address_components.find(
                (component: any) => component.types.includes('locality')
            )?.long_name;

            setFieldValue("city", city)
            setFieldValue("address_1", placeName)

        }
    } catch (error) {
        console.error('Error retrieving location information:', error);
    }
    finally {
        set_get_location(false)
    }

}


// gues id genrate

export const create_guest_id = () => {
    let prev_id = window.sessionStorage.getItem('guestId')
    if (prev_id == null) {
        let random = Math.floor((Math.random() * 1000000) + 1)
        window.sessionStorage.setItem('guestId', random.toString())
        prev_id = random.toString()
    }

    return prev_id;
    // window.sessionStorage.setItem('guestId',Math.floor((Math.random()*1000000)+1))
}

export const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 3);



export const nick_names = ["Home", "Work", "Other"];


export const hasNull = <T>(array: T[]) => {
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element is null
        if (array[i] == null) {
            return true; // Found a null element, return true
        }
    }
    // No null element found in the array
    return false
}


// ex


export const is_login_or_guest = (user: UserResponseI | {} | null | undefined, guest_id: RootStateAuth['guest_id']) => {
    return {
        attr_one: (!user?.hasOwnProperty("id") && guest_id != null) ? { guest_id: guest_id } : {},
        attr_two: (!user?.hasOwnProperty("id") && guest_id == null) ? false : true,
        attr_three: (!user?.hasOwnProperty("id")) ? false : true
    }
}


// export const payment_methods = ['STRIPE', 'APPLE_PAY', 'GOOGLE_PAY', 'PAYPAL', 'COD']
export const payment_methods = ['STRIPE']

export const event_payment_methods = ['STRIPE', 'COTTB']

export const workspace_payment_methods = ['STRIPE']

export const CHECKOUT_TYPES = {
    STRIPE: "STRIPE",
    APPLE_PAY: "APPLE_PAY",
    GOOGLE_PAY: "GOOGLE_PAY",
    PAYPAL: "PAYPAL",
    COD: "COD",
    CASH_ON_THE_TICKET_BOX: "COTTB"
}


export const order_status = [
    { "name": "Confirmed", "value": "order-confirmed" },
    { "name": "Processing", "value": "order-processed" },
    { "name": "Shipped", "value": "order-shipped" },
    { "name": "Delivered", "value": "order-delivered" },
]

export const order_status_real = [
    "order-confirmed",
    "order-processed",
    "order-shipped",
    "order-delivered",
]

// pageScroll

export const paginateScroll = (pageRef: React.RefObject<HTMLDivElement | null>) => {
    if (pageRef.current)
        pageRef.current.scrollIntoView({ behavior: 'smooth' })
}

// convert a a time

export const timeConverter = (time: string) => {

    const utcTime = dayjs.utc(time, "HH:mm:ss")
    const convertedTime = utcTime.format('hh:mm A')
    return convertedTime
}

// date extraxt details

export const extractDateForEvents = (date: string) => {
    const utcDate = dayjs.utc(date)

    // Extract day, month, and year
    const day = utcDate.format('DD')
    const month = utcDate.format('MMM')
    const year = utcDate.format('YYYY')

    return {
        day,
        month,
        year
    }
}


export const extractEndDateofCoupon = (date: any) => {

    const utcDate = dayjs.unix(date)
    // Extract day, month, and year
    const day = utcDate.format('DD')
    const month = utcDate.format('MMM')
    const year = utcDate.format('YYYY')

    return {
        day,
        month,
        year
    }
}



// create event amounts

export const createEventAmounts = (event_types: EventType[], values: EventCouponPayloadI) => {
    let subtotal: number = 0

    event_types.forEach(item => {
        const qty_evaluation = values[`${item.name}_qty`] as number * item.price
        subtotal = subtotal + qty_evaluation
    })

    const total = subtotal - values.discount

    return {
        subtotal,
        total
    }

}




export const formatCreatedAtDate = (createdAtTimestamp: string) => {
    const createdAtDate = new Date(createdAtTimestamp);
    const formattedDate = `${createdAtDate.getDate()} ${createdAtDate.toLocaleString('default', { month: 'short' })}, ${createdAtDate.getFullYear()} | ${createdAtDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    return formattedDate;
}

export const formatDeliveryStatus = (deliveryStatus: string) => {
    // Remove dash and capitalize each word
    const formattedStatus = deliveryStatus.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    return formattedStatus;
}


export const parseTimeToEventValue = (timeString: string): EventValue<Dayjs> => {

    const parsedTime = dayjs(timeString, 'hh:mm A')

    if (parsedTime.isValid())
        return parsedTime

    return null


}


export const parseDateToDayjsValue = (date: string): EventValue<Dayjs> => {

    const parsedTime = dayjs(date, 'YYYY-MM-DD')

    if (parsedTime.isValid())
        return parsedTime

    return null


}

export const disabledDate = (current: Dayjs | null) => {
    // Disable dates before today
    return current ? current.isBefore(dayjs().startOf('day')) : false;
}

// string conversions

export const paymentMethodsConversions = (method: string) => {


    if (CHECKOUT_TYPES.STRIPE == method) return "online"
    if (CHECKOUT_TYPES.CASH_ON_THE_TICKET_BOX == method) return "cash.on.the.ticket.box"
    return method
}


export const openFileInNewTab = async (data: Blob, id: number) => {

    const blob = new Blob([data]);

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create an invisible <a> element to trigger the download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Booking_' + id + '.pdf'
    // Set the desired download filename

    // Append the <a> element to the document
    document.body.appendChild(a);

    // Trigger a click event on the <a> element to initiate the download
    a.click();

    // Remove the <a> element and revoke the Blob URL
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

export const redirectNotification = (from: string) => {
    let path = '/'

    if (from == "products") path = '/account/order-history'

    if (from == "events") path = '/account/event-history'

    if (from == "workspaces") path = '/account/workspace-history'

    return path
}