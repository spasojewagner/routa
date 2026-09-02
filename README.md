# Routa

**AI-native fleet operations platform.**

Real-time telemetry, intelligent dispatch, and an evidence-based AI copilot for small and mid-size fleets.

> **Status:** M0 — foundation. Monorepo, tooling, and local database are in place.

---

## The Problem

Fleets of **5–200 vehicles** — couriers, last-mile delivery, and field service operators — are still dispatched using spreadsheets, phone calls, and group chats.

The result:

- Empty runs
- Missed delivery windows
- Poor fleet visibility
- Manual dispatching
- No reliable cost-per-job data
- Slow response to operational issues

Enterprise fleet platforms solve many of these problems, but they are often priced and scoped for operators **ten times the size**.

**Routa** is built to provide modern fleet operations tooling for small and mid-size fleets without the complexity and cost of enterprise platforms.

---

## Getting Started

### Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) **22+**
- [pnpm](https://pnpm.io/) **9+**
- [Docker](https://www.docker.com/)

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

Start the local PostgreSQL database:

```bash
pnpm db:up
```

Open a PostgreSQL shell:

```bash
pnpm db:psql
```

---

## Repository Layout

```text
routa/
├── apps/        # Services and the web client, added per milestone
├── packages/    # Shared configuration, types, and contracts
├── infra/       # Local development infrastructure
└── ...
```

### Directories

| Directory   | Description                                        |
| ----------- | -------------------------------------------------- |
| `apps/`     | Applications, services, and the web client         |
| `packages/` | Shared configuration, types, and contracts         |
| `infra/`    | Local development and infrastructure configuration |

---

## Engineering Conventions

### Branches

Branches should be short-lived and created from `main`.

Use the following prefixes:

```text
feat/    # New features
fix/     # Bug fixes
perf/    # Performance improvements
docs/    # Documentation
chore/   # Maintenance and tooling
```

Examples:

```text
feat/vehicle-tracking
fix/dispatch-timezone
perf/telemetry-ingestion
docs/api-reference
chore/update-dependencies
```

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org).

Examples:

```text
feat: add vehicle tracking
fix: correct dispatch ETA calculation
perf: optimize telemetry ingestion
docs: update local development guide
chore: update dependencies
```

### Merges

- **Squash merges only**
- `main` must always remain deployable
- Keep pull requests focused and reviewable

---

## Development Status

Routa is currently in:

> **M0 — Foundation**

The current milestone focuses on establishing the project foundation, including:

- Monorepo structure
- Development tooling
- Shared packages
- Local infrastructure
- PostgreSQL 16 development database

Future milestones will introduce fleet management, real-time telemetry, intelligent dispatch, and the AI copilot.

---

## License

This project is licensed under the **MIT License**.
