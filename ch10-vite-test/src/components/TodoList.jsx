import TodoListItem from './TodoListItem';
import './TodoList.scss';
// 추가 1-1 , onRemove
const TodoList = ({ todos, onRemove }) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id}
                    // 추가 1-2 , onRemove
                    onRemove={onRemove} />
            ))}
        </div>
    );
};

export default TodoList;