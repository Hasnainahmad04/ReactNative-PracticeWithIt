import React from 'react';
import Lottie from 'lottie-react-native';

function ActivityIndicator({visible = false}) {
  if (!visible) return;
  return (
    <Lottie
      source={require('../assets/loading.json')}
      loop
      autoPlay
      style={{zIndex: 2, backgroundColor: 'transparent'}}
    />
  );
}

export default ActivityIndicator;
