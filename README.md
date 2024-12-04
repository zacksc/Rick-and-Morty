# Wikipedia do Rick and Morty

Bem-vindo ao *Wikipedia do Rick and Morty*! 🎉

Este projeto é uma aplicação simples feita com **React** e **Bootstrap**, que te permite buscar e exibir informações sobre os personagens do universo *Rick and Morty*. Se você já se perguntou como o Rick ou o Morty estão no momento, agora é só digitar o ID do personagem e ver o que acontece!

## O que aprendi

### 1. **React**: 
   - **Componentes**: Criei o componente principal, `App`, que é onde tudo acontece.
   - **useState**: Aprendi a usar o `useState` para guardar as informações que o usuário digita e as que a API retorna. Apliquei isso para guardar o nome, status, imagem, espécie e gênero do personagem.
   - **Interatividade**: Com o `onClick` e `onChange`, consegui fazer a aplicação reagir ao que o usuário faz — como quando clica no botão ou digita o ID.
   - **Requisições Assíncronas**: A API do *Rick and Morty* foi acessada com `fetch` e `async/await`, para buscar os dados e exibi-los na tela.
   - **Tratamento de Erros**: Se algo der errado, a aplicação avisa o usuário com um alerta para tentar outro ID.

### 2. **Bootstrap**:
   - **Input Bonito**: Usei o Bootstrap para dar um visual mais legal e profissional para o campo de input e o botão de busca.
   - **Responsividade**: Apliquei a classe `container` para fazer a interface da aplicação se adaptar bem em diferentes tamanhos de tela.
   - **Estilos para Botões e Imagens**: O botão ficou estilizado com o Bootstrap, e a imagem do personagem foi tratada com uma classe customizada para deixar tudo no lugar certo.

### 3. **Interação com APIs**:
   - Usei a API do *Rick and Morty* para buscar as informações sobre os personagens. Ao digitar um ID e clicar no botão, a aplicação traz os dados sobre aquele personagem e os exibe de forma simples.

### 4. **JSX e HTML**:
   - Em React, usei o **JSX**, que é uma mistura de HTML com JavaScript. Isso me permitiu mostrar informações na tela de forma fácil e rápida, como o nome do personagem, sua imagem, etc.

## Como Funciona

1. **Buscar Personagem**: Digite um ID no campo de entrada e clique no botão para buscar informações sobre o personagem.
2. **Exibir Dados**: Após a busca, o nome, imagem, status, espécie e gênero do personagem são mostrados na tela.

## Como Rodar o Projeto

Se quiser rodar o projeto na sua máquina, siga esses passos super simples:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/rick-and-morty-character-viewer.git
   ```

2. Vá até a pasta do projeto:
   ```bash
   cd rick-and-morty-character-viewer
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o projeto:
   ```bash
   npm start
   ```

5. Abra o navegador e vá até `http://localhost:3000` para começar a usar!

## Resumo

Esse projeto me ajudou a entender como usar **React** para criar interfaces dinâmicas e interativas. Com **Bootstrap**, consegui deixar a aplicação bonita e fácil de usar. Além disso, aprendi como consumir dados de uma API e exibir esses dados de forma simples e eficaz. 

Agora você também pode explorar o incrível universo de *Rick and Morty* e descobrir como está o seu personagem favorito, basta digitar o ID e pronto! 🛸✨

