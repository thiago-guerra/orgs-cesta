import { SafeAreaView, StatusBar, View } from 'react-native';
import Cesta from './src/Cesta/Index';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mockCesta from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratNegrito": Montserrat_700Bold
  });

  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mockCesta} />
    </SafeAreaView>
  );
}

