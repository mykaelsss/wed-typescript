import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Props } from '@/interfaces/PropsInterface';
import { RSVP } from '@/components/rsvp/RSVP';

export const MobileBody: React.FC<Props> = ({
    isDivVisible,
    handleToggle,
    scrollToMid,
    handleToggleRSVP,
    formVisible,
    isGuestList
}) => {
    return (
        <div className="flex flex-col p-5 gap-10">
            <div className='relative flex justify-center p-[10px] w-full'>
                <img src="/images/Layer_4.png" alt="rose border" className='absolute w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></img>
                <img src="/images/happy_couple.JPEG" alt="happy couple" className='w-[80%]'></img>
            </div>
            <div className='flex pt-10 pb-2 justify-center'>
                <h3 className='text-2xl'>Kiosoris & Americia</h3>
            </div>
            <div className='flex gap-5 justify-center'>
                <p>September 1st, 2023</p>
                <p id='midPoint'>:</p>
                <p>Brooklyn, NY</p>
            </div>
            <AnimatePresence mode="wait">
                {formVisible && (
                    <motion.div
                    key={21}
                    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    animate={{ opacity : 1, height : 'auto'}}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.7 }}
                    className="">
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
            <div className='flex flex-col items-center gap-3 py-7'>
                <h4 className='text-xl'>September 1st, 2023</h4>
                <hr className='bg-dark-rose h-0.5 w-2/3'/>
                <div className='flex flex-col items-center text-xl'>
                    <p>Brooklyn</p>
                    <p>NY</p>
                </div>
                <div>
                    <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleToggleRSVP();
                    }}
                    className="border-2 rounded-md p-2 hover:bg-dark-rose hover:text-offWhite"
                    >
                    RSVP
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h3 className='text-2xl'>WEDDING DAY</h3>
                <p className='text-xl'>September 1st, 2023</p>
            </div>
            <div className='border-2 p-3 flex flex-col gap-3'>
                <p>6 - 9pm</p>
                <p>Ceremony</p>
                <p>Bushwick Paper Mill</p>
                <p>456 Johnson Ave Unit 430 Brooklyn, NY 11237</p>
                <div className='flex flex-col items-center'>
                    <p className='underline font-black'>Dress Code</p>
                    <div className='border p-3 flex flex-col gap-3 rounded-md text-right'>
                        <p>- Light Pastels / Neutrals</p>
                        <p>- Dress comfortable</p>
                        <p>- Polo's, Casual Dress Shirts, Casual Dresses</p>
                        <p>- You may also go all out if you would like to, but don't be afraid to dress comfortable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
