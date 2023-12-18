import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;

    const { newName: name, newDesc: desc, newStack: stack, 
        newDemo: demo, newImgurl: imgurl } = await request.json();

    await connectMongoDB();

    await Project.findByIdAndUpdate(id, { name, desc, stack, demo, imgurl });

    return NextResponse.json({ message: "Projects Info Updated!" }, { status: 200 });
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const project = await Project.findOne({_id: id});
    return NextResponse.json({ project }, { status: 200 });
}