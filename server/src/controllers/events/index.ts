import {Request, Response} from "express";
import {IEvent} from "../../types/event";
import Event from "../../models/event";

const getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const elapsedEvents: IEvent[] = [];
        const orderedEvents: IEvent[] = [];
        const events: IEvent[] = await Event.find();
        // events && events.map((event: IEvent) => {
        //     event.elapsed ? elapsedEvents.push(event) : orderedEvents.push(event);
        // })
        // events.sort((a: IEvent, b: IEvent) => a.date.getTime() - b.date.getTime());
        res.status(200).json({ events });
    }
    catch (error) {
        throw error;
    }
}

export {getEvents};
