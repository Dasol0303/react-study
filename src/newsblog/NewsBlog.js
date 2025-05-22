import './NewsBlog.css';
import { useState } from "react";
import Modal from './Modal';


function NewsBlog() {

    let title = "React Study";
    let [news, setNewsArr] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
                                    // ['Today news', '어제의 뉴스', '내일의 뉴스']
    let textBoolean = true;
    const [likeCount1, setLikeCount1] = useState(0);
    const [likeCount2, setLikeCount2] = useState(0);
    const [likeCount3, setLikeCount3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState([0,0,0]);

    let[showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');


    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    if(showModal)
                        setShowModal(false);
                    else
                        setShowModal(true);

                    setSelectedTitle(news[0]);

                }}>{news[0]} <span onClick={()=>{
                    // setLikeCount(likeCount1 + 1);

                    let temp = [...likeCountArr];
                    temp[0] += 1;
                    setLikeCountArr(temp);

                }}>❤</span>{likeCountArr[0]}</h4>
                <p>내용 무</p>
                {/* <button onClick={()=> {
                    let temp = [...news];
                        if(textBoolean == true) {
                            let temp = [...news];
                            news[0] = 'Today News';
                            setNewsArr(temp);

                            textBoolean = false;
                        } else {
                            let temp = [...news];
                            news[0] = '오늘의 뉴스';
                            setNewsArr(temp);

                            textBoolean = true;
                        }
                }}>제목 변경</button> */}
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    setShowModal(!showModal);
                    setSelectedTitle(news[1]);
                }}>{news[1]}<span onClick={()=>{
                    // setLikeCount(likeCount2 + 1);

                    let temp = [...likeCountArr];
                    temp[1] += 1;
                    setLikeCountArr(temp);

                }}>❤</span>{likeCountArr[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4 onClick={()=>{
                    setShowModal(!showModal);
                    setSelectedTitle(news[2]);
                }}>{news[2]}<span onClick={(event)=>{
                    event.stopPropagation(); // 전파를 막겠다
                    // 속해있는 부모 요소의 이벤트 처리까지 전파되는걸 막겠다
                    // <h4><span></span></h4>

                    // setLikeCount(likeCount3 + 1);

                    let temp = [...likeCountArr];
                    temp[2] += 1;
                    setLikeCountArr(temp);

                }}>❤</span>{likeCountArr[2]}</h4>
                <p>내용 무</p>
            </div>
            
            {
                // showModal == true ? <Modal/> : null
                showModal && <Modal title={selectedTitle}/>
            }
            

        </div>
    );
}

export default NewsBlog;