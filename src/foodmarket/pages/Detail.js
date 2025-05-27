import './Detail.css';
import { useParams } from 'react-router';
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from 'react';


// function Detail(props) {
function Detail({foods}) {

    let { id } = useParams(); //요 안에는 따로 배열 적으면 X

    let [orderCount, setOrderCount] = useState(0);

    let[showModal, setShowModal] = useState(false);

    let [viewClass, setViewClass] = useState('');

    //  foods 전체 정보 보유

    //  id : 현재 페이지에서 표시해야하는 food의 id가 확인됨

    //  foods에 들어있는 id 값 == 주소 params 에 들어있는 id 값
    let food = foods.find((food)=>{
        return food.id == id;
        //food.id -> foodData 안의 id 정보
    })
    
    //foods.findIndex -> findIndex의 경우 못 찾는걸 -1로 표기함
    //if(food == -1){}

    // console.log(food);

    // LifeCycle (생성mount, 수정updat, 삭제unmount)
    // useEffext (실행할 함수, 의존성 배열)
    // useEffext (실행할 함수 { return () => {clean up function} }, 의존성 배열)

    useEffect(()=>{     //의존성 배열 X -> 매번 렌더링시 실행 (로딩생성mount, 수정update)
        console.log('useEffect')
    })

    useEffect(()=>{     //의존성 빈 배열O -> 로딩생성(mount)
        console.log('useEffect, []')
    }, []) //중복되는거 좀 걸러주는 듯?

    useEffect(()=>{     //의존성 배열 -> 로딩생성mount, 배열내에 변수가 변경될때(수정update) 
        console.log('useEffect, [orderCount]')
        console.log(orderCount); //정확하게 바뀐 값 사용 가능!(의존성 배열 통해서)

        //return 함수 -> 나중에 청소해야할 콜백함수가 됨!(???)
        return ()=>{console.log('useEffect, [orderCount] 에 들어있는 return 함수 실행')}

    }, [orderCount])

    /*
    useEffect(()=>{
        let cnt = 0;
        let intv = setInterval(()=>{
            console.log(cnt++);
        }, 1000)

        return ()=>{
            clearInterval(intv);
        }
    })
    */

    //modal 창 가리기
    useEffect(()=>{

        setTimeout(()=>{
            setShowModal(false);
        }, 2000) //특정 효과 주기!!-> 지금 이건 창이 2초 뒤에 사라지는 형태

    }, [])

    //container opacity 트랜지션 효과
    useEffect(()=>{

        setTimeout(()=>{
            setViewClass('end'); //''-> 'end'
            //'start' -> 'start end'
        }, 100); // 10 20

    }, [])




    //렌더링 위치 중요!!

    if(food == undefined) { //잘못된 id값이 들어옴. 해당 id 상품 없음

        return (
            <div>
                <h1>존재하지 않는 상품입니다. 잘못된 접근입니다.</h1>
            </div>
        );
    }

    //style 객체 단위로 관리
    const tempStyle = {
        color:"orange",
        fontSize:"20px"
    };

    const blueTextStyle = {
        color: "blue"
    }

    const styles = {
        redStyle : {
            color:"red"
        },
        blueStyle : {
            color: "blue"
        },
        fontBigBold : {         //styles.fontBigBold 
            fontSize : "2rem",
            fontWeight : "bold"
        }
    }

    /*
        조건에 따라서 스타일 적용

        가격표시 {food.price}
            1만원 이상 -> 빨간색
            1만원 미만 -> 파란색

        food.price >= 10000
    */

        //1) js 객체
        const priceTextStyle = {
            color : food.price >= 10000 ? 'red' : 'blue'
        }

        // <p style={priceTextStyle}>{food.price}</p>
        // <p style={{color : food.price >= 10000 ? 'red' : 'blue'}}>{food.price}</p>

        //2) js 함수 형태

        const priceTextStyleFunc = (price)=>{
            
            if(price >= 10000)
                return {color:'red'}
            else
                return {color:'blue'}

            //return {color : price >= 10000 ? 'red' : 'blue'}
        }
        //<p style={priceTextStyleFunc(food.price)}>{food.price}</p>

        /*
            3) css 클래스명 연계 활용
            //단일 클래스 적용 (삼항 연산자)
            <p className={ food.price >= 10000 ? 'price-red' : 'price-bule'}>{food.price}</p>

            //다중 클래스 적용
            <p className={ food.price >= 10000 ? 'price-red text-strong' : 'price-bule text-strong'}>{food.price}</p>
                text-strong price-red

                + 연산
                <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red ' : 'price-bule ')}>{food.price}</p>
        
                join 함수
                ['text-strong ', food.price >= 10000 ? 'price-red ' : 'price-bule '].join(" ")
        
                변수
                const priceClassName = 'text-strong price-red';

                백틱문자 활용 `
                <p className={ `text-strong ${food.price >= 10000 ? 'price-red ' : 'price-bule '} `}>{food.price}</p>
        */

    return (
                            // "start end"
        <Container className={'start ' + viewClass}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{paddingTop:'30px'}}>{food.title}</h4>
                    {/* <p style={tempStyle}>{food.content}</p> */}
                    <p style={styles.fontBigBold}>{food.content}</p>
                    <p className={ ['text-strong', food.price >= 10000 ? 'price-red ' : 'price-bule '].join(" ")}>{food.price}</p>
                    <p>
                        <Button variant="dark" onClick={()=>{
                            if(orderCount > 0)
                                setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={()=>{
                            if(food.stockCount >= orderCount + 1)
                                setOrderCount(orderCount + 1); //재고수량 넘지 않도록 제한 걸어주기!!

                        }}>+</Button>
                    </p>

                        { //참이면 주문하기, 거짓이면 품절!!
                            food.stockCount > 0 ?
                                <Button variant='primary'>주문하기</Button>
                                :
                                <Button variant='danger' disabled>품절</Button>
                        }
                </Col>
            </Row>

            {
                //showModal &&
                //showModal == true ?   :
            }
            <Modal show={showModal} onHide={()=>{setShowModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>환영합니다~</Modal.Title>
                </Modal.Header>
                <Modal.Body>어서오세요~ Food 구경하세요~</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{setShowModal(false)}}>
                        확인 
                    </Button>
                </Modal.Footer>
            </Modal>







        </Container>
    );
}

export default Detail;