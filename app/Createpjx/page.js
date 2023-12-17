"use client";
import Image from "next/image";
import galleryIcon from "@/public/gallery.png";
import { CldUploadButton } from 'next-cloudinary';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Createpjx() {

    const [imgurl, setImgurl] = useState("");
    const [publicId, setPublicId] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [stack, setStack] = useState("");
    const [demo, setDemo] = useState("");

    const router = useRouter();

    const handleImageUpload = (result) => {
        console.log("results: ", result);
        const info = result.info;

        if('secure_url' in info && 'public_id' in info) {
            const url = info.secure_url;
            const public_id = info.public_id;
            setImgurl(url);
            setPublicId(public_id);
            console.log("url: ", url);
            console.log("Public Id: ", public_id);
        }
    }

    const removeImage = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('api/removeimg', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ publicId }),
            });

            if(res.ok) {
                setImgurl("");
                setPublicId("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!name || !desc || !stack || !demo) {
            alert('This fields are required!');
            return;
        }

        try {
            const res = await fetch('api/projects', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, desc, stack, demo, imgurl, }),
            });

            if (res.ok) {
                const data = await res.json();
                console.log("Items Created: ", data);
                router.push('/Admin');
                router.refresh();
            } else {
                throw new Error('Failed to create an Item!');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <div className="w-11/12 md:w-10/12 mx-auto my-32">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl">Create New Project</h1>
                </div>

                <div className="w-full md:w-6/12">
                    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                        <input 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text" placeholder="Project Name" className="bg-transparent 
                        py-2 ps-3 w-full border"/>

                        <input 
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        type="text" placeholder="Project Description" className="bg-transparent 
                        py-2 ps-3 w-full border"/>

                        <input 
                        onChange={(e) => setStack(e.target.value)}
                        value={stack}
                        type="text" placeholder="Tech Stack E.g: Html, Css, JS" className="bg-transparent 
                        py-2 ps-3 w-full border"/>

                        <input 
                        onChange={(e) => setDemo(e.target.value)}
                        value={demo}
                        type="text" placeholder="Demo (Link) E.g: https://www.people.com" className="bg-transparent 
                        py-2 ps-3 w-full border"/>
                        {/* <button className="w-full border bg-transparent py-2 ">
                            <div className="h-6 w-6">
                                <Image src={galleryIcon} alt="" className="h-full w-full" />
                            </div>
                            <span>Image</span>
                        </button> */}
                        <CldUploadButton uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} className={`border bg-transparent h-48 relative 
                        grid place-items-center ${imgurl && "pointer-events-none"}`} 
                        onUpload={handleImageUpload}>
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

                        {publicId && (
                            <button onClick={removeImage} className="bg-red-600 text-white rounded-lg py-2 px-4 font-bold">
                                Remove Image
                            </button>
                        )}

                        <input type="submit" value="Create" className="bg-green-500 hover:bg-green-600 text-white 
                        py-2 w-full md:w-4/12 rounded-lg font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
}