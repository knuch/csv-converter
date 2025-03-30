export default {
  name: "raiffeisen_debit_ynab",
  title: "Raiffeisen débit -> Ynab",
  trimHeaders: 1,
  buttonStyle: "danger",
  mapping: [
    {
      from: 1,
      to: 0,
      header: "Date",
      required: true,
      formatter: (value) => {
        const date = value.split(' ')[0]
        const table=  date.split('-')
        return `${table[2]}.${table[1]}.${table[0]}`
      }
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
      validator: (value) => value < 0 // if the validator returns true, the value is considered valid and processed further
    },
    {
      from: 3,
      to: 3,
      header: "Inflow",
      force_positive: true,
      validator: (value) => value > 0 // if the validator returns true, the value is considered valid and processed further
    },
    // TODO interpréter le débit/crédit de la same colonne
  ],
};
