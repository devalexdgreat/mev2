"use client";

import Image from "next/image";
import delIcon from '@/public/del.png';
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
    const router = useRouter();
    const removePjx = async () => {
        const confirmed = confirm("Are you sure, you want to delete Project?");

        if (confirmed) {
            const res = await fetch(`https://devalexdgreat.vercel.app/api/projects?id=${id}`, {
                method: "DELETE",
            });

            if(res.ok) {
                router.push("/Admin");
                router.refresh();
            }
            
        }
    };

    return (
        <button onClick={removePjx} className="bg-red-600 hover:bg-red-500 h-8 w-8 flex items-center 
        justify-center rounded-full">
            <Image src={delIcon} alt="" className="h-4/6 w-8/12"/>
        </button>
    );
}