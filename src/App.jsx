import { useState } from "react";

import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import Icon from "./components/ui/Icon";

import Header from "./components/header/Header";
import Nav from "./components/header/Nav";
import Billboard from "./components/billboard/Billboard";
import Footer from "./components/footer/Footer";

import adults from "./assets/adults.png";
import teenagers from "./assets/teenagers.png";
import kids from "./assets/kids.png";
import other from "./assets/other.png";

import "./App.scss";

const cardsArr = [
  {
    icon: "phone",
    text: "Opowiadasz nam o swoim projekcie",
    variant: "grey",
  },
  {
    icon: "mail",
    text: "Wysyłasz nam twoje materiały",
    variant: "grey",
  },
  {
    icon: "screen",
    text: "Tworzymy lekcję prezentacyjną",
    variant: "grey",
  },
  {
    icon: "gift",
    text: "Łączymy siły by projekt się rozwijał",
    variant: "grey",
  },
  {
    icon: "star",
    text: "Super nasz wspólny projekt!",
    variant: "grey",
  },
];
const cardsArr2 = [
  {
    icon: "phone",
    text: "123 456 789",
    variant: "white",
  },
  {
    icon: "mail",
    text: "email@email.com",
    variant: "white",
  },
  {
    icon: "instagram",
    text: "instagram",
    variant: "blue",
  },
  {
    icon: "facebook",
    text: "facebook",
    variant: "blue",
  },
  {
    icon: "youtube",
    text: "youtube",
    variant: "blue",
  },
];

const faqArr = [
  {
    question: "Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po?",
    answer:
      "Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po bogactwach duchowej mądrości. Tu, na krzyżujących się ścieżkach wiedzy i źródeł wiary, odkryjesz głębokie prawdy, które ułatwią ci zrozumienie Boskiej istoty i sensu Twojej egzystencji.",
  },
  {
    question: "Jak znaleźć duchowe przewodnictwo na DuchNauki.pl?",
    answer:
      "DuchNauki.pl oferuje liczne zasoby do odkrywania duchowego przewodnictwa, w tym artykuły, poradniki oraz analizy tekstów świętych.",
  },
];

