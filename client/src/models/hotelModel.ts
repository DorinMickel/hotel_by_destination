export interface Hotel {
    id: number,
    city: string,
    hotelName: string,
    hotelImg: string, 
    hotelDescription: string
}

export interface HotelsServerList {
    previous: {
        page: number,
        limit: number
    },
    next: {
        page: number,
        limit: number
    },
    results: [Hotel]
}

export interface HotelsListPage {
    nextPage?: number,
    currentPage: number,
    hotelsListResults: Hotel[]
}