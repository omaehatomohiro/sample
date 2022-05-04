import React, { memo, useCallback, VFC } from "react";

import { 
    Flex,
    Heading,
    Box,
    Link,
    useDisclosure
} from "@chakra-ui/react";

import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: VFC = memo( () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navigate = useNavigate();
    
    const onClickHome = useCallback(() => navigate('/home'), [navigate]);
    const onClickUserManagement = useCallback(() => navigate('/home/user_management'), [navigate]);
    const onClickSetting = useCallback(() => navigate('/home/setting'), [navigate]);
 
    return (
        <React.Fragment>
            <Flex
                as="nav"
                bg="teal.500"
                color="#fff"
                align="center"
                justify="space-between"
                padding={{base: 3, md:5}} 
            >
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}} onClick={onClickHome}>
                    <Heading as="h1" fontSize={{base:"md", md:"lg"}} color="#fff">ユーザー管理アプリ</Heading>
                </Flex>

                <Flex 
                    align="center"
                    fontSize="sm" 
                    flexGrow={2} 
                    justify="flex-end"
                    display={{base:"none", md: 'flex'}}
                >
                    <Box pr={4}>
                        <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
                    </Box>
                    <Box pr={4}>
                        <Link onClick={onClickSetting}>設定</Link>
                    </Box>
                </Flex>
                <MenuIconButton onOpen={onOpen}/>
            </Flex>
            <MenuDrawer
                onClose={onClose}
                isOpen={isOpen}
                onClickHome={onClickHome}
                onClickUserManagement={onClickUserManagement}
                onClickSetting={onClickSetting}
            />
        </React.Fragment>
    )
})