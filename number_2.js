const timePassed = (dateTime, otherDateTime) => {
    const getStatement = (difference, time) => {
        const floorDiff = Math.trunc(difference);
        if (floorDiff >= 0) {
            if (time === "second" && difference < 3) {
                return "just now";
            }
            return floorDiff > 1 ? `${floorDiff} ${time}s ago` : `${floorDiff} ${time} ago`;
        } else if (floorDiff < 0) {
            const absVal = Math.abs(floorDiff);
            if (time === "second" && difference < 3) {
                return "a while";
            }
            return floorDiff > 1 ? `in ${absVal} ${time}s` : `in ${absVal} ${time}`;
        }
    }

    const difference = dateTime - otherDateTime;
    const second = difference / 1000;
    const minute = second / 60;
    const hour = minute / 60;
    const day = hour / 24;
    const week = day / 7;
    const month = day / 30;
    const year = day / 365;




    const time = [year, month, week, day, hour, minute, second];
    const timeStr = ["year", "month", "week", "day", "hour", "minute", "second"];

    const notZero = element => Math.abs(element) >= 1;

    const result = time.findIndex(notZero);


    return getStatement(time[result], timeStr[result]);

}



const test = () => {
    // const past = new Date('Oct 18 2021 10:40:58')
    // const now = new Date('Oct 18 2021 11:41:59')
    const past = new Date('Oct 18 2021 10:40:58:12');
    const now = new Date('Oct 19 2022 12:41:58:13');

    // const past = new Date('2021-10-18T06:31:10.633Z')
    // const now = new Date('2021-10-18T06:31:14.633Z')

    // console.log(past)

    console.log(timePassed(now, past));

    const now2 = new Date('Oct 18 2021 10:40:58:12');
    const future = new Date('Oct 16 2022 12:41:58:13');

    // const past = new Date('2021-10-18T06:31:10.633Z')
    // const now = new Date('2021-10-18T06:31:14.633Z')

    // console.log(past)

    console.log(timePassed(now2, future));
}
test();