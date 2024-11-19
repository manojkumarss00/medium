import { useState } from "react";
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div className="flex justify-center flex-col">
        <AppBar />
        <form>
        <div className="max-w-screen-lg">
            <label className="block mb-2 text-sm font-medium text-gray-900">Your <title></title></label>
            <textarea onChange={(e) => {
                setTitle(e.target.value);
            }} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="max-w-screen-lg">
            <label className="block mb-2 text-sm font-medium text-gray-900">Your content</label>
            <textarea onChange={(e) => {setDescription(e.target.value)}} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog/post`, {
                title,
                content: description
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                 }
            });
            console.log(response)
            navigate(`/blog/${response.data.id}`)
        }} type="submit" className="bg-green-500 hover:bg-green-600 rounded-lg w-20 mt-4">Publish</button>
        </form>
    </div>
}