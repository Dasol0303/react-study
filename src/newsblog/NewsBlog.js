import './NewsBlog.css';
import { useState } from "react";
import Modal from './Modal';


function NewsBlog() {

    let title = "React Study";
    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
                                    // ['Today news', '어제의 뉴스', '내일의 뉴스']
    let textBoolean = true;
    const [likeCount1, setLikeCount1] = useState(0);
    const [likeCount2, setLikeCount2] = useState(0);
    const [likeCount3, setLikeCount3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState([0,0,0]);

    let[showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    //input 값을 저장할 변수
    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            <div>
                <input type="text" id="input news" value={inputText} onChange={(event)=>{
                    // console.log(event);
                    console.log(event.target.value); //입력값이 어떤건지 정확하게 표기해줌
                    setInputText(event.target.value); //State변수에 저장
                }}></input>
                <button onClick={()=>{
                    //입력된 값을 제목 배열에 추가
                    //입력된 값 : input 요소에서  onChange 가 발생할때 -> inputText state 변수에 저장되어 있음.
                    //제목배열 news 배열변수에 추가 -> 리렌더링 -> news 배열의 갯수만큼 반복(map) 화면에 표시
                    
                    //1)
                    /*
                    //if(inputText.trim() != ''){
                    if(inputText.trim().length > 0){
                        let temp = [...news];
                        temp.push(inputText);
                        setNews(temp);

                        //배열state변수 바꾸는 법 : 배열 복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                        setInputText(''); //공백 -> input value={inputText}
                    } else {
                        alert('공백은 안됩니다~');
                        setInputText('');
                    }
                        */

                    //2)
                    inputText = inputText.trim();

                    //if(inputText.trim().length == 0){
                    if(inputText.length == 0){
                        alert('공백은 안됩니다~');
                        setInputText('');
                        return;
                    }

                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);

                    likeCountArr.push(0);

                    //배열state변수 바꾸는 법 : 배열 복사 -> 값 변경/추가/삭제 -> set함수로 원래 배열에 저장
                    setInputText(''); //공백 -> input value={inputText}


                    /* 내가 만든거
                    if(inputText == ''){
                        const deletedIndex = news.length;
                        temp.splice(deletedIndex, 1);
                        console.log(news);
                        alert('공백은 안됩니다~');
                    }
                        */

                    /* 순수 자바스크립트 스타일(값 입력 후 공백으로 치환)

                    let title = document.getElementById('input_news').value;
                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);

                    document.getElementById('input_news').value = '';
                    */

                }}>등록</button>
            </div>

            {   //map
                news.map((item, index)=>{ //item 값 안에 배열에 있는 거 들어있을거임!!

                    return (

                            <div className='post-list' key={index}>
                                <h4 onClick={()=>{
                                    setShowModal(!showModal);
                                    setSelectedTitle(item);
                                    setSelectedLikeCount(likeCountArr[index]);
                                    }}>{item}
                                <span onClick={(event)=>{
                                    event.stopPropagation();

                                    let temp = [...likeCountArr];
                                    temp[index] += 1;
                                    setLikeCountArr(temp);

                            }}>💖</span>{likeCountArr[index]}</h4>
                                <p>내용 무</p>
                                <button onClick={()=>{
                                    // news.splice(index, 1);
                                    let temp = [...news];
                                    temp.splice(index, 1);
                                    setNews(temp);

                                    likeCountArr.splice(index, 1); 
                                    //좋아요를 삭제하지 않으면 인덱스가 밀림!!

                                    console.log(news);//확인용
                                }}>삭제</button>
                            </div>

                    );
                            
                })
            }

            {
                // showModal == true ? <Modal/> : null
                //props 전달
                // 변수, 배열, 객체, 함수, 요소(컴포넌트) 전달 가능
                showModal && <Modal title={selectedTitle} likeCount={selectedLikeCount} 
                            news={news} setNews={setNews} 
                            bgColor='lightblue'/>
            }

        </div>
    );
}

export default NewsBlog;