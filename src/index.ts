//  PRÁTICA GUIADA - Parte 1
// Crie um sistema de cadastro de usuários que contenha:

// 1. Type Alias para uma pessoa (User) com as propriedades id, name, email, password e role;

type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "NORMAL";
};

const client: TUser = {
  id: "23123",
  name: "adolfo",
  email: "adolfo@email.com",
  password: "123",
  role: "ADMIN",
};

// 2. Type Aliases de conta, com as propriedades account e permission:
//   a. AdminAccount
//   b. NormalAccount

type TAdminAccount = {
  account: string;
  permission: boolean;
};

type TNormalAccount = {
  account: string;
  permission: boolean;
};

//  PRÁTICA GUIADA - Parte 2
// Vamos continuar nosso sistema de cadastro de usuários criando:

// 1. Enum com valores ADMIN e NORMAL;
enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

const newClient: TUser = {
  id: "1",
  name: "Claudia",
  email: "email@mail.com",
  password: "2134",
  role: Role.ADMIN,
};
// 2. Tipo Intersection unindo: pessoa(User) + permissão (Role);
type TNormalUser = TUser & TNormalAccount;
type TAdminUser = TUser & TAdminAccount;

// 3. Um array de usuários que permite guardar apenas usuários do tipo User + Role;
type TUnionTypeArray = TNormalUser | TAdminUser;
const accountArray: TUnionTypeArray[] = [];
// 4. Crie duas pessoas, uma com permissão normal e a outra admin;
const userNormal: TNormalUser = {
  id: "2",
  name: "Alan",
  email: "email@mail.com",
  password: "2134",
  role: Role.NORMAL,
  account: "alan",
  permission: false,
};

const userAdmin: TAdminUser = {
  id: "4",
  name: "Leticia",
  email: "leticia@mail.com",
  password: "2133424",
  role: Role.ADMIN,
  account: "alan",
  permission: true,
};

// 5. Guarde essas pessoas no array de usuários.
accountArray.push(userNormal);
accountArray.push(userAdmin);

console.table(accountArray);
