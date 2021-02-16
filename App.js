/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      </View>
      <View style={styles.bottomBar}>
        <View style={{backgroundColor: 'yellow', flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{backgroundColor: 'white', height:26, width:26}}>
          </View>
          <Text>Home</Text>
        </View>
        <View style={{backgroundColor: 'green', flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Orders</Text>
        </View>
        <View style={{backgroundColor: 'white', flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Help</Text>
        </View>
        <View style={{backgroundColor: 'purple', flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Inbox</Text>
        </View>
        <View style={{backgroundColor: 'blue', flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: 'red',
    height: 54,
    flexDirection: 'row'
  },

  container: {
    flex: 1
  },

  content: {
    flex: 1,
    backgroundColor: 'pink'
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
