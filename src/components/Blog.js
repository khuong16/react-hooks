import useFetch from "../customize/fetch";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Blog.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddNewBlog from './AddNewBlog';

const Blog = () => {

    // Modal: hide/show
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)

    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 9);
            setNewData(data)
        }
    }, [dataBlog])

    let history = useHistory();

    // if (dataBlog && dataBlog.length > 0) {
    //     newData = dataBlog.slice(0, 10);
    //     //console.log('>>>> new Data', newData);
    // }

    const handleAddNew = (blog) => {
        //history.push('/add-new-blog');
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id);
        setNewData(data);
    }

    return (
        <>
            <Button variant="info" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title} </span>
                                <span onClick={() => deletePost(item.id)}>X</span>
                            </div>
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