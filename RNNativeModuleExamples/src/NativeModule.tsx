import { NativeModules } from 'react-native';

const { NativeModule } = NativeModules;

interface NativeInterface {
  multiply(a: number, b: number): Promise<number>;
}

export default NativeModule as NativeInterface;
