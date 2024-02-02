"use client";
import { useEffect } from "react";
import TimelineTools from "./TimelineTools";


export default function Timeline({ vidref }: { vidref: React.RefObject<HTMLVideoElement>}) {

    useEffect(()=>{
        function draw() {
            const canvas = document.getElementById('canvas') as HTMLCanvasElement;
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            // canvas.width =  document.getElementById('canvas-wrap')?.getBoundingClientRect().width as number ;
            canvas.width = document.getElementById('canvas-wrap')?.getBoundingClientRect().width as number
            canvas.height =  document.getElementById('canvas-wrap')?.getBoundingClientRect().height as number;
            let x= 0;
            for(let i=10;i<canvas.width;i=i+60){
                ctx.font = "10px Arial";
                ctx.fillStyle = 'white';
                ctx.fillText(`${x++}m`, i, 10);
                ctx.beginPath();
                // ctx.moveTo(i, 13);
                ctx.fillStyle = '#37383d';
                ctx.arc(i, 17, 2, 0, Math.PI * 2);
                ctx.arc(i, 57, 2, 0, Math.PI * 2);
                ctx.arc(i, 107, 2, 0, Math.PI * 2);
                ctx.arc(i, 157, 2, 0, Math.PI * 2);
                ctx.arc(i, 207, 2, 0, Math.PI * 2);
                ctx.arc(i, 257, 2, 0, Math.PI * 2);
                ctx.fill();
            }        
            ctx.fillStyle = 'green';
            ctx.fillRect(10, 15, vidref.current?.duration  as number, 25);
            ctx.fillStyle = 'yellow';
            ctx.fillRect(10, 15, vidref.current?.currentTime as number, 25);
            // draw ble line along the video
            // ctx.fillStyle = 'blue';
            ctx.beginPath();
            // @ts-ignore
            ctx.moveTo(10 + vidref.current?.currentTime , 0);
            // @ts-ignore
            ctx.lineTo(10 + vidref.current?.currentTime , canvas.height);
            // ctx.lineTo(vidref.current?.duration * 50 as number, 40);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
        // if(vidref.current){
        //     ctx.fillStyle = 'green';
        //     ctx.fillRect(0, 15, vidref.current.duration, 25);
        // }

    
    },[vidref.current?.duration])
    


    return <>
        <div id="timeline" className="flex flex-1 rounded-3xl flex-col">
            <TimelineTools vidref={vidref} />
            <div id="canvas-wrap" className="bg-blue-400 flex-1 max-w-full overflow-clip">
                <canvas id="canvas" className=" bg-[#1b1c21] block">
                </canvas>
            </div>

        </div>
    </>
}