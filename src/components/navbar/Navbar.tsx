import Avatar from "../avatar/Avatar";

export default function Navbar() {
    return <>
        <div className="flex items-center p-3 gap-4">
            <Avatar src="https://avatars.githubusercontent.com/u/56132780?v=4"  className="hidden md:block rounded-full"/>
            <div className="flex gap-2 mr-48">
                <Avatar src="https://avatars.githubusercontent.com/u/56132780?v=4" />
                <div className="flex flex-col items-start justify-center ">
                    <span className="text-lg leading-tight ">Amir Moradi</span>
                    <span className="text-sm leading-tight text-gray-400">UIUX designer</span>
                </div>
            </div>
            <div className="text-gray-400 flex gap-2">
                <span>Amir /</span>
                <select name="project" id="pname" className="text-white bg-black outline-none">
                    <option value="yp" >Youtube Project</option>
                    <option value="yp" >Facebook Project</option>
                    <option value="yp" >Instagram Project</option>
                </select>
            </div>
        </div>
    </>
}