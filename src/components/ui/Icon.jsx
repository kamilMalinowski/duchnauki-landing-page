import IconHat from "../../components/icons/IconHat";
import IconBook from "../../components/icons/IconBook";
import IconGlob from "../../components/icons/IconGlob";
import IconInfo from "../../components/icons/IconInfo";
import IconPlus from "../../components/icons/IconPlus";
import IconWait from "../../components/icons/IconWait";
import IconGoTop from "../../components/icons/IconGoTop";
import IconHands from "../../components/icons/IconHands";
import IconCloseX from "../../components/icons/IconCloseX";
import IconGoDown from "../../components/icons/IconGoDown";
import IconOpenNew from "../../components/icons/IconOpenNew";
import IconMailBig from "../../components/icons/IconMailBig";
import IconStarBig from "../../components/icons/IconStarBig";
import IconGiftBig from "../../components/icons/IconGiftBig";
import IconPhoneBig from "../../components/icons/IconPhoneBig";
import IconArrowDown from "../../components/icons/IconArrowDown";
import IconScreenBig from "../../components/icons/IconScreenBig";
import IconDuchNauki from "../../components/icons/IconDuchNauki";
import IconYouTubeBig from "../../components/icons/IconYouTubeBig";
import IconFacebookBig from "../../components/icons/IconFacebookBig";
import IconInstagramBig from "../../components/icons/IconInstagramBig";
import IconPolish from "../../components/icons/IconPolish";
import IconEnglish from "../../components/icons/IconEnglish";
import IconGerman from "../../components/icons/IconGerman";
import IconJapanese from "../../components/icons/IconJapanese";

function Icon({ name }) {
  return (
    <>
      {name === "pl" && <IconPolish />}
      {name === "en" && <IconEnglish />}
      {name === "ge" && <IconGerman />}
      {name === "jp" && <IconJapanese />}

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

export default Icon;
