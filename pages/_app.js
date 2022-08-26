function GlobalStyle() { //Estilo global - reset css
  return (
    <style global jsx>{`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
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