import { API_KEY } from "./Constants/constants"

export const Trending = `trending/all/day?api_key=${API_KEY}`
export const Actions = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const Adventure = `discover/movie?api_key=${API_KEY}&with_genres=12`
export const Animation = `discover/movie?api_key=${API_KEY}&with_genres=16`
export const Horror = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const Crime = `discover/movie?api_key=${API_KEY}&with_genres=80`
export const Thriller = `discover/movie?api_key=${API_KEY}&with_genres=53`
export const Drama = `discover/movie?api_key=${API_KEY}&with_genres=18`