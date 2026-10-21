import "../styles/main.css";
import { mountHeader } from "../components/header";
import { mountFooter } from "../components/footer";
import { bindPasswordToggles } from "../components/password-toggle";
import googleIcon from "../assets/google.svg";
import type { AccountType, SignupInput } from "../types/account";

mountHeader("auth");
mountFooter();
bindPasswordToggles();

const google = document.querySelector<HTMLImageElement>("[data-google]");
if (google) google.src = googleIcon;

const accountType = document.querySelector<HTMLSelectElement>("#account_type");
const companyField = document.querySelector(".company");
const companyInput = document.querySelector<HTMLInputElement>("#company");

function syncCompanyField(): void {
  const isEnterprise = accountType?.value === "enterprise";
  companyField?.classList.toggle("is-open", Boolean(isEnterprise));
  if (companyInput) companyInput.required = Boolean(isEnterprise);
}

accountType?.addEventListener("change", syncCompanyField);
syncCompanyField();

const form = document.querySelector<HTMLFormElement>("#signup-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const payload: SignupInput = {
    fullName: String(data.get("full_name") ?? ""),
    accountType: (data.get("account_type") as AccountType) ?? "individual",
    companyName: String(data.get("company_name") ?? ""),
    email: String(data.get("email") ?? ""),
    phone: String(data.get("phone") ?? ""),
    country: String(data.get("country") ?? ""),
    password: String(data.get("password") ?? ""),
    confirmPassword: String(data.get("confirm_password") ?? ""),
  };
  if (payload.password !== payload.confirmPassword) {
    window.alert("Passwords do not match");
    return;
  }
  console.log("signup", payload);
});
