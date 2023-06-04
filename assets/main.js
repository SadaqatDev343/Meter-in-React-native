import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import styles from './styling';

const  MainScreen = () => {
  const [percent, setPercent] = useState(0);

  function getData(percent) {
    const data = [];
    for (let i =1; i <=50; i++) {
      data.push({ x:i , y:2 });
    }
    return data;
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setPercent(Number(text))}
        value={String(percent)}
      />
      <VictoryPie
        padAngle={1}
        data={getData(percent)}
      
        innerRadius={80}
        cornerRadius={0}
        labels={() => null}
        style={{
          data: {
            fill: ({ index }) => {
              const color = index < percent /2 ? 'gold' : 'gray';
              return color;
            },
          },
        }}
      />
      <Text style={styles.output}>
       {percent}%
     </Text>
    </View>
   );
};

export default MainScreen;