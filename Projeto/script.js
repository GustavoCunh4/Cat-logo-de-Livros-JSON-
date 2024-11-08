document.addEventListener('DOMContentLoaded', () => {
    const formLivro = document.getElementById('formLivro');
    const buscaInput = document.getElementById('busca');
    const buscarLivroButton = document.getElementById('buscarLivro');
    const listarLivrosButton = document.getElementById('listarLivros');
    const listaLivros = document.getElementById('listaLivros');

    let catalogo = [];

    formLivro.addEventListener('submit', (event) => {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const genero = document.getElementById('genero').value;
        const ano = document.getElementById('ano').value;

        const novoLivro = { titulo, autor, genero, ano, avaliacoes: [] };
        catalogo.push(novoLivro);

        salvarCatalogo();
        exibirCatalogo(catalogo);

        formLivro.reset();
    });

    buscarLivroButton.addEventListener('click', () => {
        const termoBusca = buscaInput.value.toLowerCase();
        const resultados = catalogo.filter(livro =>
            livro.titulo.toLowerCase().includes(termoBusca) ||
            livro.autor.toLowerCase().includes(termoBusca) ||
            livro.genero.toLowerCase().includes(termoBusca) ||
            livro.ano.includes(termoBusca)
        );

        exibirCatalogo(resultados);
    });

    listarLivrosButton.addEventListener('click', () => {
        exibirCatalogo(catalogo);
    });

    function exibirCatalogo(livros) {
        listaLivros.innerHTML = '';

        livros.forEach((livro, index) => {
            const mediaAvaliacoes = calcularMediaAvaliacoes(livro.avaliacoes);
            const livroDiv = document.createElement('div');
            livroDiv.innerHTML = `
                <strong>Título:</strong> ${livro.titulo} <br>
                <strong>Autor:</strong> ${livro.autor} <br>
                <strong>Gênero:</strong> ${livro.genero} <br>
                <strong>Ano:</strong> ${livro.ano} <br>
                <strong>Média das Avaliações:</strong> ${mediaAvaliacoes} <br>
                <select id="avaliacao-${index}">
                    <option value="" disabled selected>Escolha uma nota</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button class="avaliar" data-index="${index}">Avaliar</button>
                <button class="remover" data-index="${index}">Remover</button>
            `;

            listaLivros.appendChild(livroDiv);
        });

        document.querySelectorAll('.avaliar').forEach(button => {
            button.addEventListener('click', adicionarAvaliacao);
        });

        document.querySelectorAll('.remover').forEach(button => {
            button.addEventListener('click', removerLivro);
        });
    }

    function adicionarAvaliacao(event) {
        const index = event.target.getAttribute('data-index');
        const selectAvaliacao = document.getElementById(`avaliacao-${index}`);
        const avaliacao = parseInt(selectAvaliacao.value);

        if (!isNaN(avaliacao) && avaliacao >= 1 && avaliacao <= 5) {
            catalogo[index].avaliacoes.push(avaliacao);
            salvarCatalogo();
            exibirCatalogo(catalogo);
        }
    }

    function removerLivro(event) {
        const index = event.target.getAttribute('data-index');
        catalogo.splice(index, 1);
        salvarCatalogo();
        exibirCatalogo(catalogo);
    }

    function calcularMediaAvaliacoes(avaliacoes) {
        if (avaliacoes.length === 0) return 'Sem avaliações';
        const soma = avaliacoes.reduce((acc, nota) => acc + nota, 0);
        return (soma / avaliacoes.length).toFixed(2);
    }

    function salvarCatalogo() {
        localStorage.setItem('catalogo', JSON.stringify(catalogo));
    }

    function carregarCatalogo() {
        const catalogoSalvo = localStorage.getItem('catalogo');
        if (catalogoSalvo) {
            catalogo = JSON.parse(catalogoSalvo);
            exibirCatalogo(catalogo);
        }
    }

    carregarCatalogo();
});
