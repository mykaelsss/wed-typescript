import Link from "next/link"

export const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center p-12">
                <div className="border-b-2 w-1/5 flex justify-center pb-3">
                    <h6 className="text-3xl">K & A</h6>
                </div>
                <p className="text-2xl pt-3">9 . 1 . 2023</p>
            </div>
            <div className="flex flex-col gap-2 py-3 items-center">
                <div className="flex gap-2">
                    <span>Questions about the wedding?</span>
                    <Link href="mailto:skiosoris@gmail.com">
                        <span className="text-cyan underline ">Contact Kiosoris</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <span>Questions about the site?</span>
                    <Link href="mailto:mykaelsicard04@gmail.com">
                        <span className="text-cyan underline">Contact Mykael</span>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <img src="/images/pngwing.com.png" alt="flowers_butterflies" className="w-[70%]"/>
            </div>
        </div>
    )
}
