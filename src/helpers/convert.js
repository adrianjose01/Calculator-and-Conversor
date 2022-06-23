const convert = (value, currency) => {
  switch (currency) {
    case "USD":
      return value * 0.018;
    case "EUR":
      return value * 0.017;
    case "JPY":
      return value * 2, 47;
    case "GBP":
      return value * 0.015;
    case "CHF":
      return value * 0.018;
    case "CAD":
      return value * 0.024;
  }
};

export default convert;
