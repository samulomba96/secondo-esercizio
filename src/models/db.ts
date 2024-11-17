import mongoose from "mongoose";

interface IPost {
    titolo: string,
    testo: string,
    dataCreazione: Date,
    attiva: boolean;
}

const postSchema = new mongoose.Schema<IPost>({
    titolo: { type: String, required: true },
    testo: { type: String, required: true },
    dataCreazione: { type: Date, default: Date.now },
    attiva: { type: Boolean, default: true }

});

export const Post = mongoose.model<IPost>("Post", postSchema, "posts");