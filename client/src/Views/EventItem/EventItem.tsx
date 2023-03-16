import {EventProps} from "../../type";
import "../EventItem/EventItem.css";

const EventItem = ({event}: EventProps): JSX.Element => {
    return (
        <>
            <p className="event">
                {event.name} - {event.date}
            </p>
        </>
    )
}

export default EventItem;
