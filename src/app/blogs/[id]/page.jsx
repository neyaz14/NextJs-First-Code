const Blog =async ({params}) => {
    const {id} =await params;
    return (
        <div>
            <p>Blog id is {id}</p>
        </div>
    );
};

export default Blog;
