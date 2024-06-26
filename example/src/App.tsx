import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { colors } from './styles/globals';
import { Home } from './views/home';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
