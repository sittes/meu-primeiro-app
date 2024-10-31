import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ola Mundo</Text>
            <Text style={styles.text}>Ola Mundo</Text>
            <Text style={styles.text}>Mundo</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",

        fontSize: 30,
        color: "#54348",
        padding: 16

    },
    text: {
        fontSize: 40,
        color: "#64348",
    },
})









































// import { StyleSheet, Platform,Text,View,Button } from 'react-native';

// import  {StatusBar} from 'expo-status-bar';


// function Item(props:any){
//   return(
//     <View style={{
//         backgroundColor:props.bgColor, 
//         borderRadius:16, 
//         marginTop:16, 
//         alignItems:'center',
//         padding:16,
//         width:'100%'}}
//         >
//       <Text style={{fontWeight:'700'}}>{props.text}</Text>
//     </View>
//   )
// }

// export default function HomeScreen() {
//   return (
//    <View style={styles.Container}>
//       <Text style={styles.titleContainer}>Minha jornada no react native</Text>
//       <View style={styles.itemGrid}>
      
//       <Item text="Introdução ao react native" bgColor="#00ff9f"/> 
//       <Item text="Fundamentos " bgColor="#00ff9f"/>
//       <Item text="expor e expo cli" bgColor="#00ff9f"/>
//       <Item text="Estilização com StylesShets" bgColor="#00ff9f"/>
//       <Item text="Navegação entre telas" bgColor="#00ff9f"/>
//       <Item text="Scroll View e FlatList" bgColor="#00ff9f"/>
//       <Item text="Perifericos" bgColor="#00ff9f"/>
//       <Item text="Styles Componentes" bgColor="#00ff9f"/>
//       <Item text="temas e estilos Globais" bgColor="#00ff9f"/>
//       <Item text="Consumo de Apis" bgColor="#00ff9f"/>  
//       </View>
//       <StatusBar style="auto" />
//     </View>
   
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     borderBlockColor: '#121212',
//     borderBottomWidth: 1,
//     fontSize: 24,
//     color: '#121212',
//     paddingBottom: 8,
//   },
//   Container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'flex-start',
//    paddingTop: 80,
//    paddingHorizontal:16,
//   },
//   itemGrid: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 16,
//     marginTop: 10,
//   },
 
// });
