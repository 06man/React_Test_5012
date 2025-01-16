import React, { useState } from 'react';

const LoginForm = () => {
    // 화면과 데이터를 동기화를 하기위한 state 정의하기. 

    // useState 혹스 사용시, react 에서 임포트 해야함. 

    // 순서2, state 작업
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    // 교체작업1-2
    const { username, password } = form;

    // 순서3, onChage 작업, 
    // 입력값이 입력이 되는 순간 리액트 데이터와 화면을 동기화하기위해서 작업함

    // onChange 실행 순서2
    //onChange 실행 순서2-2
    const onChange = (e) => {
        // onChange 실행 순서3 , e , event , input 입력한 이벤트 객체 활성화
        // onChange 실행 순서3-2 , e , event , input 입력한 이벤트 객체 활성화
        const nextForm = {
            // ... 스프레드 연산자, 기존 값을 복사를 함. 
            // onChange 실행 순서4, form = { username: "", password : ""   }
            // onChange 실행 순서4-2, form = { username: "ㅇ", password : ""   }
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            // onChange 실행 순서5, form = { username: "", password : ""   }
            // onChange 실행 순서5-2, form = { username: "ㅇ", password : ""   }
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
            // onChange 실행 순서6, [e.target.name] ,e.target 가리키 요소 :<input  
            // e.target.name 가리키는 <input name='username'
            //[e.target.name] : input 의 username ,
            //[e.target.value] : input 의 value ,
            // onChange 실행 순서7, 실행 후, form = { username: "ㅇ", password : ""   }
            // onChange 실행 순서7-=, 실행 후, form = { username: "ㅇㄱ", password : ""   }
        };
        setForm(nextForm);
    };

    //jsx 문법을 사용해서, 화면에 출력. 
    // 기존에 사용하는 html 문법과 거의 동일. 
    // 출력 요소를 감싸는 부모 요소가 반드시 존재해야함. 
    return (
        <>
            state 로 동작하는 onChange 변경사항을 화면에 동기화, 즉 표시해보기.
            <h2>username : {username} , password : {password}</h2>

            {/* 순서1 화면작업 */}
            <h1 className='react'>실습 , 로그인화면 만들기.</h1>
            <input type='text' name='username' placeholder='사용자명'
                // onChange 실행 순서1, username의 입력창 무언가 입력 됨. 
                // 예 : username : ㅇ, 하나 입력.

                // onChange 실행 순서2-1, username의 입력창 무언가 입력 됨. 
                // 예 : username : ㅇㄱ, 하나 더 입력.
                value={username} onChange={onChange}
            />
            <input type='password' name='password' placeholder='패스워드'
                value={password} onChange={onChange}
            />
            <button>로그인</button>
        </>
    );
};

export default LoginForm;