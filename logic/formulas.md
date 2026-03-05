# Formula Logic

Core variables:
- monthly_tool_cost
- users
- hours_saved_per_user_per_month
- blended_hourly_rate
- implementation_hours_one_time
- monthly_additional_tool_cost

## 1) Monthly Savings
monthly_savings = (hours_saved_per_user_per_month * users * blended_hourly_rate) - (monthly_tool_cost + monthly_additional_tool_cost)

## 2) Net ROI % (monthly)
roi_percent = ((monthly_savings) / (monthly_tool_cost + monthly_additional_tool_cost)) * 100

## 3) Payback Period (months)
payback_months = implementation_hours_one_time * blended_hourly_rate / max(monthly_savings, 1)

## 4) Break-even Output Volume
break_even_outputs = (monthly_tool_cost + monthly_additional_tool_cost) / savings_per_output

## 5) Scenario Mode
- Conservative: hours_saved * 0.7
- Base: hours_saved * 1.0
- Aggressive: hours_saved * 1.3
