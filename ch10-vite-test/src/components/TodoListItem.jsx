import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
// 추가1
// 클래스 이름 쉽게 접근 및 조건부 렌더링 하는 도구 
import cn from 'classnames';
import './TodoListItem.scss';

// 추가2, { todo } ->  
// { id: 1, text: '리액트의 기초 알아보기',checked: true,},
const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;

    return (
        <div className="TodoListItem">
            {/* 추가3 */}
            <div className={cn('checkbox', { checked })}>
                {/* 추가4 */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                {/* 추가5 */}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;