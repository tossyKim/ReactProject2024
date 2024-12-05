import Card from './Card'
import './styles.css'

function MainPage(){
    return(
        <div>
            <Card className="notice-card" title="공지사항">
                <p>여기는 공지사항 영역입니다.</p>
                <p>최신 소식을 확인하세요</p>
            </Card>

            <Card className="event-card" title="이벤트">
                <p>현재 진행중인 이벤트를 확인하세요.</p>
                <ul>
                    <li>이벤트 1 : 할인 쿠폰</li>
                    <li>이벤트 2 : 무료 배송</li>
                </ul>
            </Card>

            <Card className="event-card" title="이벤트">
                <p>궁금한 점이 있으시면 언제든지 문의하세요</p>
                <button>문의하기</button>
            </Card>
        </div>
    )
}
export default MainPage