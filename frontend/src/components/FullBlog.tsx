import { AppBar } from "./AppBar"

export const FullBlog = ({blog}:  {blog : any}) => {
    return <div>
        <AppBar />
        <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
            <div className="col-span-8">
                <div className="text-3xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    Posted on 3rd Nov 2024
                </div>
                <div className="pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
                {blog.author.name}
            </div>
        </div>
        </div>
    </div>
}