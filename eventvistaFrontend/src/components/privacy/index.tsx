import Header from "@/layout/header/header"
import Footer from "@/layout/footer/footer"
import HeadBanner from "@/utils/global/banner"
import PrivacPolicyArea from "./about-us-area"
import { PageType } from "@/types_and_interfaces/types"



export const PrivacyPolicy: React.FC<{page:PageType}> = ({page}) => {
    return (
        <>
        <div className="container-fluid pb-70 pt-50">
            <div className="container">
                {page && <div className="about-us-p-description"  >
                    <div style={{color:'red'}} dangerouslySetInnerHTML={{ __html: page?.content }}></div>
                </div>}
            </div>
        </div>
    </>
    )
}

export default PrivacyPolicy