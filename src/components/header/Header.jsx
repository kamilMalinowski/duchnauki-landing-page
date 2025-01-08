import { useState, useEffect } from "react";

import { Link, NavLink, useLocation } from "react-router";

import Icon from "../ui/Icon";
import Text from "../ui/Text";
import Nav from "../header/Nav";
import Button from "../ui/Button";

import "./Header.scss";

function Header() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (location.hash) {
      setActiveHash(location.hash);
    } else {
      setActiveHash("");
    }
  }, [location.hash]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          setActiveHash(newHash);
          window.history.replaceState(null, null, newHash);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [openLang, setOpenLang] = useState(false);

  function handleOpenLang() {
    setOpenLang((prevLang) => !prevLang);
  }
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((prevMenu) => !prevMenu);
  }
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <div className="main-header__content">
          <Link to="/" className="button logo">
            <Icon name="duch-nauki" />
            <Text>DuchNauki</Text>
          </Link>
          <Nav>
            <Button
              onClick={handleOpenMenu}
              type="button"
              variant={`${
                openMenu ? "menu radius-small closeBtn" : "menu radius-small "
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </Button>
            <ul className={`nav__list ${openMenu ? "open" : ""}`}>
              <li>
                <NavLink
                  to="/#introduction"
                  className={
                    activeHash === "#introduction"
                      ? "current button primary forNav"
                      : "button primary forNav"
                  }
                >
                  <Icon name="book" />
                  Wprowadzenie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#demo"
                  className={
                    activeHash === "#demo"
                      ? "current button primary forNav"
                      : "button primary forNav"
                  }
                >
                  <Icon name="hat" />
                  Demo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#faq"
                  className={
                    activeHash === "#faq"
                      ? "current button primary forNav"
                      : "button primary forNav"
                  }
                >
                  <Icon name="info" />
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#contact"
                  className={
                    activeHash === "#contact"
                      ? "current button primary forNav"
                      : "button primary forNav"
                  }
                >
                  <Icon name="hands" />
                  Kontakt
                </NavLink>
              </li>
            </ul>
            <div className="nav__separator"></div>
            <div className="nav__lang">
              <Button type="button" variant="primary" onClick={handleOpenLang}>
                <Icon name="glob" /> Język
              </Button>
              <ul
                className={openLang ? "nav__lang-list open" : "nav__lang-list"}
              >
                <li>
                  <Button
                    type="button"
                    variant="primary forNav forNav--active radius-small "
                  >
                    <Icon name="pl" />
                    Polski
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="primary forNav radius-small disabled"
                  >
                    <Icon name="en" />
                    English
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="primary forNav radius-small disabled"
                  >
                    <Icon name="ge" />
                    Germany
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="primary forNav radius-small disabled"
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
    </header>
  );
}

export default Header;
