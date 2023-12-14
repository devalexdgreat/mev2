import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";
export default function GoDownBtn() {
    return(
        <div className="arrStyle place-self-center flex justify-center">
            <span className="h-10 w-10 mx-auto flex justify-center text-green-500">▼</span>
        </div>
    );
}