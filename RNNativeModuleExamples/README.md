# react-native-native-modules

native module examples

## Run the example
```bash
terminal1: cd example && yarn install && yarn start
terminal2: yarn bootstrap && yarn example ios
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

// MapViewModule ios only
return (
    <>
    <MapViewModule
            onRegionChange={_onRegionChange}
            region={region}
            zoomEnabled={true}
            style={{ flex: 9 }}
        />
    </>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
