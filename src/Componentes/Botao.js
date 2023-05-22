import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';

export default function Botao({ styleBtn, styleDesc, descricao, onClick }) {
    let estiloBtn = estilos.botao;
    let estiloText = estilos.textoBotao;

    if (styleBtn)
        estiloBtn = style.botao;
    if (styleDesc)
        estiloText = style.textoBotao;

    return <>
        <TouchableOpacity style={estiloBtn} onPress={onClick}>
            <Texto style={estiloText}>{descricao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});