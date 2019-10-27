import React from 'react'

const MyCustomInput = (props) => {
    return (
        <div className="tasks">
            <ul onChange={e => props.input.onChange(e)}>
                {props.input.value.map(v => <li>{v.address}</li>)}
            </ul>
        </div>
    )
}

export default MyCustomInput
