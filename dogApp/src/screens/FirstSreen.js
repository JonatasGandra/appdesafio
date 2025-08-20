import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

export default function TelaInicial({ navigation }) {
    return (
        <View style={estilos.container}>
            <Image
                source={require('../images/casual_dog.png')}
                style={estilos.imgCachorro}
            />
            <Text style={estilos.titulo}>Ótimo dia!</Text>
            <Text style={estilos.subtitulo}>Como deseja acessar?</Text>

            <TouchableOpacity style={estilos.botaoAcesso}>
                <View style={estilos.viewAcesso}>
                    <Image
                        source={require('../images/Google.png')}
                        style={estilos.imgGoogle}
                    />
                    <Text style={estilos.textoBotao1}>Como deseja acessar?</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoOpcao} onPress={() => navigation.navigate('Login')}>
                <Text style={estilos.textoBotao2}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCachorro: {
        marginBottom: 20,
    },
    imgGoogle: {
        width: 25,
        height: 25,
    },
    viewAcesso: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        paddingLeft: 15,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 13,
        color: '#888',
        marginBottom: 20,
    },
    botaoAcesso: {
        backgroundColor: '#14C871',
        borderRadius: 5,
        width: 350,
        height: 50,
        marginBottom: 20,
    },
    botaoOpcao: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#14C871',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao1: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
    textoBotao2: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
});
