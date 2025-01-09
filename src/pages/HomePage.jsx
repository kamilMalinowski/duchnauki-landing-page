import { useState } from "react";
import { NavLink } from "react-router";

import { faq } from "../data/faq";
import { infoCards } from "../data/infoCards";
import { linkCards } from "../data/linkCards";

import kids from "../assets/kids.png";
import adults from "../assets/adults.png";
import other from "../assets/other.png";
import teenagers from "../assets/teenagers.png";

import Header from "../components/header/Header";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Text from "../components/ui/Text";
import Footer from "../components/footer/Footer";
import Billboard from "../components/billboard/Billboard";

import "./HomePage.scss";

function HomePage() {
  const [openAnswerIndex, setOpenAnswerIndex] = useState(0);

  const handleOpenAnswer = (index) => {
    setOpenAnswerIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function handleBackToStart() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <>
      <Header />
      <Main>
        <Billboard>
          <Heading type="h2">
            &quot;Szczęśliwy człowiek, który znalazł mądrość, i człowiek, który
            nabył rozumu, gdyż lepszy jej zysk niż srebro i lepszy jej plon niż
            złoto.&quot; (Prz 3:13-14)
          </Heading>
          <Button type="button" ariaLabel="Go to introduction section" variant="icon icon--big">
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
              <NavLink
                to="/demos/other"
                className="button secondary maxContent"
              >
                Zobacz demo
              </NavLink>
            </section>
            <section>
              <Heading type="h2">Jak to działa?</Heading>
              <ul className="list">
                {infoCards.map((card) => (
                  <Card key={card.text} variant={card.variant} type="button">
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
                  <Button type="link" href="#"  variant="primary disabled">
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
                  <Button type="link" href="#" variant="primary disabled">
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
                  <NavLink to="/demos/other" className="button primary">
                    <Icon name="hat" />
                    Zobacz Demo
                  </NavLink>
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
                  <Button type="link" href="#" variant="primary  disabled">
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
              {faq.map((item, index) => (
                <article key={item.question} className="faq__article">
                  <button
                    className="faq__question-btn"
                    onClick={() => handleOpenAnswer(index)}
                  >
                    <Text variant="big bold">{item.question}</Text>
                    <div
                      className={`faq__icon-wrapper ${
                        openAnswerIndex === index ? "" : "close"
                      }`}
                    >
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
                {linkCards.map((card) => (
                  <Card
                    key={card.text}
                    variant={card.variant}
                    href={card.href}
                    type="link"
                  >
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
        <Button
        ariaLabel="Go to top of page"
          type="button"
          variant="icon icon--big"
          onClick={handleBackToStart}
        >
          <Icon name="go-top" />
        </Button>
        <Button type="link" href="https://kamil-mlu.pl/" variant="primary">
          <Icon name="open-new" /> Created by kamil-mlu.pl
        </Button>
      </Footer>
    </>
  );
}

export default HomePage;

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Hero({ children }) {
  return (
    <div className="hero" id="introduction">
      {children}
    </div>
  );
}

function Demo({ children }) {
  return (
    <div className="demo" id="demo">
      {children}
    </div>
  );
}

function FAQ({ children }) {
  return (
    <div className="faq" id="faq">
      {children}
    </div>
  );
}

function Contact({ children }) {
  return (
    <div className="contact" id="contact">
      {children}
    </div>
  );
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
