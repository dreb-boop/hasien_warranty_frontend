const EYE_OFF = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 3l18 18M10.6 10.6A2 2 0 0012 14a2 2 0 001.4-.6M9.9 5.1A10 10 0 0121 12a10.8 10.8 0 01-2.2 3.3M6.1 6.1A10.8 10.8 0 003 12a10 10 0 0012.9 6.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>
`;

const EYE_ON = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
  </svg>
`;

export function bindPasswordToggles(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-toggle-password]").forEach((btn) => {
    btn.innerHTML = EYE_OFF;
    btn.addEventListener("click", () => {
      const input = btn.parentElement?.querySelector("input");
      if (!(input instanceof HTMLInputElement)) return;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.innerHTML = show ? EYE_ON : EYE_OFF;
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });
}
