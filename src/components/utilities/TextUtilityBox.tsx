import { PiTextTFill } from 'react-icons/pi';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoBold } from "react-icons/go";
import { MdOutlineFormatItalic, MdOutlineFormatUnderlined } from "react-icons/md";
import { FaAlignCenter, FaAlignLeft, FaAlignRight,FaAngleRight } from "react-icons/fa";
export default function TextUtilityBox() {
    return <>
        <div className="rounded-3xl bg-[#1b1c21] min-w-72 p-6 flex flex-col items-stretch gap-6">
            <div>
                <div className='flex justify-between items-center mb-2'>
                    <div className='flex gap-1 font-bold'>
                        <PiTextTFill className="text-2xl" />
                        Text
                    </div>
                    <button className='flex text-xs items-center gap-1'>
                        <IoIosAddCircleOutline className="text-xl" />
                        Add Textbox
                    </button>
                </div>
                <textarea name="" id="" cols={30} rows={10} className='bg-[#2d2d33] rounded-xl outline-none px-3 py-4 leading-3 text-gray-400' ></textarea>
            </div>
            <div className=' flex flex-col gap-2'>
                <div className='font-bold'>
                    Text Style
                </div>
                <div className='flex gap-2  '>
                    <div className='flex-1 bg-[#2d2d33] rounded-xl p-3 '>
                        <select name="font" id="fontStyle" className='w-full bg-[#2d2d33] outline-none'>
                            <option value="Arial">Arial</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto">Roboto</option>
                        </select>
                    </div>
                    <div className='bg-[#2d2d33] rounded-x p-3 rounded-xl'>
                        <select name="font-size" id="fontSize" className='bg-[#2d2d33]  outline-none'>
                            <option value="12">12px</option>
                            <option value="14">14px</option>
                            <option value="16">16px</option>
                        </select>
                    </div>
                </div>
                <div className=' flex justify-between gap-2'>
                    <div id="textStyle" className='flex flex-1 px-6 py-3 rounded-xl text-xl items-center bg-[#2d2d33] justify-between'>
                        <div className='p-2 rounded-lg hover:bg-black'>
                            <MdOutlineFormatItalic className='text-2xl' />
                        </div>
                        <div className='text-blue-600 bg-black p-2 rounded-lg'> {/*className='active text-blue-600 bg-black p-2 rounded-lg'*/}
                            <GoBold />
                        </div>
                        <div className='p-2 rounded-lg hover:bg-black'>
                            <MdOutlineFormatUnderlined />
                        </div>
                    </div>
                    <div id="textAlign" className='flex flex-1 px-6 py-3 rounded-xl text-xl items-center bg-[#2d2d33] justify-between'>
                        <div className='p-2 rounded-lg hover:bg-black'>
                            <FaAlignLeft />
                        </div>
                        <div className='active text-blue-600 bg-black p-2 rounded-lg'>
                            <FaAlignCenter />
                        </div>
                        <div className='p-2 rounded-lg hover:bg-black'>
                            <FaAlignRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>Extensions</div>
                <div className='flex bg-[#2d2d33] rounded-xl p-3 gap-2 items-center'>
                    <img src="https://i.pravatar.cc/300" height={25} width={25} alt=""  className='rounded-full'/>
                    <div className='flex-1'>Motion Bro</div>
                    <FaAngleRight />
                </div>
                <div className='flex bg-[#2d2d33] rounded-xl p-3 gap-2 items-center'>
                    <img src="https://i.pravatar.cc/300" height={25} width={25} alt=""  className='rounded-full'/>
                    <div className='flex-1'>Motion Factory</div>
                    <FaAngleRight />
                </div>
            </div>
        </div>

    </>
}