import Head from "next/head";
import { Home } from "@/components/home/Home"
import { Props } from "@/interfaces/PropsInterface";
export default function home() {
    const Props: Props = {
        isDivVisible: false,
        handleToggle: () => {},
        handleToggleRSVP: () => {},
        scrollToMid: () => {},
        formVisible: false,
        isGuestList: false,
    }
    return (
        <>
        <Head>
            <title>Kiosoris & Americia | Wedding</title>
            <meta name="description" content="Bleep boop" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
        <Home {...Props}/>
        </>
    )
}
