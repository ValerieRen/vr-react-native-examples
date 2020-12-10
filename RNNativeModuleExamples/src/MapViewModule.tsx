import React from 'react';
import { requireNativeComponent } from 'react-native';

interface Region {
  latitude: number;
  longitude: number;
  /**
   * Distance between the minimum and the maximum latitude/longitude
   * to be displayed.
   */
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MapViewModuleProps {
  style?: object;
  region?: Region;
  zoomEnabled?: boolean;
  onRegionChange?(event: any): void;
}

class MapViewModule extends React.Component<MapViewModuleProps, any> {
  _onRegionChange = (event: any) => {
    if (!this.props.onRegionChange) {
      return;
    }
    console.log('on region change module', event);

    // process raw event...
    this.props.onRegionChange(event.nativeEvent);
  };

  searchBarProps = {
    ...this.props,
    onRegionChange: this._onRegionChange,
  };

  render() {
    return <RNTMap {...this.searchBarProps} />;
  }
}

var RNTMap = requireNativeComponent('RNTMap');

// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
export default MapViewModule;
