# Manage Compliance & Evidence

Once a Compliance Officer has [issued an approved risk classification](/docs/ai-assisted-assessment#compliance-officer-review-and-decision), the system is ready for its compliance programme. This page follows the journey from an approved classification to a working set of obligations, requirements, and evidence — and the AI assistance available along the way.

## From classification to a compliance programme

A compliance assessment is initiated for the registered, classified system. The platform turns the EU AI Act into a structured, actionable programme across four connected levels:

**Assessment → Obligations → Requirements → Evidence**

- **Obligations** are generated for the system, scoped to its confirmed risk tier.
- **Requirements** (the specific measures that address each obligation) are created per obligation.
- **Evidence** is uploaded against requirements and obligations to demonstrate that they are being met.

As evidence is approved, status cascades automatically upward — from an effective requirement, to a fulfilled obligation, to the assessment score and the compliance score shown on the system record. There is no manual recalculation; the score always reflects the current state of the evidence.

## The Compliance Assistant

Obligations and requirements can be produced from templates, but the platform also offers an AI-powered **Compliance Assistant** that generates them dynamically from framework knowledge and the system's confirmed classification.

The Compliance Assistant is designed around a few firm principles:

- It runs only **after a classification has been approved** — generation never precedes the human decision.
- Generated obligations and requirements remain **traceable to the EU AI Act article or requirement** they derive from.
- AI assistance is **opt-in**: the platform functions fully without it, and it can be enabled or disabled by configuration.
- **Human sign-off is always required.** The assistant does not perform autonomous legal interpretation or approve obligations on its own.

## Assistance for the Compliance Officer

For the Compliance Officer reviewing a system, an **AI assistant** surfaces the regulatory context behind a classification and flags areas of concern using a **red / amber traffic-light** scheme, so attention goes to the questions and provisions that matter most. The assistant draws on legal source documents that have been mapped to the relevant EU AI Act provisions, keeping its guidance grounded in the regulation rather than generic advice.

## Checking evidence

Owners and engineers assigned to specific obligations and requirements upload evidence documents and receive feedback on **whether the evidence satisfies the requirement**. This helps close obligations efficiently and avoids re-uploading redundant documents. Evidence can be versioned and approved, and the platform tracks evidence expiry so that requirements do not silently lapse.

## Staying compliant as things change

Compliance is not a one-time exercise. The platform continuously watches for changes — in models, systems, or regulatory posture — and can raise alerts and prompt re-assessment. For how monitoring, alerting, and change detection work, see [How it Works](/docs/how-it-works#monitor-ai-systems).
