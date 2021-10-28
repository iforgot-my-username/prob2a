const exactOne = (time) => {
    const value = Math.trunc(time)
    return value === 1 ? 1 : 0;
}

const getDifference = (dateTime, otherDateTime) => {
    const difference = dateTime - otherDateTime;

    if (difference > 0) {
        const second = difference / 1000;
        const justNow = second < 12 ? 1 : 0
        const minute = second / 60;
        const oneMinute = exactOne(minute);
        const hour = minute / 60;
        const oneHour = exactOne(hour);
        const day = hour / 24;
        const oneDay = exactOne(day);
        const month = day / 30;
        const oneMonth = exactOne(month);
        const year = month / 12;
        const oneYear = exactOne(year);

        const time = [oneYear, year, oneMonth, month, oneDay, day, oneHour, hour, oneMinute, minute, justNow, second];
        // const time2 = [second, justNow, minute, oneMinute, hour, oneHour, day, oneDay, oneMonth, month, year, oneYear,]
        const timeStr = [
            "just now",
            "$% seconds ago",
            "1 minute ago",
            "$% minutes ago",
            "1 hour ago",
            "$% hours ago",
            "1 day ago",
            "$% days ago",
            "1 month ago",
            "$% months ago",
            "1 year ago",
            "$% years ago"
        ];

        const notZero = (element) => element >= 1;
        const index = time.findIndex(notZero);
        const reverseIndex = (time.length - 1) - index - 1;

        const value = Math.trunc(time[index])
        console.log(reverseIndex, index)
        const statement = timeStr[reverseIndex].replace("$%", value)

        return statement
    }
}


// const past = new Date('Oct 18 2021 10:40:58')
// const now = new Date('Oct 18 2021 11:41:59')
const past = new Date('Oct 18 2021 10:40:58:12')
const now = new Date('Oct 19 2023 12:41:58:13')

// const past = new Date('2021-10-18T06:31:10.633Z')
// const now = new Date('2021-10-18T06:31:14.633Z')

// console.log(past)

console.log(timePassed(now, past));

// const reverseIndex = (index, arrayLength) => {
//     if (index === 0) {
//         return arrayLength - 1 -index
//     } else if (index === arrayLength) {
//         return 0
//     } else {
//         return arrayLength - index - 2
//     }
// }

const reverseIndex = (index, arrayLength) => {
    return arrayLength - 1 - index
}

