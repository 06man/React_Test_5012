// 추가1
import { useState, useCallback } from 'react';
// 추가1
import { MdAdd } from 'react-icons/md';
// import { IoMdAirplane } from "react-icons/io";
import './TodoInsert.scss';

const TodoInsert = () => {
    //추가2
    const [value, setValue] = useState('');

    // useCallback(콜백함수, []), []:함수를 한번 생성, 
    //[변수], 변수 값에 따라서, 매번 함수를 새로 생성.
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    //추가2

    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요"
                // 추가3
                value={value}
                onChange={onChange} />
            {/* 추가3 */}
            <button type="submit">
                <MdAdd />
                {/* <IoMdAirplane /> */}
            </button>
        </form>
    );
};

export default TodoInsert;