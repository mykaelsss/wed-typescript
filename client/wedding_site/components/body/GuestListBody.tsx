import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { Props } from '@/interfaces/PropsInterface';
import { RSVP } from '@/components/rsvp/RSVP';

interface Guest {
    firstName: string;
    lastName: string;
    createdAt: string;
}
export const MobileGBody: React.FC<Props> = ({
    isDivVisible,
    handleToggle,
    scrollToMid,
    handleToggleRSVP,
    formVisible,
    isGuestList
}) => {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage: number = 5;
    let totalGuests: number = 0;
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        setAnimationCompleted(false);
    }, [currentPage]);

    useEffect( () => {
        axios.get('https://wedding-backend-lake.vercel.app/api/wedding')
        .then( res => {
            console.log(res)
            setGuests(res.data.people)
        }).catch( err => console.log(err) )
    }, [])

    totalGuests = guests.length;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGuests = guests.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className={`w-full h-full flex flex-col items-center relative gap-5 ${formVisible ? 'backdrop-blur-md' : ''} `}>
            <h1 className='text-xl p-5'>There are {totalGuests} guests so far!</h1>
            <AnimatePresence mode="wait">
                {formVisible && (
                    <motion.div
                    key={21}
                    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    animate={{ opacity : 1, height : 'auto'}}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.7 }}
                    className="z-20 postion absolute left-50 w-full backdrop-blur-3xl">
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
            <AnimatePresence>
                <ul className='flex flex-col gap-3 w-full items-center p-3'>
                    {currentGuests.map((guest,index) => {
                        const registered:string = guest.createdAt;
                        const date = new Date(registered);
                        const formattedDate:string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
                        const transitionDelay:number = (index / totalGuests) * .45
                        const animateFrom = { opacity: 0, y: -50 };
                        const animateTo = { opacity: 1, y: 0 };
                        return (
                            <motion.li
                            key={guest.createdAt}
                            initial={animateFrom}
                            animate={ animationCompleted ? animateTo : animateFrom }
                            transition={{ delay: transitionDelay }}
                            onAnimationComplete={() => setAnimationCompleted(true)}
                            className="flex-col gap-1 underline">
                                <div className={(guest.firstName.length > 15 || guest.lastName.length > 15) ? "flex flex-col gap-1" : "flex gap-1"}>
                                    <p>{guest.firstName}</p>
                                    <p>{guest.lastName},</p>
                                </div>
                                <p>Reserved Seat On: {formattedDate}</p>
                            </motion.li>
                        )
                    })}
                </ul>
            </AnimatePresence>
            <div className='my-4'>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`mx-2 px-2 py-1 rounded text-l ${
                        currentPage === 1 ? '' : 'bg-cyan text-offWhite p-3'
                    }`}
                >
                    &lt; Prev
                </button>
                {currentPage > 3 && (
                    <span className="mx-2">
                    <button
                        onClick={() => paginate(1)}
                        className="px-0.5 py-1 rounded text-l "
                    >
                        ...
                    </button>
                </span>
                )}
                {Array.from({ length: Math.min(3, Math.ceil(guests.length / itemsPerPage)) }, (_, i) => {
                    const pageNumber: number = currentPage + i;
                    return (
                        pageNumber <= Math.ceil(guests.length / itemsPerPage) && pageNumber >= 1 && (
                            <button
                                key={pageNumber}
                                onClick={() => paginate(pageNumber)}
                                className={`mx-2 px-2 py-1 rounded text-l ${
                                    pageNumber === currentPage ? 'bg-cyan text-offWhite p-3' : ''
                                }`}
                            >
                                {pageNumber}
                            </button>
                        )
                    );
                })}
                {currentPage + 2 < Math.ceil(guests.length / itemsPerPage) && (
                    <span className="mx-2">
                        <button
                        onClick={() => paginate(Math.ceil(guests.length / itemsPerPage))}
                        className="px-0.5 py-1 rounded text-xl"
                        >...
                        </button>
                    </span>
                )}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(guests.length / itemsPerPage)}
                    className={'mx-2 px-2 py-1 rounded text-l bg-cyan text-offWhite p-3'}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    )
}
