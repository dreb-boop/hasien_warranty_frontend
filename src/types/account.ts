export type AccountType = "individual" | "enterprise";

export type LoginInput = {
  email: string;
  password: string;
};

export type SignupInput = {
  fullName: string;
  accountType: AccountType;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
};
