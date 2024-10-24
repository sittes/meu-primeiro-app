import { StyleSheet, Platform,Text,View,Button } from 'react-native';

import  {StatusBar} from 'expo-status-bar';




export default function HomeScreen() {
  return (
   <View style={styles.Container}>
    <Text style={styles.titleContainer}>Minha jornada no react native</Text>
    <View style={styles.itemGrid}></View> 
    <StatusBar style="auto" />
    
     
   </View>
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    borderBlockColor: '#121212',
    borderBottomWidth: 1,
    fontSize: 24,
    color: '#121212',
    paddingBottom: 8,
  },
  Container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'flex-start',
   paddingTop: 80,
   paddingHorizontal:16,
  },
  itemGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 10,
  },
 
});
