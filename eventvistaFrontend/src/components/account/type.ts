// ChangePasswordProps
export type ChangePasswordProps = {
    setcurrentState: React.Dispatch<React.SetStateAction<string>>
}

// account sidebar props

export type AccountsideBarProps = {
    name: string;
    sub_name?: string
}


// Eror Response

export type ErrorResponse = {
    flag: number;
    errors: string[];
}


// Wishlistbtn



export type WishListBtnProps = {
    is_wishlist: boolean;
    id: number;
    refetch: () => void
}

export type CalendarBtnProps = {

    is_calendar: boolean;
    id: number;
    refetch: () => void
}


