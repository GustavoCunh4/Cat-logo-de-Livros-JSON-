📚 Catálogo de Livros
Um projeto de catálogo de livros que permite adicionar, buscar, avaliar e listar livros utilizando HTML, CSS e JavaScript. Os dados dos livros são salvos no localStorage em formato JSON, permitindo que sejam preservados mesmo ao recarregar a página.

📋 Funcionalidades
Adicionar Livro: Adiciona um novo livro ao catálogo com informações como título, autor, gênero e ano de publicação.
Buscar Livro: Permite buscar livros no catálogo com base em título, autor, gênero ou ano.
Avaliar Livro: Cada livro pode ser avaliado de 1 a 5, e a média das avaliações é exibida.
Remover Livro: Remove um livro do catálogo.
Persistência de Dados: Utiliza localStorage para armazenar o catálogo no navegador em formato JSON.

🚀 Tecnologias Utilizadas
HTML: Estrutura do projeto e formulário de entrada.
CSS: Estilização da interface, com foco em responsividade e experiência do usuário.
JavaScript: Lógica do projeto para manipulação de dados e armazenamento no localStorage.

📂 Estrutura de Arquivos
Projeto/
├── index.html          # Estrutura principal do projeto
├── style.css           # Estilos para o layout e componentes
└── script.js           # Lógica para adicionar, buscar e avaliar livros

🛠️ Instalação e Uso
Clone o repositório ou faça o download do código.
Abra o arquivo index.html no seu navegador para visualizar o projeto.
Adicionando Livros
Preencha o formulário com o título, autor, gênero e ano de publicação e clique em "Adicionar Livro".
Buscando Livros
Digite um termo no campo de busca e clique em "Buscar" para encontrar livros no catálogo.
Avaliando Livros
Para avaliar um livro, selecione uma nota de 1 a 5 no menu suspenso e clique no botão "Avaliar".
Removendo Livros
Clique no botão "Remover" ao lado do livro que deseja excluir do catálogo.

📦 Salvamento de Dados
Os dados são armazenados no navegador usando localStorage. Toda vez que um livro é adicionado, removido ou avaliado, o catálogo atualizado é salvo em JSON.

🖌️ Estilização
O projeto utiliza um layout simples e responsivo, com botões e contêineres estilizados para melhorar a experiência do usuário.
As avaliações e remoções possuem efeitos visuais para facilitar a interação.

📈 Melhorias Futuras
Exibir uma mensagem quando o catálogo estiver vazio.
Adicionar confirmação ao remover um livro.
Permitir edição dos dados do livro.
