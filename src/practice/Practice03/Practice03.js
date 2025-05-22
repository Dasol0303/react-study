import { useState } from "react";
import Practice03_2 from './Practice03_2';

function Practice03() {

    let [titleArr, setTitleArr] = useState(['하나', '둘', '셋', '넷', '다섯']);
    let [contentArr, setContentArr] = useState(['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯']);


    return (
            <>
                {/* 배열활용하고 싶다!! */}
                {/* <Practice03_2 title={'하나'} content={'내용하나'}/>
                <Practice03_2 title={'둘'} content={'내용둘'}/>
                <Practice03_2 title={'셋'} content={'내용셋'}/>
                <Practice03_2 title={'넷'} content={'내용넷'}/>
                <Practice03_2 title={'다섯'} content={'내용다섯'}/> */}

                {
                titleArr.map((item, index)=>{
                    return <Practice03_2 title={titleArr[index]} content={contentArr[index]}/>;
                })
            }

            </>
        );
}


export default Practice03;