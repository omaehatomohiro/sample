import { useToast } from "@chakra-ui/react";
import { useCallback } from "react"

type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
}
export const useMessage = () => {
    
    const toast = useToast();

    const showMessage = useCallback( (props:Props) => {
        const {title, status } = props; 
        toast({
            position: "top",
            duration: 1200,
            isClosable: true,
            status: status,
            title: title
        })
    },[toast]);

    return {showMessage};
}