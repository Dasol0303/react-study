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


    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            {   //map
                news.map((item, index)=>{ //item 값 안에 배열에 있는 거 들어있을거임!!

                    return (

                            <div className='post-list'>
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

                            }}>❤</span>{likeCountArr[index]}</h4>
                                <p>내용 무</p>
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