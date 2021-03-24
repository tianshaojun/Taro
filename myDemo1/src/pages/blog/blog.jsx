import Taro, { requirePlugin, useState } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { xiedajiao, liuying } from '../../tools'
import newbbd from '../../static/newbbd0001.jpg'


function Blog() {

    // const [blogTitle,setBlogTitle] = useState('JSPang Blog')
    const blogTitle = '1';
    const introduce = '2';

    xiedajiao();
    liuying();

    const girls = [
        { id: 1, name: '谢大脚' },
        { id: 2, name: '刘英' },
        { id: 3, name: '王小蒙' },
        { id: 4, name: '香秀' }
    ]

    let zhujiaoNum = 1;

    let articleList = [];

    const testHandler = () => {
        Taro.request({
            url: 'https://apiblog.jspang.com/default/getArticleList'
        }).then(res => {
            articleList = res.data.bibidaoList;
            console.log(articleList);
        })
    }

    const goToIndex = () => {
        Taro.navigateTo({ url: '/pages/index/index?blogTitle=' + blogTitle + '&introduce=' + introduce });
    }

    return (
        <View>
            <Text>Blog Page</Text>
            <Button onClick={goToIndex}>我要去Index页面</Button>
            <View>
                <Image src={newbbd} width="100px" height="100px" />
                <Image src={require('../../static/newbbd0001.jpg')} width="100px" height="100px" />
            </View>
            <ul>
                {
                    girls.map((item, index) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })
                }
            </ul>
            <br />
            <View>男主角是：{zhujiaoNum == 1 ? '玉田' : '刘能'}</View>
            <br />
            <View>男主角是：{zhujiaoNum == 1 && '玉田' || '刘能'}</View>
            <Button onClick={testHandler}>taro请求远程数据</Button>
            <ul>
                {
                    articleList && articleList.map((item, index) => {
                        return (
                            <li key={item.id}>{item.title}</li>
                        )
                    })
                }
            </ul>
        </View>
    )
}

export default Blog
