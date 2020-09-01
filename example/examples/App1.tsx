import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {
  init,
  addConnectionStatusListener,
  connect,
} from 'rongcloud-react-native-imlib-2';
import RongIMConfig from './rongim_config';
import Button from './Button';
import {ConnectionStatus} from 'rongcloud-react-native-imlib-2/lib/js/types';

init(RongIMConfig.appKey);

let connectStatusListener: ((status: ConnectionStatus) => void) | undefined;

addConnectionStatusListener((status) => {
  console.log(`connect status ${status}`);
  if (connectStatusListener !== undefined) {
    connectStatusListener(status);
  }
});

const App = () => {
  const [connectStatus, setConnectStatus] = useState<ConnectionStatus>();

  useEffect(() => {
    connectStatusListener = (status) => {
      setConnectStatus(status);
    };
    return () => {
      connectStatusListener = undefined;
    };
  }, []);

  function rongIMConnect() {
    connect(
      RongIMConfig.token,
      (uid) => {
        console.log(`connect success ${uid}`);
      },
      (error) => {
        console.log(`connect error ${error}`);
      },
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexWrap: 'wrap',
          padding: 16,
          paddingTop: 60,
        }}>
        <Button title={'连接'} onPress={rongIMConnect} />
      </View>
    </>
  );
};

export default App;
