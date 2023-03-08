import {Request, Response} from "express";
import {IEvent} from "../../types/event";
import Event from "../../models/event";

const getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const events: IEvent[] = await Event.find();
        res.status(200).json({ events });
    }
    catch (error) {
        throw error;
    }
}

export {getEvents};
