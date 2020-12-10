import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { MapViewModule } from 'react-native-native-modules';

interface MapViewProps {
  onGoBack?(): void;
}

const { width, height } = Dimensions.get('window');
export default function MapView({ onGoBack }: MapViewProps) {
  var region = {
    latitude: 37.48,
    longitude: -122.16,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const _onRegionChange = (event: any) => {
    console.log('on region change', event);
  };

  return (
    <View style={{ flex: 1, width: width, height: height }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={onGoBack}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
      <MapViewModule
        onRegionChange={_onRegionChange}
        region={region}
        zoomEnabled={true}
        style={{ flex: 9 }}
      />
    </View>
  );
}
