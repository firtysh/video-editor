"use client";
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Timeline from "@/components/timeline/Timeline";
import TextUtilityBox from "@/components/utilities/TextUtilityBox";
import Video from "@/components/video/Video";
export default function Home() {
  const vidRef = React.useRef<HTMLVideoElement>(null);
  return (
    <>
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col gap-4 mr-2">
          <div className="flex flex-1 gap-4">
            <TextUtilityBox />
            <div className="flex-1 flex bg-gray-500 rounded-3xl justify-center items-center">
              <Video  vidref={vidRef}/>
            </div>
          </div>
          <div id="tml" className="flex bg-red-400 flex-1 rounded-3xl">
            <Timeline vidref={vidRef} />
          </div>
        </div>
      </div>
    </>
  );
}
