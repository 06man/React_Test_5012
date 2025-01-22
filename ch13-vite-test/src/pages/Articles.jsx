import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
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