// EXERCÍCIO DE FIXAÇÃO
// 1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//   a. nome, que é uma string;
//   b. idade, que é um número;
//   c. corFavorita, que é uma string.
// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
// que todos os objetos tenham as mesmas propriedades.
// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.

enum RainbowColor {
  YELLOW = "Yellow",
  ORANGE = "Orange",
  RED = "Red",
  BLUE = "Blue",
  INDIGO = "Indigo",
  GREEN = "Green",
  PURPLE = "Purple",
}

type TPerson = {
  name: string;
  age: number;
  favoriteColor: string;
};

const person: TPerson[] = [
  {
    name: "Luana",
    age: 26,
    favoriteColor: RainbowColor.PURPLE,
  },
  {
    name: "Adolfo",
    age: 28,
    favoriteColor: RainbowColor.INDIGO,
  },
  {
    name: "Valeria",
    age: 55,
    favoriteColor: RainbowColor.YELLOW,
  },
];

console.table(person);
