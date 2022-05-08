import React, { memo, useCallback, VFC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";


export const Header: VFC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="center"
        padding={{ base: 4, md: 6 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Text fontSize={{ base: "sm", md: "23" }} >
            唐津くんちのお囃子わかるかな(仮) ver 0.0.0
          </Text>
        </Flex>
      </Flex>
    </>
  );
});