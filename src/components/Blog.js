import useFetch from "../customize/fetch";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Blog.scss';

const Blog = () => {

    const { data: dataBlog, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)

    let newData = [];
    let history = useHistory();

    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 10);
        console.log('>>>> new Data', newData);
    }

    const handleAddNew = () => {
        history.push('/add-new-blog');
    }

    return (
        <>
            <div><button className="btn-add-new" onClick={handleAddNew}>+ Add new blog</button></div>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>  View detail</Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                }

            </div>
        </>
    )
}

export default Blog;