import './Blog.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitBtn = async () => {

        // if (title === '' || title === null  || title === undefined) alert('empty title')
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content')
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

        if (res && res.data) {
            let newBlog = res.data;
            // console.log('>>> check log data state: ', newBlogs);
            props.handleAddNew(newBlog);
        }
    }

    return (
        <>
            <div className="add-new-container">
                <div className="text-add-new">---Add new blogs ---</div>
                <div className="inputs-data">
                    <label>Title: </label>
                    <input type="text"
                        value={title}
                        onChange={(item) => setTitle(item.target.value)}
                    />
                </div>
                <div className="inputs-data">
                    <label>Content: </label>
                    <input type="text"
                        value={content}
                        onChange={(item) => setContent(item.target.value)}
                    />
                </div>
                <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>
            </div>
        </>
    )
}

export default AddNewBlog;