import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type IProps = {
  title: string;
  onPress: () => void;
};

export default function (props: IProps) {
  const {title, onPress} = props;

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        padding: 16,
        margin: 8,
        borderRadius: 8,
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 18,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
