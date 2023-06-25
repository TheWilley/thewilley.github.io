import configuration from "../config";

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

const getRepos = (callback: (repos:  Repo[] | null) => void) => {
    let result: Repo[] | null

    fetch(`https://api.github.com/users/${configuration.github_username}/repos`)
        .then(response => response.text())
        .then(repos => result = JSON.parse(repos))
        .catch(() => result = null)
        .finally(() => {
            callback(result)
        })
}

const getPosts = (callback: (posts: Posts | null ) => void) => {
    let result: Posts | null 

    fetch(`${configuration.endpoint_url}/api/blog-posts?populate=*`)
    .then(data => data.text())
    .then(posts => result = JSON.parse(posts))
    .catch(() => result = null)
    .finally(() => {
        callback(result)
    })
}

export { convertDateAndTime, convertToURI, getRepos, getPosts }