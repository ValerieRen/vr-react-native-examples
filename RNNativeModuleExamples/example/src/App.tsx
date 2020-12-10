import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Calendar from './Calendar';
import MapView from './MapView';

export default function App() {
  const [calendar, setCalendar] = React.useState(false);
  const [mapView, setMapView] = React.useState(false);

  const showCalendar = () => {
    setCalendar(true);
  };

  const showMapView = () => {
    setMapView(true);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {calendar ? (
        <Calendar onGoBack={() => setCalendar(false)} />
      ) : mapView ? (
        <MapView onGoBack={() => setMapView(false)} />
      ) : (
        <>
          <TouchableOpacity onPress={showCalendar}>
            <Text>Calendar Example</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showMapView}>
            <Text>Map View Example</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
