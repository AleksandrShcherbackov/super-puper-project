export type FormData = {
  fullName: string
  email: string
  password: string
  cardNumber: string
  expiryDate: string
  cvc: string
}

export type FormDataErrors = {
  fullName?: string;
  email?: string;
  password?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvc?: string;
};
