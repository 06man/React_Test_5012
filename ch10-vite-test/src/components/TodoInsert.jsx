import { MdAdd } from 'react-icons/md';
// import { IoMdAirplane } from "react-icons/io";
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
                {/* <IoMdAirplane /> */}
            </button>
        </form>
    );
};

export default TodoInsert;