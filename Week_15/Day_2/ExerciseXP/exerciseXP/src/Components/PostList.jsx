import React, { useState, useEffect } from 'react';


const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const resp = await fetch('./posts.json');
            const data = await resp.json();
            setPosts(data);
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
    };

    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post) => (
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
