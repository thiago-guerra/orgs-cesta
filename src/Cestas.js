import { Image,  StyleSheet, Dimensions, Text} from 'react-native';
import Topo from '../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={Topo} style={estilos.topo}/>
    <Text style={estilos.Titulo}>Detalhes da Cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    Titulo: {
         position: 'absolute',
         textAlign: 'center',
         width: '100%',
         color: 'white',
         fontSize: 16,
         lineHeight: 26,
         top: 15,
         fontWeight: 'bold'
    }
});