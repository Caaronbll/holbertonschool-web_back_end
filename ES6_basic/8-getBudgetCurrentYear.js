function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income = `income-${getCurrentYear()}`, gdp = `gdp-${getCurrentYear()}`, capita = `capita-${getCurrentYear()}`) {
  const budget = {
    income,
    gdp,
    capita
  };

  return budget;
}
