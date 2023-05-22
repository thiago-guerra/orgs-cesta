import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import Texto from "../../Componentes/Texto";
import TopoImage from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;
export default function Topo({ titulo }) {
    return <>
        <Image source={TopoImage} style={estilos.topo} />
        <Texto style={estilos.Titulo}>{titulo}</Texto>
    </>
}


const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
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
    },
});