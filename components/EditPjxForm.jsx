"use client";
import { extractPublicId } from 'cloudinary-build-url';
import Image from "next/image";
import galleryIcon from "@/public/gallery.png";
import { CldUploadButton } from 'next-cloudinary';
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditPjxForm({ id, name, desc, stack, demo, imgurl }) {

    // const publicId = extractPublicId(
    //     imgurl
    //   )
    // const [imgurl, setImgurl] = useState("");
    const [newImgurl, setNewImgurl] = useState(imgurl);
    const [newName, setNewName] = useState(name);
    const [newDesc, setNewDesc] = useState(desc);
    const [newStack, setNewStack] = useState(stack);
    const [newDemo, setNewDemo] = useState(demo);

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await axios
                .put(`http://localhost:3000/api/projects/${id}`, {
                    newName, newDesc, newStack, newDemo, newImgurl
                })
                .then(function (response) {
                console.log(response);
                router.push("/Admin");
                router.refresh();
                });

            
            
            if (!res.ok) {
                throw new Error("Failed to Update Projects");
            }

            router.push('/Admin');
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <div className="w-full md:w-6/12">
            <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                        <input 
                        onChange={(e) => setNewName(e.target.value)}
                        value={newName}
                        type="text" placeholder="Project Name" className="bg-transparent 
                        py-2 ps-3 w-full border"/>

                        <input 
                        onChange={(e) => setNewDesc(e.target.value)}
                        value={newDesc}
                        type="text" placeholder="Project Description" className="bg-transparent 
                        py-2 ps-3 w-full border"/>

                        <input 
                        onChange={(e) => setNewStack(e.target.value)}
                        value={newStack}
                        type="text" placeholder="Tech Stack E.g: Html, Css, JS" className="bg-transparent 
                        py-2 ps-3 w-full border"/>

                        <input 
                        onChange={(e) => setNewDemo(e.target.value)}
                        value={newDemo}
                        type="text" placeholder="Demo (Link) E.g: https://www.people.com" className="bg-transparent 
                        py-2 ps-3 w-full border"/>
                        
                        <CldUploadButton uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} className={`border bg-transparent h-48 relative 
                        grid place-items-center ${imgurl && "pointer-events-none"}`}>
                            <div className="flex items-center gap-3 justify-center">
                                <div className="h-6 w-6">
                                    <Image src={galleryIcon} alt="" className="h-full w-full" />
                                </div>
                                <span>Image</span>
                            </div>
                            {imgurl && (
                                <Image src={imgurl} fill alt="" className="absolute object-cover 
                                inset-0" />
                            )}
                        </CldUploadButton>

                        <input type="submit" value="Update" className="bg-green-500 hover:bg-green-600 text-white 
                        py-2 w-full md:w-4/12 rounded-lg font-bold" />
                    </form>
            </div>
        </div>
    );
}