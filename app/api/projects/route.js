import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name, desc, stack, demo, imgurl,} = await request.json();

    await connectMongoDB();
    const newPjx = await Project.create({name, desc, stack, demo, imgurl,});
    return NextResponse.json({ message: "Project Added" }, { status: 201 }, { data: newPjx });
}

export async function GET() {
    await connectMongoDB();
    const projects = await Project.find();
    return NextResponse.json( projects );
}