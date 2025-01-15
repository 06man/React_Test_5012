import React, { useState } from 'react';

const Say = () => {
    //useState('') -> 반환를 배열 형식
    //  -> 첫번째, 초깃값(빈 문자열) , 두번째, set 함수를 반환. 
    // setMessage, set 함수의 역할 , message (state 값 변경 해줌. )
    const [message, setMessage] = useState('');

    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;