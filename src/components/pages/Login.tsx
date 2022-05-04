
import React, {ChangeEvent, memo, useState, FC} from "react";

import {
    Flex,
    Box,
    Input, 
    Divider,
    Heading,
    Stack
} from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo( () => {

    const {login, loading} = useAuth();

    const [userId, setUserId] = useState('');
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const onCLickLogin = () => login(userId);

    return (
            <React.Fragment>
                <Flex align="center" justify="center" height="100vh">
                    <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                        <Heading as="h1" size="lg" textAlign="center">
                            ユーザー管理アプリ
                        </Heading>
                        <Divider my={4}/>
                        <Stack spacing={4} py={4} px={10}>
                            <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
                            <PrimaryButton
                                onClick={onCLickLogin}
                                disabled={userId === ""}
                                loading={loading}
                            >
                                ログイン
                            </PrimaryButton>
                        </Stack>
                    </Box>
                </Flex>
            </React.Fragment>
        );
})