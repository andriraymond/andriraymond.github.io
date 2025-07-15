import React from "react";
import {
  TestTube,
  TestTubes,
  TestTubeDiagonal,
  Workflow,
  Webhook,
  Presentation
} from "lucide-react";

export default function Service() {
    return (
        <div className="w-full h-full p-4 space-y-4">
            <div className="flex items-center w-full">
                <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
                Service
                </span>
                <div className="flex-grow h-[2px] bg-[#252525]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* {portfolios.map((portfolio) => ( */}
                <div className="border rounded-lg p-4 p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2">
                    {/* <img
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    className="w-full h-48 object-cover rounded"
                    /> */}
                    <TestTubeDiagonal className="w-8 h-8 text-[#252525]" />
                    <h3 className="text-[15px] text-[#252525] font-medium">Manual Testing</h3>
                    {/* <p className="text-sm text-gray-600">{portfolio.description}</p> */}
                </div>
                <div className="border rounded-lg p-4 p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2">
                    {/* <img
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    className="w-full h-48 object-cover rounded"
                    /> */}
                    <Workflow className="w-8 h-8 text-[#252525]" />
                    <h3 className="text-[15px] text-[#252525] font-medium">Automation Testing</h3>
                    {/* <p className="text-sm text-gray-600">{portfolio.description}</p> */}
                </div>
                <div className="border rounded-lg p-4 p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2">
                    {/* <img
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    className="w-full h-48 object-cover rounded"
                    /> */}
                    <Webhook className="w-8 h-8 text-[#252525]" />
                    <h3 className="text-[15px] text-[#252525] font-medium">API Testing</h3>
                    {/* <p className="text-sm text-gray-600">{portfolio.description}</p> */}
                </div>
                <div className="border rounded-lg p-4 p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2">
                    {/* <img
                    src={portfolio.imageUrl}
                    alt={portfolio.title}
                    className="w-full h-48 object-cover rounded"
                    /> */}
                    <Presentation className="w-8 h-8 text-[#252525]" />
                    <h3 className="text-[15px] text-[#252525] font-medium">QA Consulting & Improvement</h3>
                    {/* <p className="text-sm text-gray-600">{portfolio.description}</p> */}
                </div>
                {/* ))} */}
            </div>
    </div>
)}