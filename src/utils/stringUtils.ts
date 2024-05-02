function convertDatetime(date: string): string {
    if (date.length !== 8) {
        throw new Error("Invalid input length. Expected format: YYYYMMDD");
    }

    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);

    return `${year}-${month}-${day}`;
}

export {convertDatetime}