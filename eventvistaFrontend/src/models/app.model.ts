import app_service from "@/services/app.service";
import { CouponsType, FaqType, PageType, allItemsCouponsT, allItemsT } from "@/types_and_interfaces/types";
import { useQuery } from "react-query";



// terms and conditions
export const useModelGetTerms = () => {

    return useQuery(['terms'], () => app_service.gernal.terms_and_conditions({}), {
        cacheTime: 300000,
        staleTime: 300000

    })

}

// get page

export const useModelGetPage = (data: any) => {

    return useQuery(['page'], () => app_service.gernal.page(data), {
        cacheTime: 300000,
        staleTime: 300000

    })

}


// get contact us 
export const useModelGetContactUs = () => {

    return useQuery(['contact-us-query'], () => app_service.gernal.contact_us({}), {
        cacheTime: 300000,
        staleTime: 300000

    })

}   