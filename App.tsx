import {
  useFonts,
  MontserratAlternates_400Regular,
  MontserratAlternates_300Light,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
  MontserratAlternates_800ExtraBold,
} from "@expo-google-fonts/montserrat-alternates";
import Routing from "./app/routing/Routing";

const App = () => {
  let [fonts] = useFonts({
    MontserratAlternates_400Regular,
    MontserratAlternates_300Light,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    MontserratAlternates_800ExtraBold,
  });

  if (!fonts) return null;
  return <Routing />;
};

export default App;
