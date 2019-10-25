import DateTimePicker from "react-widgets/lib/DateTimePicker";
import React from "react";

export const renderDateTimePicker = ({input: {onChange, value}, showTime}) => {
    return (
        <DateTimePicker>
            onChange={onChange}
            format="DD MMM YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
        </DateTimePicker>)
}
