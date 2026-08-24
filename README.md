[![REUSE status](https://api.reuse.software/badge/github.com/AI-Trust-Services/ai-trust-services.github.io)](https://api.reuse.software/info/github.com/AI-Trust-Services/ai-trust-services.github.io)

# ai-trust-services.github.io

## About this project

This repository contains the AI Trust Platform Website and Documentation.

## Requirements and Setup

This site is built with [VitePress](https://vitepress.dev/). To run it locally you need:

- [Node.js](https://nodejs.org/) 20 or newer (the CI uses Node 24)
- npm (bundled with Node.js)

### Getting started

Clone the repository and install dependencies:

```sh
git clone https://github.com/AI-Trust-Services/ai-trust-services.github.io.git
cd ai-trust-services.github.io
npm ci
```

### Local development

Start the dev server with hot reload:

```sh
npm run dev
```

The site is served at http://localhost:5173 by default.

### Building and previewing

Produce a production build (output goes to `.vitepress/dist`):

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

Content lives in the Markdown files at the repository root and under `docs/`; site configuration is in `.vitepress/config.mts`. Pushing to `main` triggers the GitHub Actions workflow that builds the site and deploys it to GitHub Pages.

## Support, Feedback, Contributing

This project is open to feature requests/suggestions, bug reports etc. via [GitHub issues](https://github.com/AI-Trust-Services/ai-trust-services.github.io/issues). Contribution and feedback are encouraged and always welcome. For more information about how to contribute, the project structure, as well as additional contribution information, see our [Contribution Guidelines](CONTRIBUTING.md).

## Security / Disclosure
If you find any bug that may be a security problem, please follow our instructions at [in our security policy](https://github.com/AI-Trust-Services/ai-trust-services.github.io/security/policy) on how to report it. Please do not create GitHub issues for security-related doubts or problems.

## Code of Conduct

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone. By participating in this project, you agree to abide by its [Code of Conduct](https://github.com/SAP/.github/blob/main/CODE_OF_CONDUCT.md) at all times.

## Licensing

Copyright 2026 SAP SE or an SAP affiliate company and ai-trust-services.github.io contributors. Please see our [LICENSE](LICENSE) for copyright and license information. Detailed information including third-party components and their licensing/copyright information is available [via the REUSE tool](https://api.reuse.software/info/github.com/AI-Trust-Services/ai-trust-services.github.io).
