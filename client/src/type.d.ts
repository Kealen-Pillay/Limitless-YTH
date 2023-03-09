interface IEvent {
    name: string,
    date: string,
    elapsed: boolean,
}

type ApiDataType = {
    message: string,
    status: string,
    events: IEvent[],
    event?: IEvent,
}

export {IEvent, ApiDataType};
