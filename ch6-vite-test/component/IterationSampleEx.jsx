import React, { useState } from 'react';

const IterationSampleEx = () => {

    // 리액트에서는 불변성 유지. 
    // 기존 배열을 수정하지 않고, 새로운 배열을 만들어 주는 map 내장 함수 이용. 
    // 주의사항. 
    // 1. 리스트로 값들을 출력시, 요소에 반드시 key 속성을 사용해야함. 
    // names -> 초기값 형태, 배열 안에 객체를 요소로 가짐. 
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    // 데이터 삭제 작업. 2
    // map -> (name), name 이라는 인자값에는 
    // { id: 1, text: '눈사람' }
    // 

    {/* // 실습3번, 목록 요소를 클릭시, 해당 요소 id 출력해보기.  */ }
    const namesList = names.map((name) =>
        <li key={name.id} onClick={() => { alert(`선택한 ID: ${name.id} `) }}
            onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

    // 데이터 삭제 작업. 1
    const onRemove = (id) => {
        //filter ,모든 요소를 검사를해서, 조건에
        // 맞는 요소만 뽑아서 새로운 배열을 생성. 
        // (name), name 이라는 인자값에는 
        // { id: 1, text: '눈사람' }
        // 만약 id = 1, 조건에 맞는 배열의 요소는 
        // id = 2, 3, 4 조건에 맞고, 
        // id = 1 조건에 x
        // 결론, 필터가 된 새로운 배열 : id = 2,3,4
        const nextNames = names.filter((name) => name.id !== id);
        // nextNames
        // [
        //  { id: 2, text: '얼음' },
        // { id: 3, text: '눈' },
        // { id: 4, text: '바람' },
        // ]
        setNames(nextNames);

    };
    //추가 작업 onClick 분리 하기. 
    const onClick = () => {
        // 실습 2, 기본 유효성 체크 
        if (!inputText.trim()) {
            alert("공백은 입력 할수 없습니다.")
            return
        }
        //실습1, 추가시, 기존요소와 동일하면, 추가 안함. 
        // 내장 함수, some 함수이용. 
        // some 함수, 해당 요소 중에서, 하나라도 일치하는게 있으면, true ,
        // 모두 불일치 하면, false, 
        // 결론, 전체 요소 중에서, 같은 요소가 있는지 검사용으로 활용. 
        if (names.some((name) => name.text === inputText)) {
            alert("이미 존재하는 항목입니다.")
            setInputText("")
            return;
        }

        // concat, 내장함수, 기존 배열을 유지하고, 
        // 새로운 요소를 추가한 새 배열을 생성. 
        //예) ddd 추가 
        const newNames = names.concat({ id: nextId, text: inputText });
        // newNames
        //   { id: 1, text: '눈사람' },
        // { id: 2, text: '얼음' },
        // { id: 3, text: '눈' },
        // { id: 4, text: '바람' },
        // { id: 5, text: 'ddd' },
        // 클릭 시, 새 배열로 교체
        setNames(newNames);
        // 클릭 시, 새 번호 증가.
        setNextId(nextId + 1);
        // 클릭 시, 기존 입력값은 지우기.
        setInputText('');
    }

    //실습 4번, 수정 기능, 우클릭시 요소 수정하기. 
    const onUpdate = (id, newText) => {
        const updateNames = names.map((name) =>
            name.id === id ? { ...name, text: newText } : name)
        setNames(updateNames);
    }


    return (
        <div>
            <input
                // 값을 입력시, onChange에 의해서 실시간으로 
                // 변수에 값이 할당됨
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="새 항목 입력"
            />
            <button
                // 추가 작업
                onClick={onClick}
            >
                추가
            </button>
            <ul>{namesList}</ul>
        </div>
    );
};
export default IterationSampleEx;