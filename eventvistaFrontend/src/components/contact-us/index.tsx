import Header from "@/layout/header/header"
import Footer from "@/layout/footer/footer"
import HeadBanner from "@/utils/global/banner"
import ContactUsArea from "./contact-us-area"


export const ContactUs: React.FC = () => {
    return (
        <>
            <Header />
            <HeadBanner title="Contact Us"/>
            <ContactUsArea />
            <Footer />
        </>
    )
}

export default ContactUs