import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            {/* 공통으로 출력하고 싶은 요소를 적기 */}
            {/* <Outlet /> */}
            <ul>
                <li>
                    <Link to="/Articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/Articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/Articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;