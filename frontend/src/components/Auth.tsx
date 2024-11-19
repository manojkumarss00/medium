import { SignUpInput } from "@man0j/medium-common"
import { ChangeEvent , useState, useEffect } from "react"
import axios from 'axios';
import { Link , useNavigate} from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = ({types} : {types: "signup" | "signin"}) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/blogs');
        }
    }, [])
    const [postInput, setPostInput] = useState<SignUpInput>({
        username:"",
        password:"",
        name:""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${types === "signup"?  "signup" : "signin"}`, postInput);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate('/blog')
        }catch (e) {

        }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div>
                <div className="text-3xl font-extrabold">
                    Create a account
                </div>
                <div className="text-slate-400">
                    {types==="signin" ? "Don't have a account ?" : "Already have a account ?"}
                    <Link to={types ==="signin" ? "/signup":"/signin"} className="pl-4 underline">
                     {types === "signin" ? "sign up" : "sign in"}
                    </Link>
                </div>
            </div>

            <div>
            {types ==="signup" ? <LabelledInput label="name" placeholder={"manoj"} onChange={(e) => {
                setPostInput(c => ({
                    ...c,
                    name: e.target.value
                }))
            }}/>:null}
            <LabelledInput label="username" placeholder={"manoj@gmail.com"} onChange={(e) => {
                setPostInput(c => ({
                    ...c,
                    username: e.target.value
                }))
            }}/>
            <LabelledInput label="password" type="password" placeholder={"password"} onChange={(e) => {
                setPostInput(c => ({
                    ...c,
                    password: e.target.value
                }))
            }}/>
            <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    {types === "signup" ? "sign up": "sign in"}
            </button>
            </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    type?:string
}

function LabelledInput({label, placeholder, onChange , type} : LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
        block w-full p-2.5" placeholder={placeholder} required/>
    </div>
}

