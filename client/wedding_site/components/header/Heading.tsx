import Link from "next/link"
import { motion } from "framer-motion";
import { Props } from "../../interfaces/PropsInterface";

export const Heading:React.FC<Props> = ({
    handleToggleRSVP,
    scrollToMid,
}) => {
    return (
        <nav className="h-full flex flex-col">
            <div className="flex justify-center">
                <img src="/images/Layer_5.png" alt="flowers" className="w-[70%]"></img>
            </div>
            <div className="flex flex-col items-center p-16 gap-5">
                <h1 className="text-5xl">Kiosoris & Americia</h1>
                <div className="flex gap-3 text-xl">
                    <p>September 1st, 2023</p>
                    <p>:</p>
                    <p>Brooklyn, NY</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex gap-7 border-2 rounded px-16 py-4 text-l font-bold underline">
                <Link href={'/guestList'} className="hover:text-cyan">Guest List</Link>
                    <Link
                    href='https://www.amazon.com/registries/gl/guest-view/3HJL2X9OBA8H9'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan">Registry</Link>
                        <motion.a
                        href="#midPoint"
                        onClick={(e) => {
                            e.preventDefault();
                            handleToggleRSVP();
                            setTimeout(() => {
                                scrollToMid();
                            }, 100)
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:text-cyan"
                        >
                            RSVP
                    </motion.a>
                </div>
            </div>
        </nav>
    )
}
