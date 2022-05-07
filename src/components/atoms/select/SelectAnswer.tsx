import { Select } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const SelectAnswer: VFC = memo(() => {
    return (
        <>
            <Select placeholder='答えを選ぶ' size="lg" textAlign="center" width={['xs', 'sm', 'md']}>
                <option value='option1'>1. 赤獅子</option>
                <option value='option2'>2. 青獅子</option>
                <option value='option3'>3. 亀と浦島太郎</option>
                <option value='option4'>4. 源義経の兜</option>
                <option value='option5'>5. 鯛山</option>
                <option value='option6'>6. 鳳凰丸</option>
                <option value='option7'>7. 飛龍</option>
                <option value='option8'>8. 金獅子</option>
                <option value='option9'>9. 武田信玄の兜</option>
                <option value='option10'>10. 上杉謙信の兜</option>
                <option value='option11'>11. 酒呑童子と源頼光の兜</option>
                <option value='option12'>12. 珠取獅子</option>
                <option value='option13'>13. 鯱</option>
                <option value='option14'>14. 七宝丸</option>
            </Select>
        </>
    )
})