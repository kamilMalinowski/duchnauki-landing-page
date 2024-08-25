import { useState } from "react";

import Button from "./components/ui/Button";
import Icon from "./components/ui/Icon";

import Header from "./components/header/Header";
import Nav from "./components/header/Nav";
import Billboard from "./components/billboard/Billboard";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  const [openLang, setOpenLang] = useState(false);

  function handleOpenLang() {
    setOpenLang((prevLang) => !prevLang);
  }

  return (
    <>
      <Header>
        <div className="main-header__wrapper">
          <div className="main-header__content">
            <Button type="link" href="https://duchnauki.pl/" variant="logo">
              <Icon name="duch-nauki" />
              <Text>DuchNauki</Text>
            </Button>
            <Nav>
              <Button type="button" variant="menu">
                <span></span>
                <span></span>
                <span></span>
              </Button>
              <ul className="nav__list">
                <li>
                  <Button
                    type="link"
                    href="introduction"
                    variant="primary radius-small  nav"
                  >
                    <Icon name="book" />
                    Wprowadzenie
                  </Button>
                </li>
                <li>
                  <Button
                    type="link"
                    href="demo"
                    variant="primary  radius-small nav disabled"
                  >
                    <Icon name="hat" />
                    Demo
                  </Button>
                </li>
                <li>
                  <Button
                    type="link"
                    href="faq"
                    variant="primary  radius-small nav disabled"
                  >
                    <Icon name="info" />
                    FAQ
                  </Button>
                </li>
                <li>
                  <Button
                    type="link"
                    href="contact"
                    variant="primary radius-small  nav disabled"
                  >
                    <Icon name="hands" />
                    Kontakt
                  </Button>
                </li>
              </ul>
              <div className="nav__lang">
                <Button
                  type="button"
                  variant="primary radius-small"
                  onClick={handleOpenLang}
                >
                  <Icon name="glob" /> Język
                  <Icon name="arrow-down" />
                </Button>
                <ul
                  className={
                    openLang ? "nav__lang-list open" : "nav__lang-list"
                  }
                >
                  <li>
                    <Button type="button" variant="primary  nav radius-small ">
                      <Icon name="pl" />
                      Polski
                    </Button>
                  </li>
                  <li>
                    <Button type="button" variant="primary  nav radius-small disabled">
                      <Icon name="en" />
                      English
                    </Button>
                  </li>
                  <li>
                    <Button type="button" variant="primary  nav radius-small disabled">
                      <Icon name="ge" />
                      Germany
                    </Button>
                  </li>
                  <li>
                    <Button type="button" variant="primary nav  radius-small disabled">
                      <Icon name="jp" />
                      Japan
                    </Button>
                  </li>
                </ul>
              </div>
            </Nav>
          </div>
        </div>
      </Header>
      <Main>
        <Billboard>
          <Heading type="h2">
            &quot;Szczęśliwy człowiek, który znalazł mądrość, i człowiek, który
            nabył rozumu, gdyż lepszy jej zysk niż srebro i lepszy jej plon niż
            złoto.&quot; (Prz 3:13-14)
          </Heading>
          <Button type="link" href="#hero" variant="icon">
            <Icon name="go-down" />
          </Button>
        </Billboard>
        <Hero>
          <section id="hero">
            <Heading type="h1">
              Odkrywaj Duchową Mądrość: Ścieżki Wiedzy i Źródła Wiary
            </Heading>
            <Text>
              Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po bogactwach
              duchowej mądrości. Tu, na krzyżujących się ścieżkach wiedzy i
              źródeł wiary, odkryjesz głębokie prawdy, które ułatwią ci
              zrozumienie Boskiej istoty i sensu Twojej egzystencji.
            </Text>
            <Button type="button">Zobacz demo</Button>
          </section>
          <section>
            <Heading type="h2">Jak to działa?</Heading>
            <ul>
              <li>
                <section>
                  <Icon name="phone" />
                  <Text>Opowiadasz nam o swoim projekcie</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="mail" />
                  <Text>Wysyłasz nam twoje materiały</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="screen" />
                  <Text>Tworzymy lekcję prezentacyjną</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="gift" />
                  <Text>Łączymy siły by projekt się rozwijał</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="star" />
                  <Text>Super nasz wspólny projekt!</Text>
                </section>
              </li>
            </ul>
          </section>
        </Hero>
        <Demo>
          <header>
            <Heading type="h2">Zobacz nasze gry i próbne lekcje</Heading>
            <Text>
              Interaktywna lekcja dostosowana do potrzeb młodzieży, zawierająca
              ciekawe wyzwania i tematy, które angażują i inspirują do
              refleksji.
            </Text>
            <section>
              <article>
                <Heading type="h3">Dla młodzieży</Heading>
                <Text>
                  Interaktywna lekcja dostosowana do potrzeb młodzieży, które
                  angażują i inspirują do refleksji.
                </Text>
                <a href="">
                  <Icon name="hat" />
                  Zobacz Demo
                </a>
              </article>
              <article>
                <Heading type="h3">Dla dorosłych</Heading>
                <Text>
                  Interaktywna lekcja dostosowana do potrzeb dorosłych
                </Text>
                <a href="">
                  <Icon name="hat" />
                  Zobacz Demo
                </a>
              </article>
              <article>
                <Heading type="h3">Dla dzieci</Heading>
                <Text>
                  Interaktywna lekcja dostosowana do potrzeb młodzieży,
                  zawierająca ciekawe wyzwania i tematy, które angażują i
                  inspirują do refleksji.
                </Text>
                <a href="">
                  <Icon name="hat" />
                  Zobacz Demo
                </a>
              </article>
              <article>
                <Heading type="h3">Inne</Heading>
                <Text>Mini gry i zabawy</Text>
                <a href="">
                  <Icon name="hat" />
                  Zobacz Demo
                </a>
              </article>
            </section>
          </header>
        </Demo>
        <FAQ>
          <header>
            <Heading type="h2">FAQs</Heading>
            <Text>
              Interaktywna lekcja dostosowana do potrzeb młodzieży, zawierająca
              ciekawe wyzwania i tematy, które angażują i inspirują do
              refleksji.
            </Text>
          </header>
          <section>
            <article>
              <button>
                <Heading type="h3">
                  Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po?
                </Heading>
                <Icon name="plus" />
              </button>
              <Text>
                Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po
                bogactwach duchowej mądrości. Tu, na krzyżujących się ścieżkach
                wiedzy i źródeł wiary, odkryjesz głębokie prawdy, które ułatwią
                ci zrozumienie Boskiej istoty i sensu Twojej egzystencji.
              </Text>
            </article>
          </section>
        </FAQ>
        <Contact>
          <header>
            <Heading type="h2">Napisz do nas!</Heading>
            <Text>
              Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po bogactwach
              duchowej mądrości. Tu, na krzyżujących się
            </Text>
          </header>
          <section>
            <Heading type="h2">Kontakt</Heading>
            <ul>
              <li>
                <section>
                  <Icon name="phone" />
                  <Text>123 456 789</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="mail" />
                  <Text>email@email.com</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="instagram" />
                  <Text>instagram</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="facebook" />
                  <Text>facebook</Text>
                </section>
              </li>
              <li>
                <section>
                  <Icon name="youtube" />
                  <Text>youtube</Text>
                </section>
              </li>
            </ul>
          </section>
        </Contact>
      </Main>
      <Footer>
        <Button type="button" variant="icon">
          <Icon name="go-top" />
        </Button>
        <Button type="link" href="https://kamil-mlu.pl/" variant="primary">
          <Icon name="open-new" /> Created by kamil-mlu.pl
        </Button>
      </Footer>
    </>
  );
}

export default App;

function Main({ children }) {
  return <main>{children}</main>;
}

function Hero({ children }) {
  return <div>{children}</div>;
}

function Demo({ children }) {
  return <div>{children}</div>;
}

function FAQ({ children }) {
  return <div>{children}</div>;
}

function Contact({ children }) {
  return <div>{children}</div>;
}

function Heading({ children, type }) {
  return (
    <>
      {type === "h1" && <h1>{children}</h1>}
      {type === "h2" && <h2>{children}</h2>}
      {type === "h3" && <h3>{children}</h3>}
    </>
  );
}

function Text({ children, variant }) {
  return <p className={variant ? `txt ${variant}` : "txt"}>{children}</p>;
}
