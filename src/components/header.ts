import logoMark from "../assets/logo-mark.svg";
import logoWordmark from "../assets/logo-wordmark.svg";
import warrantyBadge from "../assets/warranty-badge.png";
import iconUser from "../assets/icon-user.png";

export type HeaderVariant = "home" | "auth";

export function mountHeader(variant: HeaderVariant): void {
  const root = document.querySelector("#site-header");
  if (!root) return;

  const account =
    variant === "home"
      ? `<div class="header__account">
          <a class="header__login" href="/login.html">LOGIN</a>
          <a class="header__avatar" href="/login.html">
            <img src="${iconUser}" alt="" />
          </a>
        </div>`
      : "";

  root.outerHTML = `
    <header class="header">
      <a class="brand" href="/index.html">
        <img class="brand__mark" src="${logoMark}" alt="" />
        <span class="brand__word">
          <span class="brand__years">50 Years</span>
          <img src="${logoWordmark}" alt="Hesien" />
        </span>
        <span class="brand__rule"></span>
        <span class="brand__warranty">
          <img src="${warrantyBadge}" alt="" />
          <span>WARRANTY</span>
        </span>
      </a>
      ${account}
    </header>
  `;
}
