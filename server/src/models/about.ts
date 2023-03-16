import {model, Schema} from "mongoose";
import {IAbout} from "../types/about";

const aboutSchema:Schema =  new Schema(
    {
        body: {
            type: String,
            required: true,
        },
        verse: {
            type: String,
            required: true,
        },
        scripture: {
            type: String,
            required: true,
        }
    }
)

export default model<IAbout>("About", aboutSchema);