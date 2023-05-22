import React from "react";
import Texto from "../../Componentes/Texto";
import { Image, StyleSheet, View } from "react-native";
import Botao from "../../Componentes/Botao";

export default function Detalhes({ detalhes }) {
    return <>
        <Texto style={estilos.nome}>{detalhes.nomeCesta}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={detalhes.imagemFazenda}></Image>
            <Texto style={estilos.nomeFazenda}>{detalhes.nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{detalhes.descricao}</Texto>
        <Texto style={estilos.preco}>{detalhes.preco}</Texto>
        <Botao descricao={detalhes.descBotao} onClick={clickBtnComprar}></Botao>
    </>
}

function clickBtnComprar ()
{
   alert('Inserido no carrinho');
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