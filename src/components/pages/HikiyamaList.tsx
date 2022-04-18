import { memo, useCallback, useEffect, VFC } from "react";
import {
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/hikiyama/HikiyamaCard";

export const HikiyamaList: VFC = memo(() => {
  return (
    <>
        <Wrap p={{ base: 4, md: 10 }}>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/akajishi.jpg"
                        districtName="刀町"
                        hikiyamaName="赤獅子"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/aojishi.jpg"
                        districtName="中町"
                        hikiyamaName="青獅子"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/urashima.jpg"
                        districtName="材木町"
                        hikiyamaName="亀と浦島太郎"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/yoshitsune.jpg"
                        districtName="呉服町"
                        hikiyamaName="源義経の兜"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/tai.jpg"
                        districtName="魚屋町"
                        hikiyamaName="鯛山"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/houou.jpg"
                        districtName="大石町"
                        hikiyamaName="鳳凰丸"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/hiryu.jpg"
                        districtName="新町"
                        hikiyamaName="飛龍"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/kinjishi.jpg"
                        districtName="本町"
                        hikiyamaName="金獅子"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/takedashingen.jpg"
                        districtName="木綿町"
                        hikiyamaName="武田信玄の兜"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/uesugi.jpg"
                        districtName="平野町"
                        hikiyamaName="上杉謙信の兜"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/raikou.jpg"
                        districtName="米屋町"
                        hikiyamaName="酒呑童子と源頼光の兜"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/tamatori.jpg"
                        districtName="京町"
                        hikiyamaName="珠取獅子"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/syachi.jpg"
                        districtName="水主町"
                        hikiyamaName="鯱"
                    />
                </WrapItem>
                <WrapItem  mx="auto">
                    <UserCard 
                        image="/shichihoumaru.jpg"
                        districtName="江川町"
                        hikiyamaName="七宝丸"
                    />
                </WrapItem>
        </Wrap>
    </>
  );
});