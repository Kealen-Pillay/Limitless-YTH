import {useEffect, useState} from "react";
import Waves from "../../images/waves.jpg";
import "./EventsScreen.css";
import {IEvent} from "../../type";
import {getEvents} from "../../API";
import EventItem from "../EventItem/EventItem";

const EventsScreen = (): JSX.Element => {
    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = (): void => {
        getEvents()
            .then(({data: {events}}: IEvent[] | any) => {
                setEvents(events)
            })
            .catch((err: Error) => console.log(err));
    };

    return (
        <>
            <section id="events">
                <div className="events-container">
                    <img src={Waves} alt={"waves"}/>
                    <p className="events-header">
                        Upcoming Events
                    </p>
                    <div className="events-list">
                        {events && events.map((event: IEvent) => {
                            return (
                                <EventItem key={event._id} event={event}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventsScreen;
