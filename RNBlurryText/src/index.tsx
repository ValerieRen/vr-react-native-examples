import React from 'react';
import { requireNativeComponent } from 'react-native';

interface BlurryTextInterface {
  blurRadius?: number;
  text: string;
  style?: object;
}

class BlurryText extends React.Component<BlurryTextInterface, any> {
  render() {
    return <RNBlurryText {...this.props} />;
  }
}

var RNBlurryText = requireNativeComponent('RNBlurryText');

export default BlurryText;
