# Zapier Blueprint (Copy/Paste Setup)

## Zap 1: Audit Intake
Trigger: Formspree new submission (form_type=roi_audit)
Actions:
1. Create Airtable/Notion row
2. Create Google Doc from Starter/Advanced template
3. Send confirmation email with SLA
4. Slack/Discord notification to ops channel

## Zap 2: Toolkit Delivery
Trigger: Stripe payment success (product=toolkit)
Actions:
1. Send download email with toolkit link
2. Log transaction in Airtable/Notion
3. Send thank-you + upsell audit offer

## Zap 3: SLA Reminder
Trigger: Scheduled daily check
Action: Find overdue deliveries and send reminder alert
