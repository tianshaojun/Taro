import { View, Text } from '@tarojs/components'

function Child(props) {
    return (
        <View><Text>我是子组件，父组件向我传值为：{props.useName}</Text></View>
    )
}

export default Child

