# Fully Automated Client Delivery Workflow

## Objective
Minimize manual involvement after initial setup.

## Stack
- Form capture: Formspree
- Automation orchestrator: Zapier or Make
- File generation/storage: Google Drive + Docs templates
- Communication: Gmail
- Payment: Stripe Payment Links
- CRM/Tracking: Airtable or Notion DB

## Trigger Flow
1. Formspree submission received
2. Router by form_type (audit/contact/toolkit)
3. If toolkit:
   - send Stripe link (or direct file if free mode)
   - on successful payment webhook -> send toolkit download + receipt
4. If starter/advanced audit:
   - auto-create client record
   - auto-generate checklist + report template copies
   - send intake confirmation + timeline
   - schedule reminder tasks for delivery SLA

## SLA Guards
- Auto-alert if Starter ticket > 36h unresolved
- Auto-alert if Advanced ticket > 72h unresolved

## Customer Delight Add-ons
- Instant confirmation email with timeline
- Branded report PDF
- Follow-up email 7 days later with KPI check-in prompt
