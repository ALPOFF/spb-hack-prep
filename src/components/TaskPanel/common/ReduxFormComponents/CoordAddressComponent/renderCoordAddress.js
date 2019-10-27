import React from 'react'

const MyCustomInput = (props) => {
    return (
        <ul onChange={e => props.input.onChange(e)}>
            {props.input.value.map(v => <li>{v.address}</li>)}
        </ul>
    )
}

export default MyCustomInput
