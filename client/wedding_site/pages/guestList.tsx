import React from 'react';
import { GuestList } from "@/components/guestList/GuestList";
import Head from "next/head";
export default function guestList() {
    return (
        <>
            <Head>
                <title>Kiosoris & Americia | Wedding</title>
                <meta name="description" content="Bleep boop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GuestList />
        </>
    )
}
