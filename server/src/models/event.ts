import {IEvent} from "../types/event";
import {model, Schema} from "mongoose";

const eventSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        elapsed: {
            type: Boolean,
            required: true,
        }
    }
)

export default model<IEvent>("Event", eventSchema);
