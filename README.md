<h1 align="center">
     :memo:<a href="#" alt="Code-Leap NetWork"> Code Leap Network </a>
</h1>

<h3 align="center">
     Your favorite social network! :floppy_disk:
</h3>

<h4 align="center">
	🚧   Concluded 🚀 🚧
</h4>

Table of Contents
=================
<!--ts-->
   * [About the project](#-about-the-project)
   * [Functionalities](#-functionalities)
   * [Layout](#-layout)
     * [Web](#web)
   * [How to run the project](#-how-to-run-the-project)
     * [Prerequisites](#prerequisites)
     * [Running the Application](#runnin-the-application)
   * [Technologies](#-Technologies)
     * [WebSite](#WebSite)
<!--te-->


## 💻 About the project

<p>Welcome to the Code Leap Network! Code Leap is a social network of developers who, in their own applications, interact through the CodeLeap api. It's fun!. </p>
<p> The project was carried out using React, with Next Js to help create the features. To manage the global state, I used Redux. </p>
<p> In development, Eslint was used to help clean up the code. </p>
The following folder structure was used: 

```
├── src
│   ├── components
│   ├── pages
│   ├── redux
│   ├── services
│   ├── slices
│   ├── styles
│   ├── utils

```

<p>The deployment was done on Vercel, so you can use the app without having to download and run it on your port 3000! https://dev-finder-omega.vercel.app/ </p>
  			
---

## ⚙️ Funcionalidades

- [x] Na tela inicial o usuário pode digitar um nome para buscar na API do Github.
  - [x] Ao clicar em search, um card é mostrado com algumas informações do usuário buscado.
  - [x] Clicando no card, o usuário é redirecionado para a página de perfil, contendo mais informações do usuário do Github pesquisado, e seus repositórios em cards ordenados pela quantidade de estrelas.
  - [x] Os cards possuem o nome do repositório, a descrição e a contagem de estrelas.
  - [x] O usuário pode clicar em fazer uma nova pesquisa e retornar para a tela inicial. 
  - [x] O usuário pode pesquisar na tela de perfil diretamente pelo campo de busca do cabeçalho sem precisar voltar à tela inicial. 
   
---

## 🎨 Layout

### Mobile

<p align="center">
  <img alt="MobileHome" title="#MobileHome" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/mobile-home.png" width="200px">

  <img alt="MobileProfileDetails" title="#MobileProfileDetails" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/mobile-profile-details.png" width="200px">
  
  <img alt="MobileProfileRepos" title="#MobileProfileRepos" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/mobile-profile-repos.png" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="WebHome" title="#WebHome" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-home.png" width="400px">
  
  <img alt="WebHomeDetails" title="#WebHomeDetails" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-home-details.png" width="400px">

  <img alt="WebProfileDetails" title="#WebProfileDetails" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-profile-details.png" width="400px">
  
  <img alt="WebProfileRepos" title="#WebProfileRepos" src="https://github.com/JoaoGabrielVargas/dev-finder/blob/main/src/assets/web-profile-repos.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


## 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone git@github.com:JoaoGabrielVargas/dev-finder.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd dev-finder

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta indicada pelo VITE. Acesse o link no terminal! :smiley:

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

## **Website**  ([React](https://reactjs.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Vite](https://vitejs.dev/)**
-   **[React Loading](https://www.npmjs.com/package/react-loading)**
-   **[EsLint](https://eslint.org/)**
-   **[Vercel](https://vercel.com/)**

> Veja o arquivo  [package.json](https://github.com/JoaoGabrielVargas/dev-finder/blob/main/package.json)
---

## 🦸 Autor

<a href="https://www.linkedin.com/in/joaogabrielvargas/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/106772621?v=4" width="100px;" alt="João Gabriel Vargas"/>
 <br />
 <sub><b>João Gabriel Vargas</b></sub></a> 🚀
 <br />

-   **[LinkedIn](https://www.linkedin.com/in/joaogabrielvargas/)**

---

Feito com ❤️ por João Gabriel 👋🏽 [Entre em contato!](https://www.linkedin.com/in/joaogabrielvargas/)
