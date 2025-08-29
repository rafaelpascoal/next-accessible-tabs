# An **accessible and reusable Tabs** built with [shadcn/ui](https://ui.shadcn.com/) and Radix, featuring proper accessibility support and Playwright tests.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** shadcn/ui + Radix
- **Styling:** Tailwind CSS
- **Animation (optional):** Framer Motion
- **Testing:** Playwright (end-to-end tests)

---

## 🛠 Installation

### 1. Clone the repository

```bash
git clone https://github.com/rafaelpascoal/nextjs-accessible-tabs.git
cd nextjs-accessible-tabs
```

### 2. Install Dependencies

```bash
pnpm install
# or npm install / yarn install
```

### 3. Install shadcn/ui

```bash
npx shadcn-ui init
```

- Choose a theme (e.g., neutral, gray, zinc, stone, slate)
- Confirm creation of the components/ui folder.

### 4. Add Required Components

```bash
npx shadcn-ui add tabs
```

### 5. Run the Development Server

```bash
npm run dev
```

## ✨ Features

- ♿ Fully accessible Tabs with keyboard navigation
- ⌨️ Handles ESC key and focus management
- 🔄 Reusable and composable architecture
- 🧪 Playwright tests covering core behavior
- ⚡ Built with modern Next.js App Router
- 🖼 Smooth animations using Framer Motion

## ♿ Accessibility Features
This component follows accessibility best practices using Radix UI:

- Focus trapping / management
- ESC key handling
- Keyboard navigation support
- ARIA attributes automatically managed by Radix

## 📦 Usage

```typescript
'use client'

import { useState } from "react"
import AccessibleTabs from "@/components/AccessibleTabs"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <AccessibleTabs />
    </main>
  )
}
```

## 🧪 Running Tests

```bash
npx playwright test
```

## 📸 Preview

🔗 Live Demo: https://next-accessible-tabs.vercel.app/

## 🚀 Deployment

- Optimized for deployment on Vercel.
- Connect your GitHub repository and deploy with one click.

## 📋 Project Checklist

### Setup & Base

✅ Initialize Next.js project (App Router)
✅ Configure Git repository and GitHub remote
✅ Install Tailwind CSS
✅ Install shadcn/ui + Radix
✅ Implement reusable AccessibleTabs component
✅ Update page.tsx to use the component
✅ Update README with initial project structure and usage

### Features

✅ Fully accessible keyboard navigation
✅ Automatic focus on active tab
✅ Smooth animations with Framer Motion

### Documentation

✅ README updated with usage examples
✅ Add installation instructions for shadcn/ui
✅ Add detailed explanation of accessibility features

### Testing

✅ Install & configure Playwright
✅ End-to-end tests for tab switching, keyboard navigation

### Deployment

✅ Deploy to Vercel with live demo link

## 📂 Project Structure

```bash
src/
 ├─ app/               # Next.js App Router structure
 ├─ components/        # Reusable UI components
 │   ├─ ui/            # shadcn/ui components (button, dialog, tabs, etc.)
 │   └─ AccessibleTabs/ # Accessible Tabs implementation
 └─  tests/e2e            # Playwright end-to-end tests
 ```

 -  👉 This template works for Tabs, Dropdown, Accordion, Modal, Toast, etc. — just replace Tabs with the component name.