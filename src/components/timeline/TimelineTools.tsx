"use client";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineContentCut } from "react-icons/md";
import { CiMicrophoneOn, CiZoomIn, CiZoomOut } from "react-icons/ci";
import { FaForward, FaBackward, FaPlay, FaPause } from "react-icons/fa";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { BsSoundwave } from "react-icons/bs";
import React from "react";

export default function TimelineTools({vidref}: {vidref: React.RefObject<HTMLVideoElement>}){
    const [playing, setPlaying] = React.useState(false);

    const addMedia = async () => {
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
        console.log(file)
        console.log(typeof file);
        
        
    }
    const playVideo = () => {
        vidref.current?.play();
        console.log(vidref.current?.duration);
        
        setPlaying(true);
    }
    const pauseVideo = () => {
        vidref.current?.pause();
        setPlaying(false);
    }
    return <>
    <div className="flex justify-between items-center p-3 bg-[#1b1c21] rounded-t-3xl shadow-lg shadow-black">
                <div className="flex gap-3">
                    <button className="flex items-center justify-center  border-white gap-1 text-sm " onClick={addMedia}>
                        <IoIosAddCircleOutline className="text-xl" />
                        Add Media
                    </button>
                    <button className="flex items-center justify-center border border-t-0 border-b-0 border-white gap-1 text-sm px-3">
                        <MdOutlineContentCut className="text-xl" />
                        Split
                    </button>
                    <button className="flex items-center justify-center  border-white gap-1 text-sm ">
                        <CiMicrophoneOn className="text-xl" />
                        Voiceover
                    </button>

                </div>
                <div className="flex gap-4">
                    <FaBackward className="text-xl cursor-pointer" />
                    {
                        !playing? <FaPlay className="text-xl cursor-pointer" onClick={playVideo}/> : <FaPause className="text-xl cursor-pointer" onClick={pauseVideo} />
                    }
                   
                    
                    <FaForward className="text-xl cursor-pointer" />
                </div>
                <div className="flex gap-3">
                    <HiOutlineSpeakerWave className="text-xl" />
                    <div className="flex gap-1 items-center border border-t-0 border-b-0 px-3">
                        <CiZoomIn className="text-xl cursor-pointer" />
                        <input type="range" className="h-[1px] w-10 rounded-lg  cursor-pointer" />
                        <CiZoomOut className="text-xl cursor-pointer" />
                    </div>
                    <BsSoundwave className="text-xl" />
                </div>
            </div>
    </>
}