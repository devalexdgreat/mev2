import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        name: String,
        desc: String,
        stack: String,
        demo: String,
        imgurl: String
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;