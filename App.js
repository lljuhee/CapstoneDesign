import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./dku_logo.png')}
        style={{width:300, height:300}}
      />
      <Text>Capstone Design - 2조 </Text>
      <Text>DKU 스터디룸 예약 시스템 </Text>
      <Button
        title = "Sign In"
      />
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
  buttonSize:{
    margin : 10
  },
  button:{
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10
  }
});
