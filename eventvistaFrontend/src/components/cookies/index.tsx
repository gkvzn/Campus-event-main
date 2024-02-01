import { PageType } from "@/types_and_interfaces/types"



export const CookiesPrivacyPolicy: React.FC<{page:PageType}> = ({page}) => {
    return (
        <>
        <div className="container-fluid pb-70 pt-50">
            <div className="container">
                {page && <div className="about-us-p-description"  >
                    <div dangerouslySetInnerHTML={{ __html: page?.content }}></div>
                </div>}
            </div>
        </div>
    </>
    )
}

export default CookiesPrivacyPolicy