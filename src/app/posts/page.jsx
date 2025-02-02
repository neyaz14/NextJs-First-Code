import Link from 'next/link';
import React from 'react';

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

const Posts = async () => {
    const allPosts = await getPosts()
    console.log(allPosts.lenght)
    return (
        <div>
            <div>
                {allPosts.map((post, idx) =>
                    <Link href={`/posts/${post.id}`} key={post.id} className="my-3 border w-[50%] mx-auto">
                        <p>{idx} {post.title}</p>
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Posts;
