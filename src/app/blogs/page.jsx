import Link from "next/link";
import Blog from "./[id]/page";
import Btn from "@/app/components/Btn";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            name: "First Blog",
            post: "Hi 👋, I'm I am a first-year Physics student at the University of Jahangirnagar with a strong passion for web development . While pursuing my studies in Physics, I am also dedicated to advancing my skills in web development through the MEAN stack. I have completed coursework in HTML, CSS, Tailwind, and JavaScript,ReacJs, MongoDB, ExpressJs, and am actively expanding my expertise."
        },
        {
            id: 2,
            name: "Second Blog",
            post: "second blog, I'm I am a first-year Physics student at the University of Jahangirnagar with a strong passion for web development . While pursuing my studies in Physics, I am also dedicated to advancing my skills in web development through the MEAN stack. I have completed coursework in HTML, CSS, Tailwind, and JavaScript,ReacJs, MongoDB, ExpressJs, and am actively expanding my expertise."
        }
    ]
    return (
        <div className="p-10 border mx-auto">
            <h1 className="text-2xl mx-auto">Blogs Post Page</h1>
            <div>
                <ol>
                    {
                        blogs.map(blog =>
                            <Link href={`/blogs/${blog.id}`} key={blog.id}><li className="m-3" >{blog.name}</li></Link>
                        )}

                </ol>
                <Btn/>
            </div>
        </div>
    );
};

export default Blogs;
