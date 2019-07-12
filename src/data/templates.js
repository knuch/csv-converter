const templates = [
  {
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
  },
  {
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
  },
  {
    name: 'postfinance_debit_ynab',
    title: 'Postfinance débit -> Ynab',
    trimHeaders: 4,
    buttonStyle: 'warning',
    mapping: [
      {
        from: 0,
        to: 0,
        header: 'Date',
        required: true
      },
      {
        from: 1,
        to: 1,
        header: 'Payee',
        required: true
      },
      {
        from: 1,
        to: 2,
        header: 'Memo'
      },
      {
        from: 3,
        to: 3,
        header: 'Outflow',
        force_positive: true
      },
      {
        from: 2,
        to: 4,
        header: 'Inflow',
        force_positive: true
      }
    ]
  }
];

export default templates;
