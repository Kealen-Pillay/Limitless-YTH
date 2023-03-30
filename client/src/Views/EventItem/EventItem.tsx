import {EventProps} from "../../type";
import "../EventItem/EventItem.css";

const EventItem = ({event}: EventProps): JSX.Element => {

    const formatDate = (eventDate: Date): string => {
        const date: Date = new Date(eventDate);
        date.setDate(date.getDate() - 1);
        return date.toDateString();
    }

    return (
        <>
            <p className="event">
                {event.name} | {formatDate(event.date)}
            </p>
        </>
    )
}

export default EventItem;
