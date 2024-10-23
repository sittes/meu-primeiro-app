import { StyleSheet, Platform,Text,View,Button } from 'react-native';




export default function HomeScreen() {
  return (
   <View style={styles.Container}>
    <Text style={styles.titleContainer}>Minha jornada no react native</Text>
    <Button   title="Criar conta" onPress={() => console.log("Button Pressed!")} />
   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    borderBlockColor: '#f64347',
    borderBottomWidth: 1,
    fontSize: 60,
    color: '#f64348',
  },
  Container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'flex-start',
   justifyContent: 'center',
   padding: 80,
  },
});
