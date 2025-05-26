
import './Practice06.css';

function Prac05Box(color) {
    return (
        <div>
{/* 동욱님이 알려주심... color 저거 받을 때는 '속성.color' 이렇게 받자..ㅠㅠ */}
{/* <div className='box' style={{backgroundColor:color.color}}></div> */}
            <div className='box' style={{backgroundColor:color.bgColor}}></div>
        </div>
    );
}

export default Prac05Box;