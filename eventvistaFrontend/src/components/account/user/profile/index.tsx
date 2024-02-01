import Header from "@/layout/header/header"
import AccountProfile from "./profile"
import Footer from "@/layout/footer/footer"
import HeadBanner from "@/utils/global/banner"


export const Profile: React.FC = () => {
    return (
        <>
            <Header />
            <HeadBanner title="Account Setting"/>
            <AccountProfile />
            <Footer />
        </>
    )
}

export default Profile