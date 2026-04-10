# Rick & Morty - Wiki (Vanilla JS Version) 🧪


## 📖 Sobre o Projeto
Uma Single Page Application (SPA) desenvolvida com **JavaScript puro (Vanilla)** para explorar o universo da série Rick and Morty. O projeto consome a API oficial e foca em conceitos fundamentais de desenvolvimento web, como manipulação assíncrona de dados, gerenciamento de estado da interface e arquitetura modular.

---

## 🛠️ Tecnologias e Conceitos Utilizados
* **HTML5 & CSS3:** Estrutura semântica e estilização responsiva.
* **JavaScript (ES6+):**
    * **Módulos:** Código organizado em arquivos independentes (`import`/`export`).
    * **Fetch API:** Consumo de dados via requisições HTTP assíncronas (`async/await`).
    * **Manipulação de DOM:** Criação dinâmica de elementos sem frameworks.
    * **URLSearchParams:** Gerenciamento dinâmico de filtros de busca.

---

## 🚀 Funcionalidades
* **Listagem Dinâmica:** Carregamento automático de personagens diretamente da API.
* **Filtros Avançados:** Busca combinada por Nome, Status (Vivo/Morto), Espécie e Gênero.
* **Sistema de Paginação:** Navegação fluida entre páginas com lógica de "raio" de visualização.
* **Modal de Detalhes:** Uso da tag `<dialog>` para exibir informações extras como origem, localização e quantidade de episódios.
* **Feedback Visual (Loading):** Tela de espera personalizada ("Viajando entre dimensões...") durante as requisições.
* **Relógio em Tempo Real:** Cabeçalho dinâmico que detecta o dispositivo do usuário para formatar data e hora.

---

## 🏗️ Organização do Código
O projeto foi estruturado seguindo o princípio de **Responsabilidade Única (Solid)**:

### 📂 Diretório Principal
* **`main.js`**: O "cérebro" da aplicação. Gerencia a inicialização, eventos de clique e coordena os módulos.
* **`api.js`**: Responsável exclusivo pela comunicação com a Rick and Morty API.

### 📂 Components (UI)
* **`cards.js`**: Transforma os dados em HTML e renderiza a grid de personagens.
* **`filter.js`** & **`search.js`**: Gerenciam as entradas do usuário para filtragem e busca.
* **`paginacao.js`**: Lógica de cálculo de páginas e renderização dos botões de navegação.
* **`modal.js`**: Controla a abertura, fechamento e o conteúdo dinâmico do modal de detalhes.
* **`menu-mobile.js`**: Gerencia a interatividade da barra lateral em dispositivos móveis.
* **`limparfiltros.js`**: Função utilitária para resetar os campos de busca.

### 📂 Utils (Helpers)
Arquivos de suporte para tarefas específicas e repetitivas:
* **`legend.js`**: Mapeia o status do personagem (Alive/Dead/Unknown) para o ícone visual correspondente.
* **`date.js`**: Lógica de formatação de data e hora adaptável para Mobile e Desktop.

---

## 🔧 Como visualizar
1. Clone o repositório.
2. Como o projeto utiliza **Módulos JS**, é necessário abrir o arquivo `index.html` utilizando um servidor local (como a extensão **Live Server** do VS Code).

---

## 👩‍💻 Autora
**Sofia Barboza Torquato** Estudante de Engenharia de Software | Desenvolvedora FullStack C# .NET

---

> **Status do Projeto:** 🟢 Versão Vanilla JS concluída. Este repositório serve como base técnica para estudos futuros de refatoração para Vue 3 e TypeScript.
