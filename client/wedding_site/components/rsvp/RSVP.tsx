import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { VscChromeClose } from "react-icons/vsc";
import { Props } from '../../interfaces/PropsInterface';

export const RSVP: React.FC<Props> = ({
    handleToggleRSVP,
    formVisible,
}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [showMsg, setShowMsg] = useState(false);
    const router = useRouter();

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://wedding-backend-lake.vercel.app/api/wedding/', {
                firstName,
                lastName
            });
            console.log(response);
            setShowMsg(true);
            setTimeout(() => {
                if (router.pathname === '/guestList')
                    window.location.reload();
                else
                    router.push('/guestList');
            }, 2000)
        } catch (err: any) {
            console.log(err);
            const errorResponse = err.response.data.errors;
            const errorArr: string[] = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
                setErrors(errorArr);
            }
            console.log(errors);
        }
    };

    return (
            <div
            className='flex w-full justify-center p-3'
            id="midPoint">
                <div className='bg-offWhite rounded-lg w-11/12 p-3 flex flex-col gap-5'>
                        <VscChromeClose className="hover:cursor-pointer"
                        size={24}
                        onClick={ () =>handleToggleRSVP() }/>
                    <h1 className='text-center underline font-extrabold'>Registration Card</h1>
                    {showMsg && <p>Your seat has been reserved, see you then! Redirecting...</p>}
                    <form onSubmit={ onSubmitHandler } className="flex flex-col gap-3 ">
                        { errors.map((err, i) => <p key={i} className="font-extrabold text-red">{err}</p>) }
                        <div className='flex flex-col w-48 gap-1'>
                            <label>First Name:</label>
                            <input type="text"
                            name='firstName'
                            onChange={(e) => setFirstName(e.target.value)}
                            className="rounded-md"/>
                        </div>
                        <div className='flex flex-col w-48 gap-1'>
                            <label>Last Name:</label>
                            <input type="text"
                            name='lastName'
                            onChange={(e) => setLastName(e.target.value)}
                            className="rounded-md"/>
                        </div>
                        <div>
                            <input type="submit"
                            value="submit"
                            className='border-2 w-20 p-px text-xl flex justify-center items-center rounded-md text-l hover:bg-dark-rose hover:text-wht hover:cursor-pointer'/>
                        </div>
                    </form>
                    <div className='flex flex-col gap-2 w-full items-end'>
                        <p>Already RSVP'd?</p>
                        <Link href="/guestList" className='text-cyan underline'>See list of attendees</Link>
                    </div>
                </div>
            </div>
    )
}
