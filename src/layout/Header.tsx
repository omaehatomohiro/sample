import { Flex, Heading,Box,Link } from "@chakra-ui/react";
import React, { memo, VFC } from "react";

export const Header: VFC = memo( () => {
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
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}}>
                    <Heading as="h1" fontSize={{base:"md", md:"lg"}} color="#fff">ユーザー管理アプリ</Heading>
                </Flex>

                <Flex align="center" font-size="sm" flexGrow={2} justify="flex-end" display={{base:"none", md: 'flex'}}>
                    <Box pr={4}>
                        <Link>ユーザー一覧</Link>
                    </Box>
                    <Box pr={4}>
                        <Link>設定</Link>
                    </Box>
                </Flex>
            </Flex>
        </React.Fragment>
    )
})