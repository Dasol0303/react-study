import Box from "./Box";
import { useState } from "react";

function Props02(){

    //데이터 변경 -> 변경된 데이터가 유지 -> 화면에 표시
    //재렌더링에서도 데이텉 유지
    //상태변수 (state)
    // let titleArr = ['아침', '점심', '저녁', '야식'];
    // let contentArr = ['시리얼', '햄버거', '삼겹살', '치킨...용가리 치킨!!'];
    let [titleArr, setTitleArr] = useState(['아침', '점심', '저녁', '야식']);
    let [contentArr, setContentArr] = useState(['시리얼', '햄버거', '삼겹살', '치킨...용가리 치킨!!']);

    return (
        <div>
            <p></p>

            <button onClick={()=>{
                //setTitleArr(['아침', '점심', '저녁', '야식', '추가야식']);
                //setContentArr(['시리얼', '햄버거', '삼겹살', '치킨...용가리 치킨!!', '곱창 질겨요...']);
                /*
                titleArr.push('추가야식');
                contentArr.push('곱창');
                console.log(titleArr);
                console.log(contentArr);

                setTitleArr(titleArr);
                setContentArr(contentArr);
                */

                //let temp = titleArr; //얕은복사
                
                //let temp = [...titleArr, '추가야식']; //한번 분해하는 것! 깊은복사
                
                //만약~ 추가조건이~ 최대 6개까지만 가능하다면!
                if(titleArr.length < 6) {

                    let temp = [...titleArr];
                    temp.push('추가야식');
                    setTitleArr(temp); //새로운 주소의 배열 -> state변수 값 바뀜 인식 -> 재렌더링

                    contentArr.push('곱창 느끼햄');
                    // let temp2 = [...contentArr];
                    // temp2.push('곱창 맛없졍');
                    // setContentArr(temp2);

                    //얕은복사(주소만) 깊은복사(값까지 통째로)
                }

            }}>컴포넌트추가</button>
            {/* Box 컴포넌트에 매개변수 전달 */}
            {/* 데이터를 기반으로 반복하는 형태로 사용 */}
            {
                titleArr.map((item, index)=>{
                    //return <Box title={item} content={contentArr[index]}/>;
                    return <Box title={titleArr[index]} content={contentArr[index]}/>;
                })
            }

            {/* <Box title={titleArr[0]} content={contentArr[0]}/> 
            <Box title={titleArr[1]} content={contentArr[1]}/>
            <Box title={titleArr[2]} content={contentArr[2]}/>
            <Box title={titleArr[3]} content={contentArr[3]}/> */}
            
            {/* <Box title='아침' content='시리얼'/> 
            <Box title='점심' content='햄버거'/>
            <Box title='저녁' content='삼겹살'/>
            <Box title='야식' content='치킨...? 살쪄요..'/> */}
        </div>
    );
}


export default Props02;