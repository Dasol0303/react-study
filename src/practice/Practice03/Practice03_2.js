import './Practice03.css'

function Practice03_2({title, content}) {

        return (
        <div>
            <div className='textItem'>
                <p className='title'>제목 : {title}</p>
                <p>내용 : {content}</p>
            </div>
        </div>
        );
}

export default Practice03_2;