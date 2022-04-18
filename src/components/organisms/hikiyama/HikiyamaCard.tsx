import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  userName: string;
  fullName: string
};

export const UserCard: VFC<Props> = memo((props) => {
  const {userName, fullName } = props;
  return (
    <Box 
        w="260px" 
        h="260px" 
        bg="white" 
        borderRadius="10px" 
        shadow="md" 
        p={4} 
        _hover={{cursor:"pointer", opacity:0.8}}>
            <Stack textAlign="center">
                <Image 
                    borderRadius="full"
                    boxSize="160px"
                    src="/akajishi.jpg"
                    alt="images"
                    m="auto"
                />
                <Text fontSize="lg">{userName}</Text>
                <Text fontSize="lg">{fullName}</Text>
            </Stack>
  </Box>
  );
});
