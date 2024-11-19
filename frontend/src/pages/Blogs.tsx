import { AppBar } from "../components/AppBar";
import { BlogCards } from "../components/BlogCards";
import { useBlogs } from "../Hooks";

export default function Blogs() {
    const {loading, blogs} = useBlogs();
    if (loading) {
        return <div>loading...</div>
    }
    return <div>
        <AppBar />
        <div className="flex justify-center items-center flex-col max-w-xl">
            {blogs.map(blog => <div className= "max-w-xl">
       <BlogCards id={String(blog.id)}
       authorName={blog.author.name || "anonymous"} 
       title={blog.title} 
       content={blog.content} 
       publishedDate={"2ndnov"}/>
    </div>)}
    </div>
    </div>
 }