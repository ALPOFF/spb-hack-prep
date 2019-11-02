import React from 'react'

const MyCustomInput = (props) => {
    return (
        <div className="tasks">
            <ul onChange={e => props.input.onChange(e)}>
                {props.input.value.address}
            </ul>
        </div>
    )
};

export default MyCustomInput
