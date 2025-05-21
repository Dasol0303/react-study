import { useState } from "react"; // export { useState }

function State02() {

    //let v = [] {key:value}
    //JSON -> javascript Object

    let text = ""; //문자형 변수
    let textArr = []; //배열변수
    for(let i=0; i<5; i++) {
        text += "<p>안녕하세요~</p>";
        textArr.push(<p>안녕하세요~</p>);
    }

    let numArr = [1,2,3,4,5]; //숫자 배열   5개짜리 갯수활용 목적

    let msgArr = ["안녕", "밥먹었니", "졸리니", "집에가고싶니"];

    let [colorArr, setColorArr] = useState(["빨강", "파랑", "노랑", "초록"]);
    let [item, setItem] = useState({name: "핸드크림", price: 9000});

    return (
        <div>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <p>안녕하세요~</p>
            <hr></hr>
            {textArr}
            <hr></hr>
            {text}
            <hr></hr>
            {
                numArr.map( ()=> { 
                    return (
                        <>
                            <p>반갑습니다~</p>
                            <p>하이</p> 
                            {/* 최상위단 1개만 가능! */}
                            <button>버튼</button>
                        </>
                    );
                } )
            }
            <hr></hr>
            {
                msgArr.map( (msg)=> {
                    return (
                        <p>이번 메시지는 {msg}</p>
                    );
                })
            }

            <hr></hr>
            {
                colorArr.map((item)=>{
                    return (
                        <p>색상은 {item}</p>
                    );
                })
            }


        </div>
    );

}

export default State02;