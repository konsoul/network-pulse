# Setup Guide

## Prerequisites

- Node.js 18+ installed
- VS Code (recommended)
- Prettier VS Code extension
- ESLint VS Code extension

## Quick Start

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Start Development**:
   ```bash
   npm run dev
   ```

3. **Visit**: http://localhost:3000

## Development Workflow

### Code Formatting

This project uses **Prettier** for consistent code formatting:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check

# VS Code: Format on save is enabled automatically
```

### Code Quality

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### VS Code Configuration

The project includes VS Code settings (`.vscode/settings.json`) that:
- Enable format on save
- Set Prettier as default formatter
- Configure ESLint auto-fix
- Use relative imports

## Original Project Setup Steps

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest . --tailwind --eslint --app --typescript
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install @heroicons/react

# Development tools
npm install --save-dev prettier eslint-config-prettier prettier-plugin-tailwindcss
```

### 3. Configure Development Tools

- Created `.prettierrc` for formatting rules
- Added `.prettierignore` to exclude build files
- Updated `eslint.config.mjs` for Prettier integration
- Added VS Code workspace settings

### 4. Clean Up Initial Files

- Remove default content from `app/page.tsx`
- Update `app/globals.css` if needed
- Configure Tailwind if needed

## Project Structure

```
├── app/
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   ├── globals.css    # Global styles
│   └── api/           # API routes
├── components/        # Reusable components
├── docs/             # This documentation
└── public/           # Static assets
```

## Next Steps

1. Create basic layout component
2. Build dashboard page
3. Add navigation
