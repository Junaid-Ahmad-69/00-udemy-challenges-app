import React from 'react'

const TipSelectOption = ({children, percent, setPercent,}) => {
    return (
        <div>
            <label>{children}</label>
            <select value={percent} onChange={(e) => setPercent(Number(e.target.value))}>
                <option value="0">Dissatisfied</option>
                <option value="5">It was ok</option>
                <option value="10">It was good</option>
                <option value="20">Absolute Amazing</option>
            </select>
        </div>
    )
}

export default TipSelectOption
