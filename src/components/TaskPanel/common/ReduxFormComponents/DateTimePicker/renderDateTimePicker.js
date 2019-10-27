import DateTimePicker from "react-widgets/lib/DateTimePicker";
import React from "react";
import momentLocalizer from "react-widgets-moment"
import 'react-widgets/dist/css/react-widgets.css'
import moment from "moment";
momentLocalizer(moment)



export const renderDateTimePicker = ({input: {onChange, value}, showTime}) => {
    return (
        <DateTimePicker
            onChange={onChange}
            format="DD MMM YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
        />)
}
