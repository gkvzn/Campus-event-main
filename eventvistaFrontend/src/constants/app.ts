export const EndPoint = 'http://localhost:8080/api/v1'
export const ServerAssets = 'http://loclahost:8080/'

// allow Extensions
export const Extensions = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg', 'application/x-zip-compressed'];

export const Asset = (path: string) => {
    return ServerAssets + path
}


// API URLS
export const Api = {
    user_module: {

        // user Api
        auth: {
            reset_password: {
                // reset password
                reset: "/users/email/reset/password",
                verify: "/users/email/verify",
                update_password: "/users/email/reset/password/update",
            },
            sign_in: "/users/signin",
            sign_up: "/users/signup",
            sign_out: "/users/signout",
            verify: "/users/verify",
        },

        settings: {
            profile: "/settings/profile",
            change_password: "/settings/change-password",
            profile_photo: "/settings/profile-photo",
            fcm_on_off: "/settings/fcm-on-off"
        },

        gernal: {
            terms_and_conditions: "/app/get-terms-and-conditions",
            page: "/app/get-page",
            contact_us: "/app/get-contact-us",
            send_contact_us: "/app/send-contact-us",
        }

    },

    // event URls
    events_and_spaces: {
        events: {
            wishlist: {
                add: "/events/wishlist/add",
                get: "/events/wishlist/get",
                remove: "/events/wishlist/remove"
            },

            calendar: {
                add_calendar: "/events/wishlist/calender",
                remove_calendar: "/events/wishlist/remove_calendar",
                get_calender: "/events/wishlist/get_calendars",
            },
            all: "/events/all",
            categories: "/events/categories",
            solo: "/events/item",
            events_sidebar: "/events/sidebar"
        },

    }

}

export const ON_PAGE_ROCORDS = {
    SHOP: 16,
    EVENTS: 16,
}