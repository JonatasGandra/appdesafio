import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image, Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

export default function TelaLogin({ navigation }) {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [senha, setSenha] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={estilos.container}>

                <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.navigate('First')}>
                    <Image
                        source={require('../images/arrow.png')}
                        style={estilos.iconeVoltar}
                    />
                </TouchableOpacity>

                <Text style={estilos.titulo}>Acesse</Text>
                <View style={estilos.grupoInputs}>
                    <Text style={estilos.subtitulo}>Insira seus dados!</Text>

                    <Text style={estilos.tituloInput}>Email:</Text>
                    <TextInput
                        style={estilos.input}
                        placeholder="email"
                        keyboardType="default"
                    />

                    <Text style={estilos.tituloInput}>Senha:</Text>
                    <View style={estilos.containerSenha}>
                        <TextInput
                            style={estilos.inputSenha}
                            placeholder="senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={!mostrarSenha}
                        />
                        <Image
                            source={require('../images/lock.png')}
                            style={estilos.iconeCadeado}
                        />
                    </View>

                    <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                        <Text style={estilos.textoMostrarSenha}>
                            {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                        </Text>
                    </TouchableOpacity>

                    <View style={estilos.areaBotoes}>
                        <TouchableOpacity style={estilos.botaoLogin}>
                            <Text style={estilos.textoBotaoLogin}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.botaoCadastro}>
                            <Text style={estilos.textoBotaoCadastro}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={estilos.textoOutros}>Outras maneiras de entrar:</Text>

                <View style={estilos.areaRedes}>
                    <Image
                        source={require('../images/Google.png')}
                    />
                    <Image
                        source={require('../images/Facebook.png')}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingTop: 30,
        paddingRight: 30,
        paddingBottom: 50,
    },
    grupoInputs: {
        paddingTop: 10,
     },

    botaoVoltar: {
        position: 'absolute',
        paddingLeft: 30,
        paddingTop: 20,
    },

    iconeVoltar: {
        height: 30,
        width: 30,
    },

    areaBotoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
        paddingTop: 30,
        gap: 10,
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingTop: 40,
    },

    subtitulo: {
        fontSize: 18,
        color: '#888',
        marginBottom: 20,
    },

    tituloInput: {
        paddingBottom: 5,
        paddingTop: 10,
    },

    input: {
        height: 55,
        width: 350,
        backgroundColor: '#f0f0f0ff',
        borderRadius: 5,
        paddingLeft: 5,
    },

    containerSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0ff',
        borderRadius: 5,
        height: 55,
        width: 350,
        paddingRight: 10,
    },

    inputSenha: {
        flex: 1,
        paddingLeft: 5,
    },

    iconeCadeado: {
        width: 24,
        height: 24,
        tintColor: '#888',
    },

    textoMostrarSenha: {
        color: '#007BFF',
        marginTop: 5,
        marginBottom: 10,
    },

    botaoLogin: {
        backgroundColor: '#14C871',
        borderRadius: 5,
        width: 170,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotaoLogin: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },

    botaoCadastro: {
        backgroundColor: '#f0f0f0ff',
        borderRadius: 5,
        width: 170,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotaoCadastro: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    areaRedes: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        paddingTop: 40,
    },

    textoOutros: {
        fontSize: 15,
        alignSelf: 'center',
    },
});
