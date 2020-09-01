import React from 'react';
import {Text, View} from 'react-native';

type IProps = {
  title: string;
};

export default function (props: IProps) {
  const {title} = props;

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 16,
        borderRadius: 8,
        margin: 8,
        borderColor: 'gray',
      }}>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 18,
          textAlign: 'center',
          color: 'gray',
        }}>
        {title}
      </Text>
    </View>
  );
}
