// variavel
const numero = 10;
numero = 20; // erro, pois nao se pode trocar o valor de uma constante

const frutas = [];
frutas.push("banana");

const pessoa = { id:1, nome: "Jose" };
pessoa.sexo = "M";
pessoa = { id: 2, nome: "Maria" }; // erro, pois nao pode alterar o objeto pessoa, tem que criar um novo const pessoa2

let cont = 0;

// funcoes
const some = (a, b) => a + b;


const App = () => {
    return (
        <View>

        </View>
    );
}

function App = () => {
    return (
        <View>

        </View>
    );
}

const App = () => <View></View>;

// propagacao
frutas.push(...["uva", "maca"]);
["banana", "uva", "maca"];

// desestruturacao
const { id, nome } = pessoa;

//modulos
export default pessoa;

export {frutas, soma};

import pessoa from "revisao";

import { frutas } from "revisao";

import { View } from "react-native";