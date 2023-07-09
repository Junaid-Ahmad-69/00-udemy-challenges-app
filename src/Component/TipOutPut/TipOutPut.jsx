import React from 'react'

const TipOutPut = ({bill, tip}) => {
    return (
        <h1>
            You pay ${bill + tip} (${bill} + ${tip} tip)
        </h1>
    )
}

export default TipOutPut
