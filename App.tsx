import { View } from 'react-native';
import ScannerScreen from './src/screens/ScannerScreen'
import Header from './src/components/Header'
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
  });

  if (fontsLoaded) {
    return (
    <View>
      <Header />
      <ScannerScreen />
    </View>
    );
  }
}
