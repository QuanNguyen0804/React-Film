export interface Film {
    modified: {
        time: string;
    };
    _id: string;
    name: string;
    origin_name: string;
    slug: string;
    year: number;
}

export interface Films {
    status: boolean;
    items: [Film];
    pagination: {
        totalItems: number;
        totalItemsPerPage: number;
        currentPage: number;
        totalPages: number;
    };
}