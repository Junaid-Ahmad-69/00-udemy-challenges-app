import React, {useState} from 'react'
import TipInput from "../TipInput/TipInput";
import TipSelectOption from "../TipSelectOptions/TipSelectOption";
import TipOutPut from "../TipOutPut/TipOutPut";
import TipResetButton from "../TipResetButton/TipResetButton";

const TipCalculator = () => {
    const [bill, setBill] = useState("")
    const [percent1, setPercent1] = useState("");
    const [percent2, setPercent2] = useState("");
    const tip = bill * ((percent1 + percent2) / 2 / 100);
    return (
        <>
            <TipInput bill={bill} setBill={setBill}/>
            <TipSelectOption percent={percent1} setPercent={setPercent1}>How did you like the service?</TipSelectOption>
            <TipSelectOption percent={percent2} setPercent={setPercent2}>How did your friend like the
                service?</TipSelectOption>
            <TipOutPut tip={tip} bill={bill}/>
            <TipResetButton/>
        </>
    )
}

export default TipCalculator
