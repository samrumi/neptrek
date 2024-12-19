# 🏔️ @neptrek/types

Welcome to the base camp of type safety! These TypeScript types will be your trusty guide through the Neptrek codebase trails.

## 🎒 What's in Your Backpack?

Just like every trekker needs essential gear, we've packed the core types you'll need:

- 🗺️ `NTApiResponse` - Your map for API navigation
- 🧭 `NTTrekTypes` - Types for all your trekking adventures
- ⛺ `NTAuthTypes` - Your shelter for authentication
- And more types waiting to be discovered on the trail!

## 🏕️ Installation

Set up your base camp with your favorite package manager:

```bash
# Using pnpm (our favorite trail companion)
pnpm add @neptrek/types

# Using npm (the classic route)
npm install @neptrek/types

# Using yarn (for those who like different paths)
yarn add @neptrek/types
```

## 🥾 Usage

As easy as following trail markers:

```typescript
import type { NTApiResponse, NTTrekDifficulty } from '@neptrek/types';

// Mark your trail with proper types
const response: NTApiResponse<{ trailId: string }> = {
  success: true,
  message: "Trail found!",
  data: { trailId: "everest-base-camp-01" }
};

// Choose your path wisely
const difficulty: NTTrekDifficulty = "challenging";
```

## 🗻 Type Categories

### Summit Types (API Responses)
```typescript
type NTApiResponse<T> = NTSuccessResponse<T> | NTErrorResponse;
```

### Trail Types (Trek Related)
```typescript
type NTTrekDifficulty = "easy" | "moderate" | "challenging" | "difficult" | "extreme";
```

### Base Camp Types (Auth)
```typescript
interface NTUser {
  id: string;
  name: string;
  // More fields for our trekking community
}
```

## 🏃‍♂️ Development

```bash
# Pack your gear (install dependencies)
pnpm install

# Start your trek (development mode)
pnpm dev

# Reach the summit (build)
pnpm build
```

## 🌄 Contributing

Every great trek starts with a single step! Feel free to contribute and help us map new type territories.

## 🎯 License

ISC - As free as the mountain air!

---
Built with 🏔️ by the Neptrek team - Guiding developers to type-safe peaks
