# CSS RESPONSIVO
## O que vamos aprender?
Sabe quando estamos fazendo alguma aplicação linda e, ao redimensionarmos a janela, algumas imagens, divs e/ou textos "quebram", ficando fora de escala?

Já pensou se houvesse como criar <strong><em>breakpoints</em></strong> para mudar o tamanho das imagens, ordem dos elementos dentro das divs e/ou tamanho da fonte dependendo da largura da tela?

Isso deixaria sua aplicação muito mais responsiva e adaptável, sendo de fato, <strong><em>MARAVILHOSO</em></strong>, certo?

Bem, <em>seus problemas acabaram!</em>

Hoje aprenderemos sobre o conceito mobile first e como usar as media queries, que, servindo como "<em>breakpoints</em>",  te ajudarão a aplicar estilo a um bloco de elementos somente quando a regra desse breakpoint estiver satisfeita! 

### Você será capaz de:
- Entender o conceito mobile first, tal como sua aplicação;
- Aplicar estilos a um grupo de elementos quando um critério for cumprido;

## Porque isso é importante?
<strong>Mobile First:</strong>
Há uma serie de motivos que tornam esse conceito importante, dentre eles: 
- Carregamento mais rápido em dispositivos móveis;
- Facilidade em adaptar para telas maiores o que já foi projetado para telas menores;

<strong>Media queries:</strong>
Como já citado, media queries nos possibilita à:
- Criar regras baseadas na mídia de exibição;
- Estruturar melhor páginas, melhorando a experiência do usuário final;
## Conteúdos

### Mobile first
Partindo de um exemplo simples, o que é mais prático arrumar dentro de uma pequena caixa, um quilo de algodão ou um quilo de chumbo? 🤔📦

Considerando o volume dos dois, um quilo de chumbo parece mais prático de manusear, certo? Esse pensamento, em parte, também pode ser aplicado para entender mobile first!

Desenvolver o CSS para dispositivos móveis primeiro costuma ser mais simples pois, na mudança para telas maiores, há mais disponibilidade de espaço. Trazendo o exemplo para o desenvolvimento web, <em>é mais prático orgarnizar dentro de uma <strong>pequena tela</strong> o conteúdo da página e depois reorganizar ele dentro de <strong>telas maiores</strong>!</em> 📱🖥️

Não só isso, mas você deve se lembrar que o conteúdo do CSS é lido em cascata, isso significa que disponibilizar na sua página web primeiro o conteúdo do mobile fará com que a experiência do usuário seja muito mais rápida!

Agora que você entendeu um pouco do conceito mobile first, vamos finalmente falar de código! #VQV

### Media queries
Entenderemos agora a sintaxe dessa técnica que, após estar no seu <em>cinto de utilidades dev</em>, te deixará muito <strike> acima da <em>média</em></strike> mais próximo de ser um ótimo desenvolvedor front-end!

Mas claro, como diria nosso querido Samurai <strong><em>Jack</em></strong> da Trybe: "<em>[A documentação é nossa amiga e nada nos faltará, use e abuse dela](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries)</em>!"

```css
/* Observe a sintaxe */
@media only screen and ( min-width : 600px ) and ( max-width : 1000px ) {

  html {
    background-color: blue;
  }

}

```

Sintaxe bem diferente para um CSS, não é? Não se preocupe, é estranho apenas nos primeiros contatos!

Certo, vamos dividir para <strike>conquistar</strike> entender:

<strong>@media:</strong> É uma <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/At-rule">at-rule</a> que contém condicionais para, caso o dispositivo de exibição a satisfaça, aplicar um bloco de estilos à sua página.

<strong>only:</strong> É o operador que informa que o estilo todo vai ser aplicado <em>apenas</em> se a query inteira condizer/"dar match". O uso desse operador é <strong>opcional</strong>. Também podemos usar o operador <strong>not</strong> para negar a query, fazendo o oposto de only.

