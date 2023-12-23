export interface IEvent {
    category: string;
    date: string;
    description: string;
    id: number;
    location: string;
    organizer: string;
    petsAllowed: boolean;
    time: string;
    title: string;
}

export interface IEventProps {
    event: IEvent
}

export interface IPageProps {
    page: number;
  }

export interface IEventRaw {
    status: number;
    statusText: string;
}

export interface IEventHeader {
    "cache-control": string;
    "content-type": string;
    expires: string;
    link: string;
    pragma: string;
    "x-total-count": string;
  }
