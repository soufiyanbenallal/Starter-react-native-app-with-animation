import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
        <ScrollView > 
            <Text>Not Found</Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
