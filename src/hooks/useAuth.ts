import axios from "axios";
import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showMessage } = useMessage()

    const login = useCallback(
        (id:string) => {
            setLoading(true);
            axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res)=> {
                    if(res.data) {
                        showMessage({title: "login success", status: "success"});
                        navigate('/home');
                    } else{
                        showMessage({title: "user is not found.", status: "error"});
                    }
                })
                .catch(()=>{
                    showMessage({title: 'Can\' login!', status: "error"});
                })
                .finally(() =>{
                    setLoading(false);
                })
        },
        [navigate]
    );
    return {login, loading};
}