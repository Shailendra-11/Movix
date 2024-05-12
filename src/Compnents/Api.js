import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzliYmI4OTgwNmFkOTk5OTgwMmZhZmJlMDVhNTU1NCIsInN1YiI6IjY2M2IzNmZmN2U0OWRiYjczNWQ3YjdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7xGkDzVwjBNGBKjyRsIKJo63kx2kJacoggOjJqEdYE"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url , {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};


