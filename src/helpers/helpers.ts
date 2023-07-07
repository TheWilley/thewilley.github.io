import { request } from "https";
import configuration from "../config";
import Stencil from 'stencil-qs';
import { callbackify } from "util";

/**
 * Converts a date string to a reader friendly format
 * @param date The date to convert
 * @returns The converted date
 */
const convertDateAndTime = (date: string) => {
    const dateString = date;
    const dateObj = new Date(dateString);

    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2); // Adding 1 to the month since it's zero-based
    const day = ('0' + dateObj.getDate()).slice(-2);
    const hours = ('0' + dateObj.getHours()).slice(-2);
    const minutes = ('0' + dateObj.getMinutes()).slice(-2);

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDate
}

/**
 * Converts text to a URI friendly URL
 * @param value The text to convert
 * @returns The URL
 */
const convertToURI = (value: string) => {
    return value
        .trim()
        .toLowerCase()
        .replace(/[\W_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const getRepos = async (callback: (repos: Repo[] | null) => void) => {
    const response = await (await fetch(`https://api.github.com/users/${configuration.github_username}/repos`)).json();
    console.log(response)
    callback(response)

}

const getSinglePost = async (callback: (post: Post | null) => void, id: number) => {
    const query = Stencil.stringify({
        fields: ["title", "contents", "updatedAt", "publishedAt"],
        populate: ['thumbnail'],
        sort: ["id:desc"],
    });

    const response = await (await fetch(`${configuration.endpoint_url}/api/blog-posts/${id}?${query}`)).json();
    callback(response)
}

const getPosts = async (callback: (posts: Posts | null) => void) => {
    const query = Stencil.stringify({
        fields: ["title", "contents", "updatedAt", "publishedAt"],
        populate: ['thumbnail'],
        sort: ["id:desc"],
    });

    const response = await (await fetch(`${configuration.endpoint_url}/api/blog-posts?${query}`)).json();
    callback(response)
}

const getTimeline = async (callback: (posts: Timeline | null) => void) => {
    const response = await (await fetch(`${configuration.endpoint_url}/api/timeline`)).json();
    callback(response)
}

export { convertDateAndTime, convertToURI, getRepos, getPosts, getTimeline, getSinglePost }