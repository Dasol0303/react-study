import { Navigate, Route, Routes, useNavigate } from "react-router";
import './Practice07.css';
import Cart from "./Cart";

function Practice07() {

    //생성한 프로젝트 초기
    //npm install react-router 설치
    //index.js <BrowserRouter> 설정

    let navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>{
                navigate("/")
            }} >Main</button>

            <button onClick={()=>{
                navigate("/info")
            }}>/info</button>

            <button onClick={()=>{
                navigate("/my.page")
            }}>/my.page</button>

            <button onClick={()=>{
                navigate("/cart")
            }}>/cart</button>

        <Routes>
            <Route path="/" element={<h1 className="bg">Main</h1>}></Route>
            <Route path="/info" element={<h1 className="bg">info 공간입니다.</h1>}></Route>
            <Route path="/my.page" element={<h1 className="bg">my.page 공간입니다.</h1>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>



        </div>
    );
}

export default Practice07;