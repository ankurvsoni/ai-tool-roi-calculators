export function computeROI({ users, monthlyToolCost, hoursSavedPerUser, hourlyRate, setupHours, additionalMonthlyCost, savingsPerOutput }) {
  const monthlySavings = (hoursSavedPerUser * users * hourlyRate) - (monthlyToolCost + additionalMonthlyCost);
  const baseCost = (monthlyToolCost + additionalMonthlyCost) || 1;
  const roiPercent = (monthlySavings / baseCost) * 100;
  const paybackMonths = (setupHours * hourlyRate) / Math.max(monthlySavings, 1);
  const breakEvenOutputs = (monthlyToolCost + additionalMonthlyCost) / Math.max(savingsPerOutput, 1);
  return { monthlySavings, roiPercent, paybackMonths, breakEvenOutputs };
}
