import { memo, useEffect, FC, useState, ChangeEvent } from "react";
import {
    Stack,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
} from "@chakra-ui/react";

import { User } from "../../../types/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

 type Props = {
     isOpen: boolean;
     isAdmin?:boolean;
     onClose: () => void;
     user: User | null;
 }

export const UserDetailModal: FC<Props> = memo( (props) => {

    const { isOpen, onClose, user, isAdmin = false } = props;

    const[name, setName] = useState('');
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    useEffect( () => {
        setName(user?.name ?? '');
        setUserName(user?.username ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '')
    },[user]);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

    const onClickUpdate = () => {

    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay/>
            <ModalContent pb={2}>
                <ModalHeader>
                    ユーザー詳細
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody m={4}>
                    <Stack spacing={3}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value={userName} isReadOnly={!isAdmin} onChange={onChangeUserName}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>電話番号</FormLabel>
                            <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
                        </FormControl>
                    </Stack>
                </ModalBody>
                {isAdmin && (
                <ModalFooter>
                    <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    )
})