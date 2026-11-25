# AI-Assisted EU AI Act Assessment

Determining an AI system's EU AI Act risk classification is the pivotal step in the governance journey — it decides which obligations apply and what compliance work follows. The platform makes this a **guided, AI-assisted flow** with a human reviewer always in the loop: the AI does the heavy lifting of reading documentation and proposing answers, while people review, correct, and make the binding decisions.

The journey spans two roles. A **Business Owner** or **AI Engineer** completes and submits the assessment; a **Compliance Officer** reviews it and issues the final classification.

## Grounding in your documentation

The assessment is only as good as the information behind it. When you upload documentation for a system, the platform **indexes it for reuse** across AI workflows. Instead of each workflow processing documents on its own, a shared retrieval layer lets assessment pre-fill, classification, and evidence review all draw on the same grounded, system-specific knowledge. The EU AI Act itself is indexed as a knowledge source, so the platform's answers can be tied back to the regulation.

## AI pre-fill of the questionnaire

When an owner or engineer starts an assessment, the platform's AI reads the uploaded technical documentation and **pre-fills the EU AI Act risk classification questionnaire** on their behalf. Manually completing this questionnaire is time-consuming and demands regulatory knowledge that technical teams may not have; pre-fill removes most of that burden.

For each answer the AI provides:

- A **confidence score**, so you can see at a glance where the AI was sure and where it was guessing.
- A **flag where the documentation was insufficient**, prompting you either to upload more information or to answer the question yourself.

The questionnaire itself has been simplified and consolidated so that review stays focused on what matters, and it is driven by a configuration file — allowing, for example, the EU Commission's questionnaire to be used as the basis for classification.

## Reviewing and confirming

Owners land on a clear **assessment start page** that shows the preliminary classification and highlights the questions needing attention — low-confidence and unanswered items first. You then work through the questionnaire one question at a time:

- You can view and edit every question.
- When you **change an AI-suggested answer**, you add a comment explaining the change, so the Compliance Officer later understands any discrepancy between the source documents and your answer.
- Questions that would place the system in the **prohibited** or **high-risk** tiers are gated so they receive explicit attention.

Nothing is submitted until you have confirmed the answers — the platform keeps clear track of what is still outstanding.

## A classification suggestion before hand-off

Once the questionnaire is answered, the platform generates a **risk and role classification suggestion** — the proposed EU AI Act risk tier and the organisation's role (such as provider or deployer) — together with a **confidence score and a reasoned explanation**.

This gives the owner or engineer a first, defensible indication of the outcome *before* handing over to the Compliance Officer. It shortens the back-and-forth between the two roles and speeds up the overall process, because the submission arrives with a clear rationale already attached.

## Submitting to the Compliance Officer

When every question is confirmed, the owner reaches a **submit view** where they:

- Review the final state of the assessment.
- Add a covering note for the Compliance Officer.
- Confirm and submit.

Submission is gated: if questions are still assigned to contributors and not yet confirmed, the platform warns before the assessment can go forward, preventing premature or incomplete submissions. The system then moves into the Compliance Officer's **Ready for Review** queue.

## Compliance Officer review and decision

The Compliance Officer reviews the submitted assessment, seeing the same per-question view as the owner — including every answer and comment — in read-only form, alongside the AI's preliminary classification and explanation.

The Compliance Officer then either:

- **Issues the final, binding risk classification**, making it active, or
- **Returns the assessment to the owner** with comments for correction.

This human review is a hard gate: no unverified classification record enters the downstream compliance workflow. The final decision is always a person's, informed by the AI's analysis rather than replaced by it.

## An audit-safe record of every run

Because owners may update documents or system details after an assessment has started, the platform captures an **audit-safe snapshot dossier** for each assessment run — freezing the exact inputs, configuration, and prompts used. This makes it possible to reconstruct precisely which information produced which result, and prevents an in-flight assessment from being disturbed by later changes. All relevant actions are recorded in the [audit trail](/docs/audit-and-administration#audit-trail).

## Next: compliance

An approved classification is the gateway to the compliance programme. Continue to [Manage Compliance & Evidence](/docs/compliance-and-evidence) to see how obligations, controls, and evidence follow from the classification.
