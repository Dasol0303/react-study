import './NewsBlog.css';
import { useState } from "react";


function NewsBlog() {

    let title = "React Study";
    let [news, setNewsArr] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
                                    // ['Today news', '어제의 뉴스', '내일의 뉴스']
    let textBoolean = true;
    const [likeCount1, setLikeCount1] = useState(0);
    const [likeCount2, setLikeCount2] = useState(0);
    const [likeCount3, setLikeCount3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState([0,0,0]);


    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            <div className='post-list'>
                <h4>{news[0]} <span onClick={()=>{
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
                <h4>{news[1]}<span onClick={()=>{
                    // setLikeCount(likeCount2 + 1);

                    let temp = [...likeCountArr];
                    temp[1] += 1;
                    setLikeCountArr(temp);

                }}>❤</span>{likeCountArr[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news[2]}<span onClick={()=>{
                    // setLikeCount(likeCount3 + 1);

                    let temp = [...likeCountArr];
                    temp[2] += 1;
                    setLikeCountArr(temp);

                }}>❤</span>{likeCountArr[2]}</h4>
                <p>내용 무</p>
            </div>
            
        </div>
    );
}

export default NewsBlog;