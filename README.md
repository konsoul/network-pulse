This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Project Documentation

### Core Documentation
- [Project Overview](./docs/01-project-overview.md) - Project goals, objectives, and biblical foundation
- [Tech Stack Guide](./docs/02-tech-stack.md) - Technology choices and implementation details
- [Development Progress](./docs/03-development-progress.md) - Current status and session tracking
- [Network Diagnostic Tools](./docs/04-network-diagnostic-tools.md) - Available network tools and integration strategy
- [Setup Guide](./docs/setup.md) - Development environment setup instructions

### Quick Links
- **Getting Started**: See [Setup Guide](./docs/setup.md) for development environment setup
- **Network Tools**: See [Network Diagnostic Tools](./docs/04-network-diagnostic-tools.md) for real router integration strategy
- **Current Progress**: See [Development Progress](./docs/03-development-progress.md) for latest status and real network data implementation

### Project Structure
```
network-pulse/
├── app/                    # Next.js App Router
├── docs/                   # Project documentation
├── lib/                    # Network utility functions for real router communication
├── types/                  # TypeScript interfaces for network data
├── public/                 # Static assets
└── README.md              # This file
```

### Network Integration
This application integrates directly with your personal router and network devices:
- **Primary Router**: 192.168.0.1 (tested and responding)
- **Network Tools**: macOS ping, traceroute, ARP, netstat utilities
- **Device Discovery**: Real-time network scanning and device identification
- **Live Metrics**: Continuous monitoring of network performance
