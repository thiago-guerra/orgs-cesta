import Texto from "../../Componentes/Texto";
import { Image, View, StyleSheet } from "react-native";

export default function Item({ item: { nome, imagem } }) {
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
});