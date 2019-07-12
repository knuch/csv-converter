export default {
  name: 'ubscredit_ynab', // unique name of this temlate, used for output file
  title: 'UBS crédit -> Ynab', // displayed title
  trimHeaders: 3, // numbers of lines to ignore at the beginning of file,
  buttonStyle: 'success',
  mapping: [
    {
      from: 3, // source index
      to: 0, // destination index
      header: 'Date', // corresponding header
      required: true // if true, ignores source lines without data for this index
    },
    {
      from: 4,
      to: 1,
      header: 'Payee'
    },
    {
      from: 5,
      to: 2,
      header: 'Memo'
    },
    {
      from: 10,
      to: 3,
      header: 'Outflow'
    },
    {
      from: 11,
      to: 4,
      header: 'Inflow'
    }
  ]
};
