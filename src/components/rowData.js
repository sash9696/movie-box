import requests from '../requests/Requests';

export const rowData = [
    {
        id: 1,
        title: "MOVIE BOX HITS",
        fetchUrl: requests.fetchNetflixOriginals,
        isLargeRow: true,
    },
    {
        id: 2,
        title: "Action Movies",
        fetchUrl: requests.fetchActionMovies,
    },
    {
        id: 3,
        title: "Comedy Movies",
        fetchUrl: requests.fetchComedyMovies,
    },
    {
        id: 4,
        title: "Horror Movies",
        fetchUrl: requests.fetchHorrorMovies,
    },
    {
        id: 5,
        title: "Romance Movies",
        fetchUrl: requests.fetchHofetchRomanceMoviesrrorMovies,
    },
    {
        id: 6,
        title: "Documentaries",
        fetchUrl: requests.fetchDocumentaries,
    },
]