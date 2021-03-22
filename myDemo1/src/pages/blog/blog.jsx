import Taro, { useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

function Blog() {

    // const [blogTitle,setBlogTitle] = useState('JSPang Blog')
    const blogTitle = '1';
    const introduce = '2';

    const goToIndex = () => {
        Taro.navigateTo({ url: '/pages/index/index?blogTitle=' + blogTitle + '&introduce=' + introduce });
    }

    return (
        <View>
            <Text>Blog Page</Text>
            <Button onClick={goToIndex}>我要去Index页面</Button>
        </View>
    )
}

export default Blog
