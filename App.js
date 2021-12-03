import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import React from 'react';
import Routes from './navigation';
import { rootStore } from './store/rootStore';

export default function App() {
  return (
    <Provider rootStore={rootStore}>
      <Routes/>
      <StatusBar style="auto" />
    </Provider>
    
  );
}
