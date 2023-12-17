import Image from "next/image";
import galleryIcon from "@/public/gallery.png";

export default function EditPjxForm() {
    return (
        <div className="w-full">
            <div className="w-full md:w-6/12">
                <form className="w-full flex flex-col gap-6">
                    <input type="text" placeholder="Project Name" required className="bg-transparent 
                    py-2 ps-3 w-full border"/>
                    <input type="text" placeholder="Project Description" required className="bg-transparent 
                    py-2 ps-3 w-full border"/>
                    <input type="text" placeholder="Tech Stack E.g: Html, Css, JS" required className="bg-transparent 
                    py-2 ps-3 w-full border"/>
                    <input type="text" placeholder="Demo (Link) E.g: https://www.people.com" required className="bg-transparent 
                    py-2 ps-3 w-full border"/>
                    <button className="w-full border bg-transparent py-2 flex items-center gap-3 justify-center">
                        <div className="h-6 w-6">
                            <Image src={galleryIcon} alt="" className="h-full w-full" />
                        </div>
                        <span>Image</span>
                    </button>
                    <input type="submit" value="Update" className="bg-green-500 hover:bg-green-600 text-white 
                    py-2 w-full md:w-4/12 rounded-lg font-bold" />
                </form>
            </div>
        </div>
    );
}