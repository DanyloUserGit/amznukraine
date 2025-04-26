'use client';

import Image from "next/image"
import { Button } from "../ui/Button"
import { useRouter } from "next/navigation";

export const Deal = () => {
    const router = useRouter();
    return(
        <div className="deal">
            <div className="deal__image">
                <Image 
                    src="/parcel.webp"
                    alt="parcel"
                    width={713}
                    height={475.25}
                />
            </div>
            <div className="deal__info">
                <div className="deal__info-block">
                    <h1>Замовити товари з Амазону</h1>
                    <p>На нашому сайті ви можете легко замовити будь-які товари з Amazon. Просто натисніть кнопку нижче та оформіть покупку швидко, зручно і без зайвого клопоту!</p>
                    <div className="deal__info-block-button">
                        <Button text="Замовити" click={()=>router.push("/form")} />
                    </div>
                </div>
            </div>
        </div>
    )
}