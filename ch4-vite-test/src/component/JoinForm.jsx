import React from 'react';

const JoinForm = () => {


    return (
        <>
            <h1 className='react'>실습 , 회원가입화면 만들기.</h1>
            <input type='text' name='username' placeholder='사용자명'
            />
            <input type='text' name='eamil' placeholder='이메일'
            />
            <input type='password' name='password' placeholder='패스워드'
            />
            <input type='password' name='passwordConfirm' placeholder='패스워드확인'
            />
            <button >로그인</button>
        </>
    );

};

export default JoinForm;