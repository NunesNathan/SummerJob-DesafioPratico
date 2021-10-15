/* Exercicío 1 - Adicione uma Media query com a Media feature de largura máxima na qual você identificou que o site começa a ficar "quebrado" (como sugestão 1200px). Diminua o tamanho da fonte como julgar necessário. */ 

@media ( max-width : 1200px ) {
   .small-p {
    font-size: small;
  }
}

/* Exercicío 2 - Faça o conteúdo principal ficar centralizado na tela, apenas um .big-cards ou dois .small-cards por linha. */

@media ( max-width : 1200px ) {
  .small-p {
    font-size: small;
  }
  main {
    max-width: 596px;
  }
}

/* Exercicío 3 - Adicione também 10px de margem nos dois títulos e no subtítulo. */

@media ( max-width : 1200px ) {
  .small-p {
    font-size: small;
  }
  main {
    max-width: 596px;
  }
  .main-header, div h2{
    margin-left: 10px;
  }
}

/* Exercicío 4 - Altere para 1 a altura de linha de todos os elementos da página. */

@media ( max-width : 1200px ) {

  * {
    line-height: 1;
  }
  .small-p {
    font-size: small;
  }
  main {
    max-width: 596px;
  }
  .main-header, div h2{
    margin-left: 10px;
  }
}
/* Exercicío 5 - Repare na página que a descrição do conteúdo está colada no título, dê uma pequena margem para resolver isto. O mesmo ocorre com o h1 na main do conteúdo. */

@media ( max-width : 1200px ) {
  * {
    line-height: 1;
  }
  .small-p {
    font-size: small;
  }
  main {
    max-width: 596px;
  }
  .main-header, div h2{
    margin-left: 10px;
  }
  .bold-p, h1 {
    margin: 10px 0;
  }
}

/* Exercicío 6 - E se o dispositivo de exibição fosse menor? Vamos incluir nossos amigos móveis tambem?(sugestão de largura: 640px) Aproveite pra já remover o contador de faltas para essa versão. */

@media (max-width : 640px) {

  .header-right button {
    display: none;
  }
}

/* Exercicío 7 - Remova também todo o conteúdo da classe footer-left. */

@media (max-width : 640px) {

  .header-right button {
    display: none;
  }

  .footer-left {
    display: none;
  }
}

/* Exercicío 8 - Após as duas ultimas mudanças, altere o tamanho e espaçamento dos itens da div na qual o botão estava. Ajeite também a margem do texto do footer. */

@media (max-width : 640px) {

  .header-right button {
    display: none;
  }

  .footer-left {
    display: none;
  }

  .header-right {
    width: 140px;
    justify-content: space-between;
  }

  .footer-right {
    margin: 0 auto;
  }
}
/* Exercicío 9 - Chegou a hora de colocar cada contúdo em uma linha. Apenas um small-cards por linha, fazendo os big-cards virarem small-cards. Diminuir a fonte de descrição seria interessante também! */

@media (max-width : 640px) {

  .header-right button {
    display: none;
  }

  .footer-left {
    display: none;
  }

  .header-right {
    width: 140px;
    justify-content: space-between;
  }

  .footer-right {
    margin: 0 auto;
  }
  main {
    max-width: 291px;
  }

  .small-cards , .big-cards {
    height: 332px;
  }
  .big-cards {
    flex-direction: column;
    justify-content: space-evenly;
  }
  .big-cards i {
    order: -1;
  }
  .big-cards .small-p {
    margin: 25px 15px 0;
    font-size: 12px;
  }
}

/* Exercicío Bônus 1 - */
const body = document.querySelector('body');

const modals = () => {
  body.addEventListener('click', (e) => {
    if (Object.values(e.target.classList)[0] == 'pointer') {
      if (e.target.innerText.length > 1) {
        alert(e.target.innerText)
      } else {
        alert('Os heróis amam esse ícone!')
      }
      }
  })
}

modals()

