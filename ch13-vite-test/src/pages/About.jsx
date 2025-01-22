//추가
import { useLocation } from 'react-router-dom';

const About = () => {
    //추가
    const location = useLocation();
    // useLocation으로 현재 경로 정보 가져오기

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            {/* //추가 */}
            <p>쿼리스트링 location.search: {location.search}</p>
            <p>현재 주소의 경로 location.pathname: {location.pathname}</p>
            <p>location.hash: {location.hash}</p>
            <p>location.state: {location.state}</p>
            <p>location.key: {location.key}</p>
        </div>
    );
};

export default About;