function GlobalStyle() { //Estilo global - reset css
  return (
    <style global jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
      font-family: 'Lato', sans-serif;
      list-style: none;
  }

    `}</style>
  );
}

export default function MyApp({ Component, pageProps }) { //Aplica em todas as páginas - Recurso do Next
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
}