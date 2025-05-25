import './Practice05.css';
import { useState } from 'react';
import ConBox from './ConBox';



function Practice05() {
    // let count = 0;
    let [title, setTitle] = useState (['오늘', '내일', '어제' ]);
    let [countLike, setCountLike] = useState ([0, 0, 0]);
    let [countHate, setCountHate] = useState ([0, 0, 0]);

    //input 값을 저장할 변수
    let [inputText, setInputText] = useState('');
    let conbox = false;

    return (
        // map O  좋아요 O  삭제 O    내용보여주기    등록하기 O(컨닝함ㅠ)

        <div>
            <div className='header-main'>
                <h4>Blog Header</h4>
                <h2>React Study</h2>
            </div>

            <input type='text' id='input news' value={inputText} onChange={(event)=>{
//선생님 죄송합니다.. 이 부분 봐도 이해가 잘 안되어서 수업시간에 만들었던거 가져왔어요ㅠㅠ
                    console.log(event.target.value); //입력값이 어떤건지 정확하게 표기해줌
                    setInputText(event.target.value); //State변수에 저장

                }}></input>
            <button onClick={()=>{
                inputText = inputText.trim();

                if(inputText == ''){
                    const deletedIndex = title.length;
                    title.splice(deletedIndex, 1);

                    alert('공백은 안됩니다~');
                    console.log(title);
                }

                //title.push
                let temp = [...title];
                temp.push(inputText);
                setTitle(temp);

                setInputText('');//공백

            }}>등록</button>
            

        {
        title.map((item, index)=>{
            
            return (
                <div>
                    <div className='content'>
                <h5 onClick={()=>{
                    conbox = true;


                    }}>{item}의 뉴스
                    <span onClick={()=>{
                        countHate[index] = countHate[index] + 1;
                        setCountLike(countHate[index]);

                        console.log('눌림');
                        console.log(countHate[index]);
                    }}>😍</span><span>{countHate[index]}</span></h5>

                    <span>내용</span>
                    <br></br>
                    <button onClick={()=>{
                        let temp = [...title];
                        temp.splice(title[index], 1);
                        setTitle(temp);
                        console.log('눌림');
                    }}>삭제</button>
                </div>

            </div>

            );
        })
    }

    {
        //참이면 실행 false면 no
        conbox && <ConBox />
    }

        </div>

    );




}

export default Practice05;