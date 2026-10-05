# Trabalho React Native - Consumo de API

App em React Native com Expo que consome a Fake Store API (https://fakestoreapi.com).

Telas: Login, Produtos (com filtro por categoria), Detalhes do produto e Informações do grupo.

## Integrantes

| Nome | RA |
| --- | --- |
| Carlos Eduardo Zanin | 1138275 |
| João Vitor da Silva | 1138170 |
| Leonardo Grimm Maziero | 1137914 |
| Pedro Henrique Moreschi Rizzotto | 1138024 |

## Como rodar

Precisa ter o Node.js instalado e o app Expo Go no celular.

1. Clonar o repositório:

```bash
git clone https://github.com/PedroRizzotto/trabalho-react-loja.git
cd trabalho-react-loja
```

2. Instalar as dependências:

```bash
npm install
```

3. Rodar o projeto:

```bash
npx expo start
```

4. Ler o QR Code com o app Expo Go no celular.

## Usuários para login

Os usuários disponíveis podem ser vistos acessando o endpoint:

```
GET https://fakestoreapi.com/users
```

Usar os campos `username` e `password` de algum usuário da lista. Exemplo:

- usuário: `johnd`
- senha: `m38rmF$`
