import Box from "./Box";
import { useState } from "react";


function Practice04() {

    let [boxArr, setBoxArr] = useState([<Box/>]);
    let [arr, setArr] = useState([1,1]);

    return (
        <div>
            <button onClick={()=>{
                console.log('추가');

                // let temp = [...boxArr];
                // temp.push(<Box/>);
                // setBoxArr(temp);

                //arr 배열에다가 아무 값이나 추가 -> arr 길이만큼 반복하면서 box를 그림
                let temp = [...arr, 0];
                setArr(temp);

            }}>추가</button>

            {/* <div style={{display:'flex'}}>{boxArr}</div> */}

            {
                //arr 배열의 갯수만큼 반복
                arr.map(()=>{
                    return <Box/>;
                })
            }

        </div>
    );

}

export default Practice04;