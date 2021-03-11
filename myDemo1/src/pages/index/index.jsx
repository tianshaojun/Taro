import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'


function Index() {

  const [useName, setUserName] = useState('Hello World!!!');

  return (
    <View>
      <Text>{useName}</Text>
    </View>
  )

}

export default Index;
