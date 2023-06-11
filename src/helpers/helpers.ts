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

export {convertDateAndTime}