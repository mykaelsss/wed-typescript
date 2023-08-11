import { Props } from "@/interfaces/PropsInterface"
import { RSVP } from "@/components/rsvp/RSVP"
import { AnimatePresence, motion } from "framer-motion"

export const Body:React.FC<Props> = ({
    isDivVisible,
    handleToggle,
    scrollToMid,
    handleToggleRSVP,
    formVisible,
    isGuestList
}) => {
    return (
        <div>
            <div className="flex justify-center p-[10px] w-full relative">
                <img src="/images/Layer_4.png"
                alt="rose border"
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px]'></img>
                <img src="/images/happy_couple.JPEG"
                alt="happy couple"
                className='w-[600px] '></img>
            </div>
            <div className="flex pt-24 pb-10 justify-center">
                <div className="text-3xl p-5" id="midPoint">
                    <p>September 1st,<br/>2023</p>
                </div>
                <div className="text-3xl border-l-2 p-5">
                    <p>Brooklyn,<br/>NY</p>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {formVisible && (
                    <motion.div
                    key={21}
                    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    animate={{ opacity : 1, height : 'auto'}}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.7 }}>
                        <RSVP
                        isDivVisible={isDivVisible}
                        handleToggle={handleToggle}
                        scrollToMid={scrollToMid}
                        handleToggleRSVP={handleToggleRSVP}
                        formVisible={formVisible}
                        isGuestList={isGuestList}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <span className="flex justify-center pl-12 pb-4">
                <button
                onClick={(e) => {
                    e.preventDefault();
                    handleToggleRSVP();
                    console.log(formVisible)
                }}
                className="border-2 rounded-md p-2 hover:bg-dark-rose hover:text-offWhite"
                >
                    RSVP
                </button>
            </span>
            <div className="flex flex-col items-center pl-12 py-12 gap-5">
                <h3 className="text-3xl">WEDDING DAY</h3>
                <p className="text-xl">September 1st, 2023</p>
            </div>
            <div className="flex justify-center p-5">
                <div className="flex justify-center gap-5 px-12 py-6 border-y-2">
                    <div>
                        <p className="text-2xl underline w-20">6 - 9pm</p>
                    </div>
                    <div className="py-6">
                        <p className="text-2xl underline">Ceremony</p>
                        <p>Bushwick Paper Mill</p>
                        <p>456 Johnson Ave Unit 430 Brooklyn, NY 11237</p>
                    </div>
                    <div className="pt-20">
                        <p className="text-2xl underline">Dress Code</p>
                        <div>
                            <p>- Light Pastels / Neutrals</p>
                            <p>- Dress comfortable</p>
                            <p>- Polo's, Casual Dress Shirts, Casual Dresses</p>
                            <p>- You may also go all out if you would like to, but don't be afraid to dress comfortable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
