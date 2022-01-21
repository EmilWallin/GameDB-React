import React from "react";

export type Token = {
    access_token: string
    expires_in: number
    token_type: string
}

export type Game = {
    name: string,
    summary: string,
    total_rating: number,
    release_dates: [{human: string}],
    platforms: [{abbreviation: string, alternative_name: string, name: string}],
    genres: [{name: string}],
    id: number,
    cover: {url: string},
    slug: string,
}

export type GameProp = {
    game: {
        name: string,
        summary: string,
        total_rating: number,
        release_dates: [{human: string}],
        platforms: [{abbreviation: string, alternative_name: string, name: string}],
        genres: [{name: string}],
        id: number,
        cover: {url: string},
        slug: string,
    }
}