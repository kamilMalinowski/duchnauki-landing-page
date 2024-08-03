import "./App.scss";

function App() {
  return (
    <>
      <Header>HEADER</Header>
      <Main>
        <Billboard>BILLBOARD</Billboard>
        <Hero>HERO</Hero>
        <Demo>DEMO</Demo>
        <FAQ>FAQ</FAQ>
        <Contact>CONTACT</Contact>
      </Main>
      <Footer>FOOTER</Footer>
    </>
  );
}

export default App;

function Header(children) {
  return <header>{children}</header>;
}

function Main(children) {
  return <main>{children}</main>;
}

function Billboard(children) {
  return <div>{children}</div>;
}

function Hero(children) {
  return <div>{children}</div>;
}

function Demo(children) {
  return <div>{children}</div>;
}

function FAQ(children) {
  return <div>{children}</div>;
}

function Contact(children) {
  return <div>{children}</div>;
}

function Footer(children) {
  return <footer>{children}</footer>;
}
