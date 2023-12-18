import EditPjxForm from "@/components/EditPjxForm";

const getPjxById = async (id) => {
    try {
        const res = await fetch(`https://devalexdgreat.vercel.app/api/projects/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch project");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    } 
}

export default async function Editpjx({ params }) {
    const { id } = params;
    const { project } = await getPjxById(id);
    const { name, desc, stack, demo, imgurl } = project;
    console.log("hello chisom i am: ", project);
    
    return (
        <div className="w-full">
            <div className="w-11/12 md:w-10/12 mx-auto my-32">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl">Edit Project</h1>
                </div>
                <EditPjxForm id={id} name={name} desc={desc} stack={stack} demo={demo} imgurl={imgurl} />
            </div>
        </div>
    );
}