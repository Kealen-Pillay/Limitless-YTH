/**
 * ******************** Event Types ********************
 */
interface IEvent {
    _id?: string,
    name: string,
    date: string,
    elapsed: boolean,
}

interface EventProps {
    event: IEvent,
}

type ApiEventDataType = {
    message: string,
    status: string,
    events: IEvent[],
    event?: IEvent,
}

/**
 * ******************** About Types ********************
 */

interface IAbout {
    body: string,
    verse: string,
    scripture: string
}

type ApiAboutDataType = {
    message: string,
    status: string,
    about?: IAbout
}

export {IEvent, EventProps, ApiEventDataType, IAbout, ApiAboutDataType};
