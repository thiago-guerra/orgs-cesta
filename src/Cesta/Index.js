import { StyleSheet, View } from 'react-native';
import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo}/> 
        {/* assim passa o obj desconstruído */}
        <View style={estilos.cesta}>
            <Detalhes detalhes={detalhes}/>
            {/*assim passa objeto inteiro, podendo navegar pelas props */}
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});