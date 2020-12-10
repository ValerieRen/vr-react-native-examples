import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeModule, CalendarModule } from 'react-native-native-modules';
import Moment from 'moment';

interface CalendarProps {
  onGoBack: () => void;
}

export default function Calendar({ onGoBack }: CalendarProps) {
  const [result, setResult] = React.useState<number | undefined>();
  const [calendar, setCalendar] = React.useState<string | undefined>();

  React.useEffect(() => {
    NativeModule.multiply(3, 7).then(setResult);
  }, []);

  const handleTriggerCalendar = () => {
    const curDT = Moment().format('DD/MM/YYYY, hh:mm:ss');
    CalendarModule.createCalendarEvent('Party', curDT, (response: string) => {
      setCalendar(response);
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={onGoBack}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <Text>Result: {result}</Text>
        <TouchableOpacity onPress={handleTriggerCalendar}>
          <Text>Trigger Calendar Module</Text>
        </TouchableOpacity>
        <Text>{calendar}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
