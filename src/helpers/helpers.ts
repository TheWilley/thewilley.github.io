import configuration from "../config";
import Stencil from 'stencil-qs';

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
 * Gets all respos and runs a callback function with the return value
 * @param callback The callback function to run
 */
const getRepos = async (callback: (repos: Repo[] | null) => void) => {
    const response = await (await fetch(`https://api.github.com/users/${configuration.github_username}/repos`)).json().catch(console.error)
    callback(response)

}

/**
 * Gets a single post and runs a callback function with the return value
 * @param callback The callback function to run
 */
const getSinglePost = async (callback: (post: Posts | null) => void, id: string | undefined) => {
    const query = Stencil.stringify({
        fields: ["title", "contents", "updatedAt", "publishedAt", "slug"],
        populate: ['thumbnail'],
        filters: {
            // TODO: Properly fix this
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            slug: {
                $eq: id
            }
        },
        sort: ["id:desc"],
    });

    const response = await (await fetch(`${configuration.endpoint_url}/api/blog-posts?${query}`)).json().catch(console.error)
    callback(response)
}

/**
 * Gets all posts and runs a callback function with the return value
 * @param callback The callback function to run
 */
const getPosts = async (callback: (posts: Posts | null) => void) => {
    const query = Stencil.stringify({
        fields: ["title", "contents", "updatedAt", "publishedAt", "slug"],
        populate: ['thumbnail'],
        sort: ["id:desc"],
    });

    const response = await (await fetch(`${configuration.endpoint_url}/api/blog-posts?${query}`)).json().catch(console.error);
    callback(response)
}

/**
 * Gets the timeline
 * @param callback he callback function to run
 */
const getTimeline = async (callback: (posts: Timeline | null) => void) => {
    const response = await (await fetch(`${configuration.endpoint_url}/api/timeline`)).json().catch(console.error)
    callback(response)
}

export { convertDateAndTime, getRepos, getPosts, getTimeline, getSinglePost }