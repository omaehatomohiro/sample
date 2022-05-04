
import React, {memo, VFC} from "react";

import { Button } from "@chakra-ui/react";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export const PrimaryButton: VFC<Props> = memo( (props) => {
    const {children, onClick, disabled = false, loading} = props;
    return (
            <React.Fragment>
                <Button
                    bg="teal.400"
                    color="white"
                    _hover={{opacity:0.8}}
                    onClick={onClick}
                    isLoading={loading}
                    disabled={disabled || loading}
                >
                    {children}
                </Button>
            </React.Fragment>
        );
})