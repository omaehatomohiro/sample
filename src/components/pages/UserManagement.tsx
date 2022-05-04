import {
    Wrap,
    WrapItem,
    Spinner,
    Center,
    useDisclosure,
 } from "@chakra-ui/react";
import React, {memo, useCallback, useEffect, FC} from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal"; 
import { useLoginUser } from "../../hooks/useLoginUser";


export const UserManagement: FC = memo( () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, loading, users } = useAllUsers();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => getUsers(), []);

    const onClickUser = useCallback( (id: number) => {
        onSelectUser({ id, users, onOpen })
    },[onOpen, onSelectUser, users]);


    return (
        <React.Fragment>
            {loading ? (
                <Center h="100vh">
                    <Spinner/>
                </Center>
                ) : (
                <Wrap p={{base: 4, md: 10}}>
                {users.map( (user, index) => (
                    <WrapItem key={index} mx="auto">
                        <UserCard
                            onClick={onClickUser}
                            id={user.id}
                            userName={user.name}
                            fullName={user.username} 
                            imageUrl="https://source.unsplash.com/random"
                        />
                    </WrapItem>
                ))}
            </Wrap>  
            )}
            <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin}/>
        </React.Fragment>
    );
})