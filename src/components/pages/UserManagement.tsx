import { memo, useCallback, useEffect, VFC } from "react";
import {
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/hikiyama/HikiyamaCard";
import { useAllHikiyama } from "../../hooks/useAllHikiyama";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users,}= useAllHikiyama()

  useEffect(() => getUsers(), [])
  return (
    <>
        <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
                <WrapItem key={user.id} mx="auto">
                    <UserCard  
                        userName={user.title}
                        fullName={user.body}
                    />
                </WrapItem>
            ))}

        </Wrap>
    </>
  );
});