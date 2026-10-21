import logoMark from "../assets/logo-mark.svg";
import logoWordmark from "../assets/logo-wordmark.svg";
import watermark from "../assets/footer-watermark.svg";

export function mountFooter(): void {
  const root = document.querySelector("#site-footer");
  if (!root) return;

  root.outerHTML = `
    <footer class="footer">
      <img class="footer__mark" src="${watermark}" alt="" />
      <div class="footer__inner">
        <div class="footer__left">
          <a class="brand" href="/index.html">
            <img class="brand__mark" src="${logoMark}" alt="" />
            <span class="brand__word">
              <span class="brand__years">50 Years</span>
              <img src="${logoWordmark}" alt="Hesien" />
            </span>
          </a>
          <div class="footer__contacts">
            <div>
              <span>Email</span>
              <strong>info@hesien.com</strong>
            </div>
            <div>
              <span>Phone Number</span>
              <strong>+1 231 289 9435</strong>
            </div>
          </div>
        </div>
        <nav class="footer__nav">
          <a href="/signup.html">Signup</a>
          <a href="/login.html">Login</a>
          <a href="/index.html">Home</a>
          <a href="/login.html">Register Warranty</a>
          <a href="/login.html">My Warranties</a>
          <a href="/login.html">Claim Warranty</a>
          <a href="/login.html">My Warranty Claims</a>
          <a href="#">Warranty Terms &amp; Conditions</a>
        </nav>
      </div>
      <p class="footer__copy">© 2024 Hesien USA Inc.</p>
      <div class="footer__bar"></div>
    </footer>
  `;
}
