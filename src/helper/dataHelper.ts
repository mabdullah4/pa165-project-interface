import dayjs from "dayjs";

export const timeFormat = (time: Date) => dayjs(time).format("hh:mm A");
export const dateFormat = (date: Date) => dayjs(date).format("DD.MM.YYYY");
