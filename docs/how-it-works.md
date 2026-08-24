# How it Works

AI Trust Platform structures AI governance as a connected workflow — from first registration to continuous compliance. Unlike tools that adapt generic GRC processes to the EU AI Act, the platform was built around its regulatory logic from the ground up.

The flow follows four stages that build on each other.

## 1. Register & Classify

An AI-enabled application is registered in the platform with key descriptive and technical attributes. Based on those attributes, the platform automatically determines the applicable EU AI Act risk tier — Prohibited, GPAI Systemic/Standard, High-Risk, Limited, or Minimal — following the regulatory waterfall defined in the Act.

Classification is fully automated and deterministic. No manual assignment of tiers is required.

## 2. Assess & Manage Compliance

Once a system is registered and classified, a compliance assessment is initiated under the EU AI Act. The platform automatically generates the applicable obligations based on the system's risk tier. For each obligation, a set of controls is created — derived from the EU AI Act AISEC control set — giving teams a structured, actionable compliance programme.

Evidence is uploaded against controls and reviewed. As evidence is approved, status cascades automatically upward: from control to obligation to assessment score. The compliance score on the registered AI system reflects the current state of all active assessments — without manual recalculation.

## 3. Monitor AI Systems

For deployed AI systems that generate inference traffic, the platform collects observability signals via OpenTelemetry. This provides ongoing visibility into latency, token usage, model versions, and individual decision traces — without requiring changes to the AI application beyond standard OTel instrumentation.

## 4. Detect & Respond to Change

The platform continuously evaluates a set of configurable alert rules against live data. When a condition is met — a compliance score drops, a model version changes, a system is deployed without a model card — an alert event is created and surfaced to the responsible team.

Alert events can be reviewed and handled, or used to initiate a new assessment cycle — closing the loop between ongoing operations and the compliance programme.

---

## Components

The platform consists of six components, each covering a distinct area of AI governance. All components share a common data model and are accessible through a unified micro-frontend shell.

### AI System Registry

The central inventory of all AI-enabled applications in scope. Each system is registered with descriptive and technical attributes and automatically classified according to the EU AI Act risk tier waterfall.

- Register AI systems with a unique identifier
- Automated EU AI Act risk classification (Prohibited → GPAI Systemic/Standard → High-Risk → Limited → Minimal)
- Lifecycle stage tracking from Development through Decommissioning
- Reclassification on updated system attributes
- Compliance score visible directly on the system record

### Compliance

The governance chain component for structured EU AI Act compliance management. The core data model follows four levels: Assessment → Obligations → Controls → Evidence.

- Create assessments for any registered AI system
- Auto-generate obligations from EU AI Act templates scoped to the system's risk tier
- Auto-generate controls per obligation from the EU AI Act AISEC control set
- Upload, version, and approve evidence against controls and obligations
- Automatic status cascade: approved evidence → effective control → fulfilled obligation → updated compliance score
- Evidence expiry tracking with automated advance alerts
- Owner assignment and handover across Application Owners, AI Engineers, and Compliance Officers

### Monitoring

Live observability for deployed AI systems. Collects and visualises inference signals from any OpenTelemetry-instrumented application — without requiring changes beyond standard OTel instrumentation.

- Time-series signals for inference activity, latency, and token usage
- Configurable observation windows and service-level filtering
- Continuous refresh for live operational visibility

### Alerts

Rule-based alerting across compliance status, risk posture, and operational signals. A background worker continuously evaluates all enabled rules and creates alert events when conditions are met. The platform evaluates conditions against live data — it does not perform runtime blocking or in-line enforcement.

| Rule | Category |
|---|---|
| Prohibited system registered | Risk |
| Average compliance below threshold | Compliance |
| High-risk system on market with low compliance | Compliance |
| System on market without model card | Compliance |
| GPAI system with no compliance score | Risk |
| No recent inference signals | Observability |
| Average latency above threshold | Observability |
| Model version changed | Observability |

Alert events can be reviewed, handled, or used to trigger a compliance action. The model divergence rule supports an explicit Approve / Reject workflow to manage intentional model changes.

### Decision Trace Analyzer

A trace viewer for GenAI spans stored from instrumented AI applications. Provides end-to-end visibility into individual LLM call chains.

- Group spans by trace ID to reconstruct the full call chain of a request
- View input messages, output messages, latency per span, and model used
- Supports evaluation and debugging of multi-step AI workflows

### Overview

A compliance posture dashboard providing a cross-system view of the platform's current state.

- KPI cards: total systems, compliant systems, high-risk systems, average compliance score
- Risk tier distribution
- Compliance score overview
- Recent registrations feed
- Customisable analytics layout

---

## Glossary

| Term | Definition |
|---|---|
| **AI System** | An AI-enabled application registered in the platform. Identified by a unique `SYS-XXXXXXXX` ID. |
| **Risk Tier** | The EU AI Act risk classification assigned to an AI system: Prohibited, GPAI Systemic, GPAI Standard, High-Risk, Limited, or Minimal. |
| **Assessment** | A compliance evaluation of an AI system against the EU AI Act. One system can have multiple assessments over its lifecycle. |
| **Obligation** | A regulatory requirement derived from the EU AI Act, scoped to the system's risk tier. Auto-generated when an assessment is created. |
| **Control** | A specific measure or action that addresses an obligation. Auto-generated from the EU AI Act AISEC control set; can also be created or linked manually. |
| **Evidence** | A document or artefact uploaded against a control or obligation to demonstrate that a requirement is being met. |
| **Compliance Score** | A percentage reflecting how many obligations in an assessment are fulfilled. Recalculated automatically when evidence is approved or expires. |
| **Alert Rule** | A configurable rule evaluated continuously against live data. Triggers an alert event when a condition is met. |
| **Alert Event** | An instance of an alert rule being triggered for a specific system or service. Requires handling by a responsible team member. |
| **Decision Trace** | A recorded sequence of GenAI spans for a single request, showing the full call chain, inputs, outputs, and latency per step. |
| **Lifecycle Stage** | The operational stage of an AI system: Development → Testing → Conformity → Market → Post-Market → Decommissioned. |
