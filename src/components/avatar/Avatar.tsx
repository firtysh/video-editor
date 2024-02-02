import { ImgHTMLAttributes } from "react";

export default function Avatar(props:ImgHTMLAttributes<HTMLImageElement>) {
    return <>
    <img alt="Profile Picture" width={56} height={56} className="rounded-full" {...props}/>
    </>
}