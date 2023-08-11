import { useState } from "react";
import { MobileHeading } from "../header/MobileHeading";
import { useRouter } from "next/router";
import { MobileGBody } from "../body/GuestListBody";

export const GuestList = () => {
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const router = useRouter();

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

    const isGuestList:boolean =(router.pathname="/guestList") ? true : false;
    return (
        <div id="top" className="h-full ">
            <nav className={isDivVisible ? "mb-24" : ""}>
                <MobileHeading
                isDivVisible={isDivVisible}
                formVisible={formVisible}
                handleToggle={handleToggle}
                scrollToMid={scrollToMid}
                handleToggleRSVP={handleToggleRSVP}
                isGuestList={isGuestList}/>
            </nav>
            <main className="h-full">
                <MobileGBody
                isDivVisible={isDivVisible}
                handleToggle={handleToggle}
                scrollToMid={scrollToMid}
                handleToggleRSVP={handleToggleRSVP}
                formVisible={formVisible}
                isGuestList={false}/>
            </main>
        </div>
    )
}
