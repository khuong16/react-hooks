const Todo = (props) => {
    // props: properties.
    // Chỉ truyền dữ liệu từ cha xuống con.
    // top -> bottom.

    const todos = props.todos;

    return (
        <>
            <div className='todo-container'>
                <div className="title-todo">
                    {props.title}
                </div>
                {todos && todos.length > 0 &&
                    <>
                        {todos.map(todo => {
                            return (
                                <div className='todo-child' key={todo.id}>
                                    {todo.id} - {todo.title}
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