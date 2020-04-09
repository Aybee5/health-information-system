import React, { useState, useEffect } from "react";

// Custom component imports
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HISIntro from "../../components/HISIntro/HISIntro";
import Infos from "../../components/Infos/Infos";
import Banner from "../../components/Banner/Banner";

const HIS = props => {
  const [infoState] = useState([
    {
      brief: "0803-191-5694",
      heading: "EMERGENCY SERVICE",
      btnCaption: "See More",
      detail:
        "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy."
    },
    {
      brief: "fa fa-calendar-o",
      heading: "DO YOU WANT TO MAKE AN APPOINTMENT",
      btnCaption: "See More",
      detail:
        "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy."
    },
    {
      brief: "fa fa-handshake-o",
      heading: "About Us",
      btnCaption: "See More",
      detail:
        "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy."
    }
  ]);
  // header shadow state
  const [headerShadowState, setHeaderShadowState] = useState(false);
  useEffect(() => {
    // check the scolltop value
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        setHeaderShadowState(true);
      } else {
        setHeaderShadowState(false);
      }
    });
  });

  return (
    <React.Fragment>
      <Header headerShadow={headerShadowState} />
      <Banner showBannerMessage={true} />
      <HISIntro heading="National Health Information System" />
      <Infos infos={infoState} />
      <HISIntro heading="Why did you need NHIS account?" btn={true} />
      <Footer />
    </React.Fragment>
  );
};

export default HIS;
