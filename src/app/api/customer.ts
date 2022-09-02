export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: string;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}