<strong>screen:</strong> É o tipo de mídia na qual estamos trabalhando. As <em>media types</em> são: <strong>screen</strong> para telas, <strong>print</strong> para impressoras, <strong>speech</strong> para leitores de tela e <strong>all</strong> para todos os tipos de mídia. O tipo de mídia é <strong>opcional</strong> a menos que você use os operadores <em>only</em> ou <em>not</em>. Se não especificada, o valor padrão é <em>all</em>!

<strong>and:</strong> O operador lógico <em>and</em> serve tanto para combinar o <em>tipo de mídia</em> com <em>características de mídia</em> (como na sua primeira aplicação no exemplo, ligando screen com a verificação de largura mínima) quanto para acrescentar outras características de mídia (como na sua segunda aplicação no exemplo, agregando a verificação de largura máxima na query). Operadores lógicos que também aparecem são: <strong>not</strong> para negar <strong>toda a query</strong> e "<strong>,</strong>" (vírgula) funcionando como "ou". O jeito mais fácil de entender é testando, se utilize do exemplo! 😉

<strong>(min-width: 600px) e (max-width: 1000px):</strong> Uma das <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features"> media features</a> que nos vem a cabeça logo quando pensamos em responsividade é a largura da tela, mas não se engane, existem várias dessas expressões que, necessariamente, precisam estar dentro de parênteses. Elas servem como testes para as media queries.

<strong>{}:</strong> A essa altura você já deve presumir, porém sim, o que vem dentro do bloco das media queries é o CSS que será aplicado por ela!

Sim, infinitas possibilidades, não é? 🌌

Claro, há diversas libs e frameworks que ajudam bastante em responsividade, mas é super importante entender media queries e sobre o conceito mobile first <em>primeiro</em>!

Mas agora é hora de alvejar os exercícios, o inimigo agora é outro!

## Vamos praticar!

### Setup do exercício
Poucos sabem disso, mas há outro universo bem parecido com o nosso onde a Trybe é uma escola para heróis! Bem parecida com a nossa querida escola de tecnologia, a TroyBe Heroes é uma escola que ensina remotamente aos novos heróis como conquistar espaço em uma carreira cheia de oportunidades porém tão disputada, ensinando como salvar, impedir investidas de vilões e cooperar!

Mesmo sendo tão incrível, não há programadores lá com a ferramenta que agora você tem no seu cinto, Media Queries!

Vamos adicionar responsividade para a tela do Course deles?

<blockquote>Como vamos ficar redimensionando a tela a cada momento, uma boa sugestão é a extensão do google chrome "<a href="https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh/related?hl=pt">Window Resizer</a>"</blockquote>

Bem, agora alinhados, mão na massa!

