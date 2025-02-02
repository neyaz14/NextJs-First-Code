
export const getSinglePost = async (post_id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}

const SinglePost =async ({params}) => {
    const {id}=await params;
    const singlePost = await getSinglePost(id);
    return (
        <div>
            <h1>{singlePost.id}</h1>
            <p>{singlePost.title}</p>
        </div>
    );
};

export default SinglePost;
