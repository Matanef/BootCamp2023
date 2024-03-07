import React, { useState, useEffect } from 'react';
import postsData from './posts.json'


const PostList = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        setPosts(postsData);
        console.log(posts);
    }, []);


    return (
        <div>
            <h1>This is a title</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
