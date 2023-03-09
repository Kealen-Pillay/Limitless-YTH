import react, {useEffect, useState} from "react";
import Waves from "../../images/waves.jpg";
import "./EventsScreen.css";
import {IEvent} from "../../type";
import {getEvents} from "../../API";

const EventsScreen = (): JSX.Element => {
    const [events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = (): void => {
        getEvents()
            .then(({data: {upcomingEvents}}: IEvent[] | any) => {
                setEvents(upcomingEvents)
            })
            .catch((err: Error) => console.log(err));
    };

    return (
        <>
            <section>
                <div className="events-container">
                    <img src={Waves} alt={"waves"} className="waves-img"/>
                    <p className="section-header">
                        Upcoming Events
                    </p>
                </div>
            </section>
        </>
    );
};

export default EventsScreen;
