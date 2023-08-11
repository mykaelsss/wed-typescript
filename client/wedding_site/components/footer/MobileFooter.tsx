import React from "react"
import Link from "next/link"

export const MobileFooter = () => {
    const scrollToTop = () => {
        const scrollToTop = document.getElementById("home");
        if (scrollToTop) {
            const topPosition = scrollToTop.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
            top: topPosition,
            behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <ul className="flex flex-col w-full items-center py-5">
                <li className="border border-b-0 w-full flex justify-center underline p-1">
                    <Link
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToTop();
                    }}
                    className="hover:text-cyan"
                    >
                    Home
                    </Link>
                </li>
                <li className="border border-b-0 w-full flex justify-center underline p-1">
                <Link href='https://www.amazon.com/registries/gl/guest-view/3HJL2X9OBA8H9'
                className="hover:text-cyan"
                target="_blank"
                rel="noopener noreferrer">Registry</Link>
                </li>
                <li className="border w-full flex justify-center underline p-1">
                    <Link href='/guestList' className="hover:text-cyan">Guest List</Link>
                </li>
            </ul>
            <div className="flex flex-col gap-2 py-3 items-center">
                <h3 className="text-2xl">K & A</h3>
                <hr className='bg-dark-rose h-0.5 w-2/3'/>
                <p className="text-xl">9 . 1 . 2023</p>
            </div>
            <div className="flex flex-col gap-2 py-3 items-center">
                <div className="flex gap-2">
                    <span>Questions about the wedding?</span>
                    <Link href="mailto:skiosoris@gmail.com?subject=Regarding%20Your%20Wedding">
                        <span className="text-cyan underline ">Contact Kiosoris</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <span>Questions about the site?</span>
                    <Link href="mailto:mykaelsicard04@gmail.com?subject=Regarding%20Your%20Site">
                        <span className="text-cyan underline">Contact Mykael</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
