import React, { useState, useEffect } from "react";
import { MobileHeading } from "../header/MobileHeading";
import { MobileBody } from "../body/MobileBody";
import { MobileFooter } from "../footer/MobileFooter";
import { Heading } from "../header/Heading";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import NoSSRWrapper from "../responsive/NoSSRWrapper";
import { Props } from "../../interfaces/PropsInterface";
import { Body } from "../body/Body";
import { Footer } from "../footer/Footer";

export const Home: React.FC<Props> = ({
  isGuestList
}) => {
    const isMobile = useMediaQuery({ maxWidth : DeviceSize.mobile});
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);

  const handleToggleRSVP = () => {
    setFormVisible(!formVisible);
  }

  const handleToggle = (toggled : boolean) => {
    setIsDivVisible(toggled);
  };

    const scrollToMid = () => {
      const scrollToMid = document.getElementById("midPoint");
      if (scrollToMid) {
          const midPosition = scrollToMid.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
          top: midPosition,
          behavior: "smooth",
          });
      }
  };
    return (
        <div id="home" className="h-full">
            <NoSSRWrapper>
                <header className={isDivVisible ? "mb-16" : ""}>
                    {isMobile ? <MobileHeading
                    isDivVisible={isDivVisible}
                    handleToggle={handleToggle}
                    scrollToMid={scrollToMid}
                    handleToggleRSVP={handleToggleRSVP}
                    formVisible={formVisible}
                    isGuestList={isGuestList}
                    /> : <Heading
                    isDivVisible={isDivVisible}
                    handleToggle={handleToggle}
                    scrollToMid={scrollToMid}
                    handleToggleRSVP={handleToggleRSVP}
                    formVisible={formVisible}
                    isGuestList={isGuestList}/>}
                </header>
                <main className={!isMobile ? "mt-24" : ""}>
                    {isMobile ? <MobileBody
                    isDivVisible={isDivVisible}
                    handleToggle={handleToggle}
                    scrollToMid={scrollToMid}
                    handleToggleRSVP={handleToggleRSVP}
                    formVisible={formVisible}
                    isGuestList={isGuestList}/> :
                    <Body
                    isDivVisible={isDivVisible}
                    handleToggle={handleToggle}
                    scrollToMid={scrollToMid}
                    handleToggleRSVP={handleToggleRSVP}
                    formVisible={formVisible}
                    isGuestList={isGuestList}
                    />}
                </main>
                <footer>
                  {isMobile ? <MobileFooter/> : <Footer/>}
                </footer>
            </NoSSRWrapper>
        </div>
    );
};
