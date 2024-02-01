import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <>

      <a href={"https://www.facebook.com/"} className={""} target={""}>
        <img src="/assets/media/icons/footer/facebook.svg" alt="" />
      </a>

      <a href={"https://www.instagram.com/"} className={""} target={""}>
        <img src="/assets/media/icons/footer/instagram.svg" alt="" />
      </a>

      <a href={"https://www.youtube.com/"} className={""} target={""}>
        <img src="/assets/media/icons/footer/youtube.svg" alt="" />
      </a>

      <a href={"https://pk.linkedin.com/"} className={""} target={""}>
        <img src="/assets/media/icons/footer/linkdin.svg" alt="" />
      </a>
    
    </>
  );
};

export default SocialLinks;
