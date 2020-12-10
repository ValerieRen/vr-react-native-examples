import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;

interface CalendarInterface {
  createCalendarEvent(
    name: string,
    location: string,
    successCallback: (response: string) => void
  ): void;
}

export default CalendarModule as CalendarInterface;
