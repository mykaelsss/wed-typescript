import React, {useState} from "react";
import Hamburger from "hamburger-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Props } from '../../interfaces/PropsInterface'

export const MobileHeading: React.FC<Props>  = ({
    isDivVisible,
    handleToggle,
    scrollToMid,
    handleToggleRSVP,
    isGuestList}) => {
    const animateFrom = { opacity : 0, y : -50};
    const animateTo = { opacity : 1, y : 0};
    const [isHamburgerToggled, setHamburgerToggled] = useState(false);

    const handleLinkClick = () => {
        handleToggle(false);
        setHamburgerToggled(false);
    };

    return (
    <nav className="sticky top-0 z-20">
        <div className="grid grid-cols-3 p-4 ">
            <Hamburger size={24}
            toggled={isHamburgerToggled}
            toggle={setHamburgerToggled}
            onToggle={handleToggle}/>
            <div className="flex justify-center items-center">
                <p className="text-2xl">K & A</p>
            </div>
        </div>
        {isDivVisible && (
            <div
            className="absolute top-16 left-0 h-24 bg-white z-10 mb-20 flex"
            onClick={() => handleToggle(false)}
            >
                <ul className="px-7 flex flex-col gap-1">
                    <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay : 0.05 }}
                        >
                        <Link href='https://www.amazon.com/registries/gl/guest-view/3HJL2X9OBA8H9'
                        className="underline font-bold text-[1.2rem]"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>{
                            handleLinkClick();
                            }}>Registry</Link>
                    </motion.li>
                    <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay :0.20 }}>
                        <Link
                        href={isGuestList ? "#top" : "#midPoint"}
                        onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick();
                            handleToggleRSVP();
                            setTimeout(() => {
                                scrollToMid();
                            }, 100)
                        }}
                        className="underline font-bold text-[1.2rem]"
                        >
                        RSVP
                        </Link>
                    </motion.li>
                    {isGuestList && (
                        <motion.li
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{ delay : 0.35 }}>
                            <Link href='/' className="underline font-bold text-[1.2rem]">Home</Link>
                        </motion.li>
                    )}
                </ul>
            </div>
            )}
    </nav>
);
};
