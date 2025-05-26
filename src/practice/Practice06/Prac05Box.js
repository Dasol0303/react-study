
import './Practice06.css';

function Prac05Box(color) {
    return (
        <div className='box' style={{backgroundColor:color.bgColor}}>
        <button onClick={()=>{

            let temp = [...color.boxes];
            // 아니 여기... 배열 자체말고 인덱스 숫자 넘기자요..
            temp.splice(color.index, 1);
            color.setBoxes(temp);
            
        }}>X</button>
        </div>
    );
}

export default Prac05Box;