<code>index.html</code>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trybe - 616</title>
  <link rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous"/>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="container">
    <div class="header-left container">
      <i class="fas fa-ellipsis-v"></i>
      <i class="fab fa-superpowers"></i>
      <p>Curso</p>
    </div>

    <div class="header-right container">
      <button>Faltas: 1/48</button>
      <i class="fas fa-briefcase"></i>
      <i class="fas fa-mask"></i>
      <i class="fas fa-th"></i>
    </div>
  </header>

  <main>
    <div class="main-header">
      <h1>Conteúdo</h1>
      <p>Veja o conteúdo de cada SuperMódulo, reassista aulas e acesse o conteúdo
        assíncrono da trilha do seu Herói interior.</p>
    </div>

    <ul class="container content">
      <li class="small-cards container">
        <i style="color: rgb(47, 193, 140);" class="fas fa-shapes"></i>
        <div>
          <p class="small-p">Módulo 1</p>
          <p class="bold-p">Fundamentos e Ferramentas do Herói</p>
        </div>
      </li>
      <li class="small-cards container">
        <i style="color: rgb(197, 172, 210);" class="fas fa-baby"></i>
        <div>
          <p class="small-p">Módulo 2</p>
          <p class="bold-p">Hostage Priority</p>
        </div>
      </li>
      <li class="small-cards container">
        <i style="color: rgb(3, 107, 82);" class="fas fa-map-marked"></i>
        <div>
          <p class="small-p">Módulo 3</p>
          <p class="bold-p">Objeção de Planos</p>
        </div>
      </li>
      <li class="small-cards container">
        <i style="color: rgb(65, 25, 127);" class="fas fa-people-carry"></i>
        <div>
          <p class="small-p">Módulo 4</p>
          <p class="bold-p">Trabalho em Grupo</p>
        </div>
      </li>
      <li class="big-cards container">
        <div>
          <p class="bold-p">Cantinho Charles Xavier</p>
          <p class="small-p">Cuidando do seu Héroi interior. Um gênio dá as dicas e
            mostra os caminhos certos para você se sentir bem. "<em>É necessário salvar
              a si mesmo antes de salvar o mundo!</em>"</p>
        </div>
        <i style="color: rgb(128, 183, 255);" class="fas fa-theater-masks"></i>
      </li>
      <li class="big-cards container">
        <div>
          <p class="bold-p">FLASHback de Aulas</p>
          <p class="small-p">Perdeu alguma aula? Quer rever a dica dos
            especialistas? Teve que resgatar um gato de cima de uma árvore?
            Este aqui é o lugar certo pra você!</p>
        </div>
        <i style="color: rgb(220, 205, 228);" class="fas fa-history"></i>
      </li>
    </ul>

    <div>
      <h2>Conteúdos Complementares</h2>
      <ul class="container content">
        <li class="big-cards container">
          <div>
            <p class="bold-p">Heróis em Alta</p>
            <p class="small-p">Quer saber como está a vida daquele que te fez amar seus
              poderes? Qual a roupa de Herói que mais vem sendo amada pelas crianças?</p>
          </div>
          <i style="color: rgb(47, 193, 140);"
            class="fas fa-chart-line"></i>
        </li>
        <li class="big-cards container">
          <div>
            <p class="bold-p">Equipes</p>
            <p class="small-p">Quer ficar de olho nas ligas, grupos e equipes que a
              TroyBe Heroes está aliada? Veja conteúdos que te deixará mais próximo
              delas!</p>
          </div>
          <i style="color: rgb(3, 107, 82);"
            class="fas fa-users"></i>
        </li>
      </ul>
    </div>
  </main>

  <footer class="container">
    <div class="footer-left container">
      <span>© TroyBe Heroes</span>
      <span>·</span>
      <span class="manual">Mandamentos de Herói Moderno</span>
    </div>
    <div class="footer-right">
      <span>Feito com propósito de ajudar a fixar os exercícios de CSS Responsivo, usando
        Font Awesome e 💚</span>
    </div>
  </footer>

</body>
</html>

