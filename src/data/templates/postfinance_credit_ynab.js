export default {
  name: "postfinance_credit_ynab",
  title: "Postfinance crédit -> Ynab",
  trimHeaders: 3,
  buttonStyle: "success",
  mapping: [
    {
      from: 0,
      to: 0,
      header: "Date",
      required: true,
    },
    {
      from: 1,
      to: 1,
      header: "Payee",
      required: true,
    },
    {
      from: 99,
      to: 2,
      header: "Memo",
    },
    {
      from: 2,
      to: 4,
      header: "Outflow",
      force_positive: true,
    },
    {
      from: 3,
      to: 3,
      header: "Inflow",
      force_positive: true,
    },
  ],
};
