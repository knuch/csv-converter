export default {
  name: "postfinance_debit_ynab",
  title: "Postfinance débit -> Ynab",
  trimHeaders: 4,
  buttonStyle: "warning",
  mapping: [
    {
      from: 0,
      to: 0,
      header: "Date",
      required: true,

    },
    {
      from: 2,
      to: 1,
      header: "Payee",
      required: true,
    },
    {
      from: 2,
      to: 2,
      header: "Memo",
    },
    {
      from: 3,
      to: 4,
      header: "Outflow",
      force_positive: true,
    },
    {
      from: 4,
      to: 3,
      header: "Inflow",
      force_positive: true,
    },
  ],
};
