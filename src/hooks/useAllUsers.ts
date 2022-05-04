import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const {showMessage} = useMessage();
    
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<User>>([]);

    const getUsers = useCallback( () => {
        
        setLoading(true);

        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
        .then( (res) => {
            showMessage({title:"success.", status: "success"});
            setUsers(res.data);
        })
        .catch( () => {
            showMessage({title:"failed.", status: "error"});
        })
        .finally( () => {
            setLoading(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {getUsers, loading, users}
}