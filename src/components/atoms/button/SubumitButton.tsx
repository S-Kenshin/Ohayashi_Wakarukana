import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    isFullWidth?: boolean;
    onClick: () => void;
  };

export const SubmitButton: VFC<Props> = props => {
    const {
        children,
        isFullWidth = false,
        onClick
      } = props;

    return (
        <Button
            bg="teal.400"
            color="white"
            isFullWidth={isFullWidth}
            _hover={{ opacity: 0.8 }}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}