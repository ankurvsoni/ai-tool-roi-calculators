# QA Guardrails (to prevent repeat UI mistakes)

## Pre-deploy checklist (mandatory)
- Verify no duplicate CTA labels/buttons on the same section unless intentional.
- Verify each CTA has the correct destination path/link.
- Verify homepage hero has max 2 primary CTAs.
- Check mobile viewport for layout and duplicate elements.
- Run one live HTML grep check for repeated CTA text after deploy.

## Post-deploy quick checks
- `/` hero buttons count and labels
- `/pricing` offer consistency with current strategy
- `/toolkit` purchase button + copy quality
- one calculator page CTA block consistency
