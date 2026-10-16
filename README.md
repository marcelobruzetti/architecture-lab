# Architecture Lab

**A hands-on System Design lab for exploring architectural decisions, trade-offs, scalability, resilience, and distributed systems.**

## Overview

Architecture Lab is a personal engineering laboratory dedicated to studying, designing, implementing, and evaluating software architectures.

The goal is not simply to build scalable systems, but to understand **why architectural decisions work, when they are appropriate, what trade-offs they introduce, and how to validate them through experimentation.**

Each experiment starts with a problem, explicit assumptions, and hypotheses to investigate.

The emphasis is on engineering reasoning, reproducible experiments, and evidence-based decisions rather than implementing complex architectures for their own sake.

## Learning Approach

The project follows an iterative learning process:

1. **Understand the problem** — Identify functional requirements, non-functional requirements, constraints, and assumptions.
2. **Explore the fundamentals** — Study the underlying concepts and architectural patterns.
3. **Evaluate alternatives** — Compare possible solutions and document their trade-offs.
4. **Design and implement** — Build the smallest experiment capable of testing a hypothesis.
5. **Observe and measure** — Investigate system behavior, bottlenecks, and failure scenarios.
6. **Document findings** — Record decisions, experimental evidence, limitations, and lessons learned.

Experiments are not expected to produce perfect or production-ready solutions. Unexpected results and failed hypotheses are part of the learning process.

## Study Roadmap

The first cycle consists of eight weekly sessions, progressively exploring core System Design concepts.

| Week | Topic | Focus |
|---|---|---|
| 01 | Foundations & Capacity Estimation | Requirements, constraints, traffic estimation, and initial architecture |
| 02 | Stateless Services & Load Balancing | Horizontal scaling, reverse proxies, and instance failures |
| 03 | Database Scalability | Query optimization, indexing, connection pooling, and scaling strategies |
| 04 | Caching | Redis, cache-aside, TTL, invalidation, and consistency |
| 05 | Messaging & Async Processing | Queues, delivery guarantees, retries, and idempotency |
| 06 | Distributed Consistency | Distributed transactions, sagas, outbox patterns, and failure recovery |
| 07 | Resilience & Observability | Timeouts, retries, circuit breakers, metrics, and tracing |
| 08 | System Design Challenge | End-to-end architecture design and trade-off analysis |

The roadmap is intentionally flexible and may evolve based on findings and learning progress.

## Architecture Lab Structure

Each week has an independent directory containing the relevant implementation, architectural diagrams, experimental setup, and technical notes.

```text
architecture-lab/
├── README.md
├── templates/
│   └── lab-notes.md
└── weeks/
    ├── week-01-foundations/
    ├── week-02-load-balancing/
    ├── week-03-database-scaling/
    ├── week-04-caching/
    ├── week-05-messaging/
    ├── week-06-distributed-consistency/
    ├── week-07-resilience-observability/
    └── week-08-design-challenge/
```

A typical experiment may include:

```text
week-xx-topic/
├── README.md
├── notes.md
├── architecture/
├── app/
└── compose.yaml
```

- **README.md** — Problem definition, objectives, setup instructions, and experiment scope.
- **notes.md** — Architectural decisions, hypotheses, observations, results, and lessons learned.
- **architecture/** — Diagrams and architectural documentation.
- **app/** — Implementation used in the experiment.
- **compose.yaml** — Local infrastructure, when necessary.

Experiments may build upon previous implementations, but each week's results and documentation should remain independently understandable and reproducible.

## Technology Stack

Technologies are selected according to the problem being investigated.

The initial experiments primarily use:

- **Node.js / TypeScript** — Backend services and APIs.
- **PostgreSQL** — Relational persistence and database experiments.
- **Redis** — Distributed caching.
- **Docker Compose** — Reproducible local environments.
- **Nginx** — Reverse proxy and load balancing.

Additional technologies, including messaging systems, observability tools, and load-testing utilities, may be introduced when justified by the experiment.

The focus remains on technology-independent architectural principles.

## Engineering Principles

**Start simple.** Introduce complexity only when requirements or experimental evidence justify it.

**Make assumptions explicit.** Distinguish known facts from estimates and hypotheses.

**Understand trade-offs.** Every architectural decision has benefits, costs, and limitations.

**Design for failure.** Explore how systems behave when components become slow, unavailable, or inconsistent.

**Measure before optimizing.** Prefer observable behavior and reproducible measurements over intuition alone.

**Document the reasoning.** Understanding why a decision was made is as important as the implementation itself.

## Technical Notes

Each completed study and laboratory session may result in a technical article published at:

**[marcelobruzetti.com](https://marcelobruzetti.com)**

Articles are developed from actual experiments, architectural discussions, and recorded observations.

They focus on engineering decisions, trade-offs, experimental evidence, and lessons learned rather than simply reproducing implementation steps.

## Project Status

**Cycle 01 — System Design Foundations**

This repository is an evolving learning project. Implementations, experiments, and documentation will be added progressively as each study session is completed.

---

*Designed to develop architectural judgment through deliberate practice, experimentation, and continuous learning.*