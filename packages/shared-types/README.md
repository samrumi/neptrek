# 🌊 @neptrek/shared-types

Welcome to the depths of type safety! This package contains the shared TypeScript types that keep the Neptrek project sailing smoothly. 

## 🧜‍♂️ What's Inside?

Just like Neptune's trident has three points, we have three main types:
- `SuccessResponse<T>` - For when everything goes swimmingly
- `ErrorResponse` - For when we hit rough waters
- More types coming soon... the ocean is deep!

## 🚢 Installation

Drop your anchor and install with your favorite package manager:

```bash
# Using pnpm (preferred)
pnpm add @neptrek/shared-types

# Using npm
npm install @neptrek/shared-types

# Using yarn
yarn add @neptrek/shared-types
```

## 🌊 Usage

Import types as easily as a fish takes to water:

```typescript
import type { SuccessResponse, ErrorResponse } from '@neptrek/shared-types';

// Success Response Example
const success: SuccessResponse<{ id: string }> = {
  success: true,
  message: "Smooth sailing!",
  data: { id: "neptune-123" }
};

// Error Response Example
const error: ErrorResponse = {
  success: false,
  error: "Hit an iceberg!",
  isFormError: true
};
```

## 🏊‍♂️ Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Watch mode
pnpm dev
```

## 🌊 License

ISC - As free as the ocean!

---
Made with 🌊 by the Qriousco team
