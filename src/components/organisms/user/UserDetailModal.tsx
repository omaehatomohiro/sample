import { memo, VFC } from "react";
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
    Input
 } from "@chakra-ui/react";

 import { User } from "../../../types/user";

 type Props = {
     isOpen: boolean;
     onClose: () => void;
     user: User | null;
 }

export const UserDetailModal: VFC<Props> = memo( (props) => {

    const { isOpen, onClose,user } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay/>
            <ModalContent pb={6}>
                <ModalHeader>
                    ユーザー詳細
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody m={4}>
                    <Stack spacing={3}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value={user?.name} isReadOnly={true}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value={user?.username} isReadOnly={true}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input value={user?.email} isReadOnly={true}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>電話番号</FormLabel>
                            <Input value={user?.phone} isReadOnly={true}/>
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
})