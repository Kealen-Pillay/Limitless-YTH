interface IEvent {
    name: string,
    date: string,
    elapsed: boolean,
}

interface EventProps {
    event: IEvent,
}

type ApiDataType = {
    message: string,
    status: string,
    events: IEvent[],
    event?: IEvent,
}

export {IEvent, EventProps, ApiDataType};
