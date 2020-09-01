import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {
  init,
  addConnectionStatusListener,
  connect,
  disconnect,
  ConnectErrorCode,
  ConnectionStatus,
  ConnectionStatusIOS,
} from 'rongcloud-react-native-imlib-2';
import RongIMConfig from './rongim_config';
import Button from './Button';
import Card from './Card';

init(RongIMConfig.appKey);

let connectStatusListener: ((status: ConnectionStatus) => void) | undefined;

addConnectionStatusListener((status) => {
  console.log(`connect status ${status}`);
  if (connectStatusListener !== undefined) {
    connectStatusListener(status);
  }
});

function getConnectResultMessage(result: ConnectErrorCode | string): string {
  if (typeof result === 'string') {
    return `连接成功\n${result}`;
  }
  let text: string = '';
  switch (result) {
    case ConnectErrorCode.RC_CONNECTION_EXIST: {
      text = '连接已存在';
      break;
    }
  }
  return `连接结果\n${text}`;
}

function getConnectStatusText(status: ConnectionStatus): string {
  let text: string = '';
  switch (status) {
    case ConnectionStatusIOS.Connected: {
      text = '已连接';
      break;
    }
    case ConnectionStatusIOS.Connecting: {
      text = '连接中...';
      break;
    }
    case ConnectionStatusIOS.SignUp: {
      text = '已注销';
      break;
    }
    default: {
      text = status.toString();
    }
  }
  return `连接状态\n${text}`;
}

const App = () => {
  const [connectStatus, setConnectStatus] = useState<ConnectionStatus>();
  const [connectResult, setConnectResult] = useState<
    ConnectErrorCode | string
  >();

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
        setConnectResult(uid);
      },
      (error) => {
        console.log(`connect error ${error}`);
        setConnectResult(error);
      },
    );
  }

  function rongIMDisconnect() {
    disconnect(true);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          padding: 16,
          paddingTop: 60,
        }}>
        {connectStatus !== undefined ? (
          <Card title={getConnectStatusText(connectStatus)} />
        ) : undefined}
        <Button title={'连接'} onPress={rongIMConnect} />
        {connectResult !== undefined ? (
          <Card title={getConnectResultMessage(connectResult)} />
        ) : undefined}
        <Button title={'断开连接'} onPress={rongIMDisconnect} />
      </View>
    </>
  );
};

export default App;
