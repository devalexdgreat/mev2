import Details from '@/components/Details';

const getPjxById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Project");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function Projects({ params }) {
    const { id } = params;
    const { project } = await getPjxById(id);
    console.log("heeloo", project)

    return (
        <div className="w-full overflow-hidden">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <Details data={project}/>
                </div>
        </div>
    );
}