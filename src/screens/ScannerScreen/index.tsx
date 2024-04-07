import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'

export default function App() {
  const [codeScanned, setCodeScanned] = useState(false); // Taranan barkodu kontrol etmek için bir bayrak tanımlıyoruz
  
  const handleCodeScanned = (data) => {
    if (!codeScanned) {
      console.log(data);
      setCodeScanned(true);
    }
  }

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []); // useEffect'i bir kere çağırmasını sağlar

  if (!permission?.granted) {
    return null;
  }

  return (
    <View style={styles.container}>
        <CameraView
          style={styles.frame}
          barcodeScannerSettings={{ barCodeTypes: ['qr'] }}
          onBarcodeScanned={handleCodeScanned}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  frame: {
    width: '80%',
    height: '40%',
    backgroundColor: 'transparent', // Çerçeve alanını saydam yapar
  },
});
