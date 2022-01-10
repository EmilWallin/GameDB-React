import React from "react";
import axios from "axios";

const FetchToken = async () => {
    const id = process.env.REACT_APP_ID;
    const secret = process.env.REACT_APP_SECRET;
    let obj;
    await axios.post
    (`https://id.twitch.tv/oauth2/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`)
    .then(data => obj = data.data);
    return obj;
}

const FetchGamesList = async (token, searchTerm) => {
    if(searchTerm) {
        return axios({
            url: "http://127.0.0.1:8080/https://api.igdb.com/v4/search",
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Client-ID": process.env.REACT_APP_ID,
                "Authorization": `Bearer ${token}`,
            },
            data: `search "${searchTerm}"; 
            fields game.total_rating,game.total_rating_count,game.cover.*,game.name,game.platforms,game.release_dates;
            where game.total_rating > 0;
            limit 25;`
          })
            .catch(err => {
                console.error(err);
            });
    } else {
        return axios({
            url: "http://127.0.0.1:8080/https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Client-ID": process.env.REACT_APP_ID,
                "Authorization": `Bearer ${token}`,
            },
            data: `fields total_rating,total_rating_count,cover.url,name,platforms,release_dates; 
            sort total_rating desc; 
            where total_rating > 90 & total_rating_count > 20; 
            limit 25;`
          })
            .catch(err => {
                console.error(err);
            });
    }

}

export {FetchToken, FetchGamesList};

// export const FetchCoverArt = async (token, gameID) => {
//     axios({
//         url: "https://api.igdb.com/v4/covers",
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Client-ID': process.env.REACT_APP_ID,
//             'Authorization': `Bearer ${token}`,
//         },
//         data: "fields game, url;"
//       })
//         .then(response => {
//             return response;
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }