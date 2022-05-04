import React, { memo, FC } from "react";

import { 
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Button,
} from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo( (props) => {

    const {
        isOpen, onClose,
        onClickHome,
        onClickUserManagement,
        onClickSetting
    } = props;
 
    return (
            <Drawer
                placement="left"
                size="xs"
                isOpen={isOpen}
                onClose={onClose}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody>
                            <Button w="100%" onClick={onClickHome}>TOP</Button>
                            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
                            <Button w="100%" onClick={onClickSetting}>設定</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
    )
})