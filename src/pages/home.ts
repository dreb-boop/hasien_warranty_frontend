import "../styles/main.css";
import { mountHeader } from "../components/header";
import { mountFooter } from "../components/footer";
import hero from "../assets/hero-41434a.png";
import iconWarranty from "../assets/icon-warranty.svg";
import iconSearch from "../assets/icon-search.svg";

mountHeader("home");
mountFooter();

const heroImg = document.querySelector<HTMLImageElement>("[data-hero]");
if (heroImg) heroImg.src = hero;

document.querySelectorAll<HTMLImageElement>("[data-icon='warranty']").forEach((el) => {
  el.src = iconWarranty;
});
document.querySelectorAll<HTMLImageElement>("[data-icon='search']").forEach((el) => {
  el.src = iconSearch;
});
