import {EventProps} from "../../type";
import "../EventItem/EventItem.css";

const EventItem = ({event}: EventProps): JSX.Element => {

    const formatDate = (eventDate: Date): string => {
        return new Date(eventDate).toLocaleDateString('en-us',
            {
                weekday:"long",
                year:"numeric",
                month:"short",
                day:"numeric"
            }
        )
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
