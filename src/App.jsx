import "./App.scss";

function App() {
  return (
    <>
      <Header>
        <div>
          <a href="">🤪 logo</a>
          <nav>
            <ul>
              <li>
                <a href="">❤️Wprowadzenie</a>
              </li>
              <li>
                <a href="">💚Demo</a>
              </li>
              <li>
                <a href="">❤️FAQ</a>
              </li>
              <li>
                <a href="">💚Kontakt</a>
              </li>
              <button>🌐 Polski ⬇️</button>
            </ul>
          </nav>
        </div>
      </Header>
      <Main>
        <Billboard>
          <h2>
            &quot;Szczęśliwy człowiek, który znalazł mądrość, i człowiek, który
            nabył rozumu, gdyż lepszy jej zysk niż srebro i lepszy jej plon niż
            złoto.&quot; (Prz 3:13-14)
          </h2>
          <button>⬇️</button>
        </Billboard>
        <Hero>
          <section>
            <h1>Odkrywaj Duchową Mądrość: Ścieżki Wiedzy i Źródła Wiary</h1>
            <p>
              Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po bogactwach
              duchowej mądrości. Tu, na krzyżujących się ścieżkach wiedzy i
              źródeł wiary, odkryjesz głębokie prawdy, które ułatwią ci
              zrozumienie Boskiej istoty i sensu Twojej egzystencji.
            </p>
            <button>Zobacz demo</button>
          </section>
          <section>
            <h2>Jak to działa?</h2>
            <ul>
              <li>
                <section>
                  ❤️
                  <p>Opowiadasz nam o swoim projekcie</p>
                </section>
              </li>
              <li>
                <section>
                  💚
                  <p>Wysyłasz nam twoje materiały</p>
                </section>
              </li>
              <li>
                <section>
                  ❤️
                  <p>Tworzymy lekcję prezentacyjną</p>
                </section>
              </li>
              <li>
                <section>
                  💚
                  <p>Łączymy siły by projekt się rozwijał</p>
                </section>
              </li>
              <li>
                <section>
                  ❤️
                  <p>Super nasz wspólny projekt!</p>
                </section>
              </li>
            </ul>
          </section>
        </Hero>
        <Demo>
          <header>
            <h2>Zobacz nasze gry i próbne lekcje</h2>
            <p>
              Interaktywna lekcja dostosowana do potrzeb młodzieży, zawierająca
              ciekawe wyzwania i tematy, które angażują i inspirują do
              refleksji.
            </p>
            <section>
              <article>
                <h3>Dla młodzieży</h3>
                <p>
                  Interaktywna lekcja dostosowana do potrzeb młodzieży, które
                  angażują i inspirują do refleksji.
                </p>
                <a href="">❤️Zobacz Demo</a>
              </article>
              <article>
                <h3>Dla dorosłych</h3>
                <p>Interaktywna lekcja dostosowana do potrzeb dorosłych</p>
                <a href="">❤️Zobacz Demo</a>
              </article>
              <article>
                <h3>Dla dzieci</h3>
                <p>
                  Interaktywna lekcja dostosowana do potrzeb młodzieży,
                  zawierająca ciekawe wyzwania i tematy, które angażują i
                  inspirują do refleksji.
                </p>
                <a href="">❤️Zobacz Demo</a>
              </article>
              <article>
                <h3>Inne</h3>
                <p>Mini gry i zabawy</p>
                <a href="">❤️Zobacz Demo</a>
              </article>
            </section>
          </header>
        </Demo>
        <FAQ>
          <header>
            <h2>FAQs</h2>
            <p>
              Interaktywna lekcja dostosowana do potrzeb młodzieży, zawierająca
              ciekawe wyzwania i tematy, które angażują i inspirują do
              refleksji.
            </p>
          </header>
          <section>
            <article>
              <button>
                <h3>
                  Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po?
                </h3>
                🤡
              </button>
              <p>
                Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po
                bogactwach duchowej mądrości. Tu, na krzyżujących się ścieżkach
                wiedzy i źródeł wiary, odkryjesz głębokie prawdy, które ułatwią
                ci zrozumienie Boskiej istoty i sensu Twojej egzystencji.
              </p>
            </article>
          </section>
        </FAQ>
        <Contact>
          <header>
            <h2>Napisz do nas!</h2>
            <p>
              Witaj na DuchNauki.pl - Twoim niezwykłym przewodniku po bogactwach
              duchowej mądrości. Tu, na krzyżujących się
            </p>
          </header>
          <section>
            <h2>Kontakt</h2>
            <ul>
              <li>
                <section>
                  ❤️
                  <p>123 456 789</p>
                </section>
              </li>
              <li>
                <section>
                  💚
                  <p>email@email.com</p>
                </section>
              </li>
              <li>
                <section>
                  ❤️
                  <p>instagram</p>
                </section>
              </li>
              <li>
                <section>
                  💚
                  <p>facebook</p>
                </section>
              </li>
              <li>
                <section>
                  ❤️
                  <p>youtube</p>
                </section>
              </li>
            </ul>
          </section>
        </Contact>
      </Main>
      <Footer>
        <button>⬆️</button>
        <a href="">🌐 Created by kamil-mlu.pl</a>
      </Footer>
    </>
  );
}

export default App;

function Header({ children }) {
  return <header>{children}</header>;
}

function Main({ children }) {
  return <main>{children}</main>;
}

function Billboard({ children }) {
  return <div>{children}</div>;
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
