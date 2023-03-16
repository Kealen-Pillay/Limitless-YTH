import {Document} from "mongoose";

export interface IAbout extends Document {
    body: string,
    verse: string,
    scripture: string
}