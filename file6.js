function calculateBonus(years, salary) {
  let bonus = 0;

  if (years >= 5) {
    bonus = salary * 0.10; // 10% bonus
  } else if (years >= 3 && years < 5) {
    bonus = salary * 0.05; // 5% bonus
  } else {
    bonus = 0; // No bonus
  }

  return bonus;
}

// Example usage:
let yearsOfService = 4;
let salary = 50000;
let bonusAmount = calculateBonus(yearsOfService, salary);

console.log(`Bonus awarded: MWK${bonusAmount}`);
