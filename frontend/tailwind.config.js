module.exports = {
    theme: {
      extend: {
        fontSize: {
          'dynamic': 'max(3vw, 20px)', // Custom utility
        },
        width: {
            'dynamic': 'max(23vw, 230px)', // Custom utility for dynamic width
        },
        opacity: {
            '56': '0.56', // Custom opacity for 56%
        },
        gridTemplateColumns: {
            'custom-layout': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        },
      },
    },
  }
  