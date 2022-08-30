import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

// expo install expo-local-authentication

/*

For testing face id we need a standalone app for ios:
expo install expo-dev-client

If you don't have eas installed then install using the following command:
npm install -g eas-cli

eas login
eas build:configure

Build for local development on iOS or Android:
eas build -p ios --profile development --local
OR
eas build -p android --profile development --local

May need to install the following to build locally (which allows debugging)
npm install -g yarn
brew install fastlane

After building install on your device:
For iOS (simulator): https://docs.expo.dev/build-reference/simulators/
For Android: https://docs.expo.dev/build-reference/apk/

Run on installed app:
expo start --dev-client

*/

export default function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function authenticate() {
      const result = await LocalAuthentication.authenticateAsync();
      setIsAuthenticated(result.success);
    }
    authenticate();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{isAuthenticated ? "Here's some sensitive info!" : "Uh oh! Access Denied"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
