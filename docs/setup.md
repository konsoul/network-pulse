# Setup Guide

## Prerequisites
- Node.js 18+ installed
- VS Code (recommended)

## Project Setup Steps

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest . --tailwind --eslint --app --typescript
```

### 2. Install Additional Dependencies
```bash
npm install @heroicons/react
```

### 3. Clean Up Initial Files
- Remove default content from `app/page.tsx`
- Update `app/globals.css` if needed
- Configure Tailwind if needed

### 4. Start Development Server
```bash
npm run dev
```

### 5. Verify Setup
- Visit http://localhost:3000
- Confirm Tailwind is working
- Check for any errors

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
