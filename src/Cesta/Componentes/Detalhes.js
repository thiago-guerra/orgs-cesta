import React from "react";
import Texto from "../../Componentes/Texto";
import { Image, StyleSheet, View } from "react-native";
import LogoFazenda from '../../../assets/logo.png';

export default function Detalhes () {
    return <>
          <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={LogoFazenda}></Image>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda
                direto para sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratRegular'
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold'
    }
});