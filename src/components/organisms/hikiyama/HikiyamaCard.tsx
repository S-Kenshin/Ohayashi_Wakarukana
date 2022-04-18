import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    image: string;
    districtName: string;
    hikiyamaName: string;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { image, districtName, hikiyamaName } = props;
  return (
    <Box 
        w="300px" 
        h="420px" 
        bg="white" 
        borderRadius="10px" 
        shadow="md" 
        p={4} 
        _hover={{cursor:"pointer", opacity:0.8}}>
            <Stack textAlign="center">
                <Image 
                    boxSize="320px"
                    src={image}
                    alt={hikiyamaName}
                    m="auto"
                />
                <Text fontSize="lg">{districtName}</Text>
                <Text fontSize="lg">{hikiyamaName}</Text>
            </Stack>
    </Box>
  );
});
