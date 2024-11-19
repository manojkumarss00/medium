import { Link } from "react-router-dom"

interface BlogCardsProps {
    id: string,
    authorName: string,
    title: string,
    content:string,
    publishedDate: string
}

export const BlogCards = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardsProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="pb-4 cursor-pointer">
        <div className="flex items-center">
            <Avatar name={authorName}/>
            <div className="font-extralight pl-2">
                {authorName} . 
            </div>
            <div className="font-thin">
                &#9679;
            </div>
            <div className="pl-2 font-thin text-slate-500">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="font-thin text-md pt-4">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="w-full text-slate-400">
            {`${Math.ceil(content.length / 100)} minutes`}
        </div>
    </div>
    </Link>
}

export function Avatar({ name }:{ name:string }) {
    return <div className="relative inline-flex items-center
    justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full">
        <span className="text-xs text-gray-600">{name[0]}</span>
    </div>
}