```

<code>style.css</code>

```css
* {
  box-sizing: border-box;
  color: rgb(61, 73, 92);
  font-family: Verdana, Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

html {
  line-height: 1.5;
}

body {
  background-color: rgb(249, 249, 249);
}

header {
  background-color: white;
  border-bottom: 1px rgb(225, 229, 235) solid;
  font-size: 25px;
  height: 49.656px;
  position: fixed;
  top: 0;
  width: 100vw;
}

.container {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.header-left {
  margin-left: 30px;
  width: 125px;
}

.header-left p {
  font-size: 17px;
  font-weight: 600;
}

header .fas , header .fab , button , li , .manual {
  cursor: pointer;
}

.fa-superpowers {
  color: rgb(47, 193, 140);
  font-size: larger;
}

.header-right {
  margin-right: 26px;
  width: 308px;
  justify-content: space-evenly;
}

.header-right button {
  background-color: inherit;
  border: 1px rgb(240, 242, 245) solid;
  border-radius: 8%;
  font-size: 0.89rem;
  padding: 0.54vh 0.6vw;
}

main {
  margin: 77px auto 45px;
  max-width: 1209px;
}

.main-header {
  margin-bottom: 32px;
}

.main-header h1 {
  font-size: 1.9rem;
}

.content {
  flex-wrap: wrap;
}

li {
  background-color: white;
  list-style: none;
  margin: 16px 0;
}

li .fas {
  font-size: 130px;
  align-self: center;
}

.small-cards {
  width: 290px;
  height: 320px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}

.small-cards div {
  margin: 16px 16px 0 6px;
}

.small-p {
  font-size: 0.75rem;
  line-height: 1.08;
}

.bold-p {
  font-weight: 700;
  max-width: 200px;
}

.big-cards {
  height: 240px;
  width: 596px;
}

.big-cards div p {
  margin-left: 16px;
}

.big-cards i {
  margin: 0 40px;
}

div h2 {
  margin: 30px 0;
  font-size: 1.85rem;
}

footer {
  width: 100%;
  border-top: rgb(61, 73, 92) 1px solid;
  font-size: 0.75rem;
  padding: 14px 0;
  background-color: white;
}

.footer-left {
  width: 310px;
  margin-left: 10px;
  justify-content: space-evenly;
}

.manual {
  text-decoration: underline;
}

.footer-right {
  margin-right: 33px;
}

```

### Lista de exercícios
<strong>Exercício 0:</strong> Redimensione a tela algumas vezes, leia o HTML e o CSS. Conheça no que você está trabalhando, isso ajudará a resolver os exercícios!

<strong>Exercício 1:</strong> Adicione uma media query com a media feature de largura máxima na qual você identificou que o site começa a ficar "quebrado" (como sugestão 1200px). Diminua o tamanho da fonte o quanto julgar necessário.

<strong>Exercício 2:</strong> Faça o conteúdo principal ficar centralizado em coluna na tela, apenas um .big-cards ou dois .small-cards por linha.

<strong>Exercício 3:</strong> Adicione também 10px de margem nos dois títulos e no subtítulo.

<strong>Exercício 4:</strong> Altere para 1 a altura de linha de todos os elementos da página.

<strong>Exercício 5:</strong> Repare na página que a descrição do conteúdo está colada no título, dê uma pequena margem para resolver isto. O mesmo ocorre com o h1 na main do conteúdo.

<strong>Exercício 6:</strong> E se o dispositivo de exibição fosse menor? Vamos incluir nossos amigos móveis tambem?(sugestão de largura: 640px) Aproveite pra já remover o contador de faltas para essa versão.

<strong>Exercício 7:</strong> Remova também todo o conteúdo da classe footer-left da tela.

<strong>Exercício 8:</strong> Após as duas últimas mudanças, altere o tamanho e espaçamento dos itens da div na qual o botão estava. Ajeite também a margem do texto do footer.

<strong>Exercício 9:</strong> Chegou a hora de da classe .big-cards ter a mesma configuração que o .small-cards. Apenas um small-cards por linha e coluna. Diminuir a fonte de descrição seria interessante também!

Se tudo correu bem, sua página deve estar próxima a isto: <img alt="Imagem referência 1366px" src="https://drive.google.com/file/d/1F2auhweQGpetl-NtkxfdkahH5ogxSh4W/view?usp=sharing">
![Imagem referência 1366px](https://drive.google.com/file/d/1F2auhweQGpetl-NtkxfdkahH5ogxSh4W/view?usp=sharing)

### Exercícios bônus

## Recursos Adicionais

- <a href="https://youtu.be/H91DhKPjhPk">Uma masterclass da Rocketseat mostrando responsividade na prática!</a>
- <a href="https://youtu.be/SVwJA9aF2Cs">Um vídeo super interessante sobre mobile first!</a>
- <a href="https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00">Mobile First - Why It’s Important & How To Make It?</a>
- <a href="https://techjury.net/blog/mobile-vs-desktop-usage/#gref">Mobile vs. Desktop Usage Statistics 2021!</a>
- <a href="https://zellwk.com/blog/how-to-write-mobile-first-css/">How To Write Mobile-first. 🏆</a>
- <a href="https://geekflare.com/best-css-frameworks/">14 CSS Frameworks for Front-End Developers.</a>
- <a href="https://youtu.be/WcGPSeuJDJ0">Gustavo Guanabara falando e mostrando sobre responsividade para sites.</a>