import EditPjxForm from "@/components/EditPjxForm";

export default function Editpjx() {
    return (
        <div className="w-full">
            <div className="w-11/12 md:w-10/12 mx-auto my-32">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl">Edit Project</h1>
                </div>
                <EditPjxForm />
            </div>
        </div>
    );
}