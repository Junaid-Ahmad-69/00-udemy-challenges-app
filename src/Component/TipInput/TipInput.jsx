import React from 'react'

const TipInput = ({bill, setBill}) => {
    return (
        <>
            <label>How much was the bill</label>
            <input type="number" value={bill} onChange={e => setBill(+(e.target.value))}/>
        </>
    )
}

export default TipInput
