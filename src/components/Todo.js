const Todo = (props) => {
    // props: properties.
    // Chỉ truyền dữ liệu từ cha xuống con.
    // top -> bottom.

    //const todos = props.todos;

    const { todos, title, deleteDataToDo } = props;

    const handleDelete = (idddd) => {
        deleteDataToDo(idddd);
    }

    return (
        <>
            <div className='todo-container'>
                <div className="title-todo">
                    {title}
                </div>
                {todos && todos.length > 0 &&
                    <>
                        {todos.map(todo => {
                            return (
                                <div className='todo-child' key={todo.id}>
                                    {todo.id} - {todo.title} &nbsp;
                                    <span onClick={() => handleDelete(todo.id)}>X</span>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <br />
        </>
    )
}

export default Todo;