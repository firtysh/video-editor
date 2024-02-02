"use client";

import { useState, useRef, useEffect } from "react";

export default function Video({ vidref}: { vidref: React.RefObject<HTMLVideoElement>}) {
    const [video, setVideo] = useState<any>(null);
    // const videoRef = useRef<HTMLVideoElement>(null);
    const vidCanvas = useRef<HTMLCanvasElement>(null);
    const add = async () => {
        const pickerOpts = {
            types: [
                {
                    description: "Video Files",
                    accept: {
                        "video/*": [".mp4", ".mov", ".avi", ".mkv"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
            multiple: false,
        };
        // @ts-ignore
        const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
        const file = await fileHandle.getFile();
        setVideo(URL.createObjectURL(file));
    }
    useEffect(() => {
        const v = vidref?.current;
        if (v) {
            v.addEventListener('play', () => {
                function step() {
                    const c = vidCanvas.current;
                    if (c) {
                        c.width = 824;
                        c.height = 464;
                        const ctx = c.getContext('2d') as CanvasRenderingContext2D;
                        // @ts-ignore
                        ctx.drawImage(v, 0, 0, c.width, c.height);
                        requestAnimationFrame(step);
                    }
                }
                requestAnimationFrame(step);
            })
        }
    }
        , [video])


    return <>

        {
            video ?
                <div className="flex w-full h-full rounded-3xl relative justify-center items-center"><video ref={vidref} controls src={video} className="w-0 h-0 rounded-3xl " />
                    <canvas ref={vidCanvas} className="bg-red-400">

                    </canvas>
                </div> :
                <div className="flex flex-col justify-center items-center h-full">
                    <button onClick={add}>Add</button>
                </div>
        }


    </>
}