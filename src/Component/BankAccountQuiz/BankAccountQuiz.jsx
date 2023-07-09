import React, {useReducer} from 'react'


const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
}

const newBalance = 500;

function reducer(state, action) {
    if (!state.isActive && action.type !== "openAccount") return state
    switch (action.type) {
        case "openAccount":
            return {
                ...state,
                balance: 500,
                isActive: true,
            }
        case "deposit":
            return {
                ...state, balance: state.balance + action.payload,
            }
        case "withdraw":
            return {
                ...state, balance: state.balance - action.payload,
            }
        case "requestLoan":
            if (state.loan > 0) return state
            return {
                ...state,
                loan: action.payload,
                balance: state.balance + action.payload,
            }
        case "payLoan":
            return {
                ...state,
                balance: state.balance - state.loan,
                loan: 0,
            }
        case "closeAccount":
            if (state.balance !==0 || state.loan > 0) return state
                return {
                    ...initialState,
                    isActive: false,
                }
        default:
            throw new Error("Invalid active")
    }
}

const BankAccountQuiz = () => {
    const [{balance, loan, isActive}, dispatch] = useReducer(reducer, initialState)
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <h1>useReducer Bank Account</h1>
            <p>Balance {balance}</p>
            <p>Loan {loan}</p>
            <p>
                <button onClick={() => dispatch({type: "openAccount"})} disabled={isActive}>
                    Open Account
                </button>
            </p>
            <p>
                <button onClick={() => dispatch({type: "deposit", payload: 150})} disabled={!isActive}>
                    Deposit 150
                </button>
            </p>
            <p>
                <button onClick={() => dispatch({type: "withdraw", payload: 50})} disabled={!isActive}>
                    WithDraw 50
                </button>
            </p>
            <p>
                <button onClick={() => dispatch({type: "requestLoan", payload: 5000})} disabled={!isActive}>
                    Request a Loan of 5000
                </button>
            </p>
            <p>
                <button onClick={() => dispatch({type: "payLoan"})} disabled={!isActive}>
                    Pay loan
                </button>
            </p>
            <p>
                <button onClick={() => dispatch({type: "closeAccount"})} disabled={!isActive}>
                    Close Account
                </button>
            </p>

        </div>
    )
}

export default BankAccountQuiz
