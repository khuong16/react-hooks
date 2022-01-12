const Todo = (props) => {
    // props: properties.
    // Chỉ truyền dữ liệu từ cha xuống con.
    // top -> bottom.

    const todos = props.todo;

    return (
        <>
            <div className='todo-container'>
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
        </>
    )
}

export default Todo;