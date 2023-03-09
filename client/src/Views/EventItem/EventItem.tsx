import {EventProps} from "../../type";

const EventItem = ({event}: EventProps): JSX.Element => {
    return (
        <>
            <p>
                {event.name}
            </p>
        </>
    )
}

export default EventItem;
