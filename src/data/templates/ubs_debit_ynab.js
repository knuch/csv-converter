export default {
  name: 'ubsdebit_ynab',
  title: 'UBS débit -> Ynab',
  trimHeaders: 1,
  buttonStyle: 'info',
  mapping: [
    {
      from: 10,
      to: 0,
      header: 'Date',
      required: true
    },
    {
      from: 13,
      to: 1,
      header: 'Payee'
    },
    {
      from: 14,
      to: 2,
      header: 'Memo'
    },
    {
      from: 18,
      to: 3,
      header: 'Outflow'
    },
    {
      from: 19,
      to: 4,
      header: 'Inflow'
    }
  ]
};
