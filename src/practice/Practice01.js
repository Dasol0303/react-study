import { useState } from "react";
import './Practice01.css';

function Practice01() {

    const [evenNum, setEvenNum] = useState(0);

    return (
    <div>
        <button onClick={()=>{
            setEvenNum(evenNum + 2);
        }}>짝수출력</button>
        {/* <span style={{color:'red'}}>{evenNum}</span> */}
        <span className="even-red">{evenNum}</span>
    </div>
    );


}

export default Practice01;