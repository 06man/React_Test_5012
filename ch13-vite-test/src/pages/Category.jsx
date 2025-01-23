import React from 'react';
import { useParams } from 'react-router-dom';

// 실습1
const Category = () => {
    // <Route path="/category/:name" element={<Category />} />, 참고
    //http://localhost:5173/category/lsy
    const { name } = useParams();
    return (
        <div>
            <h1>Category 페이지입니다.</h1>
            <h2>파라미터 받기 예시 useParams() 이용: {name} </h2>
        </div>
    );
};

export default Category;