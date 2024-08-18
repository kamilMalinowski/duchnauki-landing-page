import "./App.scss";

import IconArrowDown from "./components/icons/IconArrowDown";
import IconBook from "./components/icons/IconBook";
import IconCloseX from "./components/icons/IconCloseX";
import IconGlob from "./components/icons/IconGlob";
import IconGoDown from "./components/icons/IconGoDown";
import IconGoTop from "./components/icons/IconGoTop";
import IconHands from "./components/icons/IconHands";
import IconHat from "./components/icons/IconHat";
import IconInfo from "./components/icons/IconInfo";
import IconOpenNew from "./components/icons/IconOpenNew";
import IconPlus from "./components/icons/IconPlus";
import IconWait from "./components/icons/IconWait";

import IconInstagramBig from "./components/icons/IconInstagramBig";
import IconFacebookBig from "./components/icons/IconFacebookBig";
import IconYouTubeBig from "./components/icons/IconYouTubeBig";

import IconMailBig from "./components/icons/IconMailBig";
import IconStarBig from "./components/icons/IconStarBig";
import IconPhoneBig from "./components/icons/IconPhoneBig";
import IconGiftBig from "./components/icons/IconGiftBig";
import IconScreenBig from "./components/icons/IconScreenBig";

import IconDuchNauki from "./components/icons/IconDuchNauki";


import Header from "./components/header/Header";
import Nav from "./components/header/Nav";

import Billboard from "./components/billboard/Billboard";
function App() {
  return (
    <>
      <Header>
        <div className="main-header__wrapper">
          <Button type="link" href="">
            <Icon name="duch-nauki" /> DuchNauki
          </Button>
          <Nav>
          <Button type="button" variant="menu">
            <span></span>
            <span></span>
            <span></span>
          </Button>
            <ul className="nav__list">
              <li>
                <Button type="link" href="">
                  <Icon name="book" />
                  Wprowadzenie
                </Button>
              </li>
              <li>
                <Button type="link" href="">
                  <Icon name="hat" />
                  Demo
                </Button>
              </li>
              <li>
                <Button type="link" href="">
                  <Icon name="info" />
                  FAQ
                </Button>
              </li>
              <li>
                <Button type="link" href="">
                  <Icon name="hands" />
                  Kontakt
                </Button>
              </li>
              <li>
                <Button type="button">
                  <Icon name="glob" /> Polski <Icon name="arrow-down" />
                </Button>
                <ul className="nav__sub-list">
                  <li>
                    <Button type="button">
                      <Icon name="glob" /> Polski
                    </Button>
                  </li>
                  <li>
                    <Button type="button">
                      <Icon name="glob" /> English
                    </Button>
                  </li>
                </ul>
              </li>
            </ul>
          </Nav>
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
        <Button type="button">
          <Icon name="go-top" />
        </Button>
        <Button type="link" href="">
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

function Footer({ children }) {
  return <footer>{children}</footer>;
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

function Button({ children, type, href, onClick, ariaLabel, variant }) {
  return (
    <>
      {type === "button" && (
        <button
          aria-label={ariaLabel}
          className={variant ? `button ${variant}` : "button"}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "link" && (
        <a
          href={href}
          aria-label={ariaLabel}
          rel="nofollow noreferrer noopener"
          className={variant ? `button ${variant}` : "button"}
        >
          {children}
        </a>
      )}
      {type === "card" && <div className="button card">{children}</div>}
    </>
  );
}

function Icon({ name }) {
  return (
    <>
      {name === "arrow-down" && <IconArrowDown />}
      {name === "book" && <IconBook />}
      {name === "close" && <IconCloseX />}
      {name === "glob" && <IconGlob />}
      {name === "go-down" && <IconGoDown />}
      {name === "go-top" && <IconGoTop />}
      {name === "hands" && <IconHands />}
      {name === "hat" && <IconHat />}
      {name === "info" && <IconInfo />}
      {name === "open-new" && <IconOpenNew />}
      {name === "plus" && <IconPlus />}
      {name === "wait" && <IconWait />}

      {name === "instagram" && <IconInstagramBig />}
      {name === "facebook" && <IconFacebookBig />}
      {name === "youtube" && <IconYouTubeBig />}
      {name === "mail" && <IconMailBig />}
      {name === "star" && <IconStarBig />}
      {name === "phone" && <IconPhoneBig />}
      {name === "gift" && <IconGiftBig />}
      {name === "screen" && <IconScreenBig />}
      {name === "duch-nauki" && <IconDuchNauki />}
    </>
  );
}
