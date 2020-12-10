# react-native-native-modules

native module examples

## Installation

```sh
npm install react-native-native-modules
```

## Usage

```js
import {NativeModule, CalendarModule} from "react-native-native-modules";

// ...
// NativeModule
const result = await NativeModule.multiply(3, 7);

// CalendarModule
CalendarModule.createCalendarEvent(
    'Party', 
    '2020-01-01', 
    (response: string) => {
        console.log(response);
    }
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
