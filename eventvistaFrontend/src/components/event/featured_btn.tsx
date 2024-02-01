import { Button } from "@/utils/forms/button";
import React, { useState } from "react";

const FeaturedButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const setModalVisibility = (isVisible: boolean) => {
    setShowModal(isVisible);
  };

  return (
    <div className="featured-text" onClick={() => setModalVisibility(true)}>
      Share Event
    </div>
  );
};

export default FeaturedButton;
