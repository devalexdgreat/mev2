import Details from '@/components/Details';

const getPjxById = async (id) => {
    try {
        const res = await fetch(`https://devalexdgreat.vercel.app/api/projects/${id}`, {
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

const getPjxs = async () => {
    try {
        const res = await fetch(`https://devalexdgreat.vercel.app/api/projects`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Projects");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function Projects({ params }) {
    const { id } = params;
    
    const projects = await getPjxs();
    console.log("heeloo", projects);

    const { project } = await getPjxById(id);
    console.log("heeloo", project);

    var index = projects.findIndex(x => x._id === project._id);
    var passedIndex;
    if(index === project.length) {
        passedIndex = -1;
    } else {
        passedIndex = index;
    }

    return (
        <div className="w-full overflow-hidden">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <Details data={project} pjxs={projects} idex={passedIndex} />
                </div>
        </div>
    );
}