import axios from "axios";
import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showMessage } = useMessage()
    const { setLoginUser } = useLoginUser();

    const login = useCallback(
        (id:string) => {
            setLoading(true);
            axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res)=> {
                    if(res.data) {
                        const isAdmin = res.data.id === 10 ? true : false;
                        setLoginUser({...res.data, isAdmin});
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
        [navigate,showMessage,setLoginUser]
    );
    return {login, loading};
}