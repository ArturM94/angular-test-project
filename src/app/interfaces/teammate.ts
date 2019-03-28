export interface Teammate {
    results?: (ResultsEntity)[] | null;
}

export interface ResultsEntity {
    id: Id;
    name: Name;
    email: string;
    phone: string;
    location: Location;
    picture: Picture;
}

export interface Id {
    value: string;
}

export interface Name {
    first: string;
    last: string;
}

export interface Location {
    city: string;
    state: string;
    timezone: Timezone;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Picture {
    large: string;
}
