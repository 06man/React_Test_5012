import React from 'react';

const Mycomponent = (props) => {
    return (
        <div>
            샘플 나의 첫 컴포넌트 만들기.
            데이터 전달 받기 : {props.name}
        </div>
    );
};

export default Mycomponent;