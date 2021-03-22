import Taro, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import Child from './child.jsx'
import './index.less'


function Index(props) {

  const [useName, setUserName] = useState('Hello World!!!')
  // const [blogTitle, setBlogTitle] = useState('')

  // useEffect(() => {
  //   console.log(that);
  //   setBlogTitle(that.$router.parmas.blogTitle)
  // }, [])
  console.log(props.tid);  //路由参数信息

  return (
    <View>
      <Text>{useName}</Text>
      <Child useName={useName}></Child>
      {/* <View>{blogTitle}</View> */}
    </View>
  )

}

export default Index;