function App() {
  const [openLang, setOpenLang] = useState(false);

  function handleOpenLang() {
    setOpenLang((prevLang) => !prevLang);
  }

  const [openAnswerIndex, setOpenAnswerIndex] = useState(0);

  const handleOpenAnswer = (index) => {
    setOpenAnswerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
                    variant="primary radius-small nav"
                  >
                    <Icon name="book" />
                    Wprowadzenie
                  </Button>
                </li>
                <li>
                  <Button
                    type="link"
                    href="demo"
                    variant="primary radius-small nav disabled"
                  >
                    <Icon name="hat" />
                    Demo
                  </Button>
                </li>
                <li>
                  <Button
                    type="link"
                    href="faq"
                    variant="primary radius-small nav disabled"
                  >
                    <Icon name="info" />
                    FAQ
                  </Button>
                </li>
                <li>
                  <Button
                    type="link"
                    href="contact"
                    variant="primary radius-small nav disabled"
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
                    <Button
                      type="button"
                      variant="primary  nav radius-small disabled"
                    >
                      <Icon name="en" />
                      English
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="button"
                      variant="primary  nav radius-small disabled"
                    >
                      <Icon name="ge" />
                      Germany
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="button"
                      variant="primary nav  radius-small disabled"
                    >
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
          <div className="wrapper">
            <section className="hero__section" id="hero">
              <Heading type="h1">
                Odkrywaj Duchową Mądrość: Ścieżki Wiedzy i Źródła Wiary
              </Heading>
              <Text variant="big medium grey">
                Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po
                bogactwach duchowej mądrości. Tu, na krzyżujących się ścieżkach
                wiedzy i źródeł wiary, odkryjesz głębokie prawdy, które ułatwią
                ci zrozumienie Boskiej istoty i sensu Twojej egzystencji.
              </Text>
              <Button type="button" variant="secondary">
                Zobacz demo
              </Button>
            </section>
            <section>
              <Heading type="h3">Jak to działa?</Heading>
              <ul className="list">
                {cardsArr.map((card) => (
                  <Card key={card.text} variant={card.variant}>
                    <Icon name={card.icon} />
                    <Text variant="regular bold">{card.text}</Text>
                  </Card>
                ))}
              </ul>
            </section>
          </div>
        </Hero>
        <Demo>
          <div className="wrapper">
            <header>
              <Heading type="h2">Zobacz nasze gry i próbne lekcje</Heading>
              <Text variant="big medium grey">
                Interaktywna lekcja dostosowana do potrzeb młodzieży,
                zawierająca ciekawe wyzwania i tematy, które angażują i
                inspirują do refleksji.
              </Text>
            </header>
            <section className="demo__grid">
              <article className="demo__card column">
                <div className="demo__img-wrapper">
                  <img src={teenagers} alt="teenagers" />
                </div>
                <section className="demo__content">
                  <Heading type="h3">Dla młodzieży</Heading>
                  <Text>
                    Interaktywna lekcja dostosowana do potrzeb młodzieży, które
                    angażują i inspirują do refleksji.
                  </Text>
                  <Button type="link" variant="primary disabled">
                    <Icon name="wait" />W budowie
                  </Button>
                </section>
              </article>
              <article className="demo__card ">
                <div className="demo__img-wrapper">
                  <img src={kids} alt="kids" />
                </div>
                <section className="demo__content">
                  <Heading type="h3">Dla dzieci</Heading>
                  <Text>
                    Interaktywna lekcja dostosowana do potrzeb młodzieży,
                    zawierająca ciekawe wyzwania i tematy, które angażują i
                    inspirują do refleksji.
                  </Text>
                  <Button type="link" variant="primary disabled">
                    <Icon name="wait" />W budowie
                  </Button>
                </section>
              </article>
              <article className="demo__card active">
                <div className="demo__img-wrapper">
                  <img src={other} alt="other" />
                </div>
                <section className="demo__content">
                  <Heading type="h3">Inne</Heading>
                  <Text>
                    Mini gry i zabawy, które wciągną każdego entuzjastę zabawy
                  </Text>
                  <Button type="link" variant="primary">
                    <Icon name="hat" />
                    Zobacz Demo
                  </Button>
                </section>
              </article>
              <article className="demo__card ">
                <div className="demo__img-wrapper">
                  <img src={adults} alt="adults" />
                </div>
                <section className="demo__content">
                  <Heading type="h3">Dla dorosłych</Heading>
                  <Text>
                    Interaktywna lekcja dostosowana do potrzeb dorosłych
                  </Text>
                  <Button type="link" variant="primary disabled">
                    <Icon name="wait" />W budowie
                  </Button>
                </section>
              </article>
            </section>
          </div>
        </Demo>
        <FAQ>
          <div className="wrapper">
            <header>
              <Heading type="h2">FAQs</Heading>
              <Text variant="big medium grey">
                Interaktywna lekcja dostosowana do potrzeb młodzieży,
                zawierająca ciekawe wyzwania i tematy, które angażują i
                inspirują do refleksji.
              </Text>
            </header>
            <section className="faq__section">
              {faqArr.map((item, index) => (
                <article key={item.question} className="faq__article">
                  <button
                    className="faq__question-btn"
                    onClick={() => handleOpenAnswer(index)}
                  >
                    <Text variant="big bold">{item.question}</Text>
                    <div   className={`faq__icon-wrapper ${
                      openAnswerIndex === index ? "" : "close"
                    }`}>
                      <Icon name="close" />
                    </div>
                  </button>
                  <div
                    className={`faq__answer ${
                      openAnswerIndex === index ? "open" : ""
                    }`}
                  >
                    <Text variant="big medium">{item.answer}</Text>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </FAQ>
        <Contact>
          <div className="wrapper">
            <header className="contact__header">
              <Heading type="h2">Napisz do nas!</Heading>
              <Text variant="big medium">
                Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po
                bogactwach duchowej mądrości. Tu, na krzyżujących się
              </Text>
            </header>
            <section className="contact__section">
              <Heading type="h3">Kontakt</Heading>
              <ul className="list">
                {cardsArr2.map((card) => (
                  <Card key={card.text} variant={card.variant}>
                    <Icon name={card.icon} />
                    <Text variant="regular bold">{card.text}</Text>
                  </Card>
                ))}
              </ul>
            </section>
          </div>
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
  return <main className="main">{children}</main>;
}

function Hero({ children }) {
  return <div className="hero">{children}</div>;
}

function Demo({ children }) {
  return <div className="demo">{children}</div>;
}

function FAQ({ children }) {
  return <div className="faq">{children}</div>;
}

function Contact({ children }) {
  return <div className="contact">{children}</div>;
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
