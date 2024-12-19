# 🏔️ @neptrek/db

Welcome to the data peaks of Neptrek! This package is your Sherpa through the database highlands, providing robust schemas and type-safe queries for all your trekking adventures.

## 🎒 What's in Our Pack?

Like any well-prepared trek, we've got all the essentials:

- 🗺️ **Schemas** - Your topographic maps
  - `trek` - Mapping out every trail and peak
  - `auth` - Securing your base camp
  - `waypoints` - Marking the important stops
  - `emergencyContacts` - Because safety comes first!

- 🧭 **Client** - Your reliable guide
  - Type-safe queries (never lose your way!)
  - Connection management
  - Error handling (for those rocky situations)

- ⛺ **Auth** - Your base camp security
  - User management
  - Session tracking
  - Permission checkpoints

## 🏕️ Installation

Pitch your tent in the project:

```bash
# Using pnpm (our preferred hiking buddy)
pnpm add @neptrek/db

# Using npm (the traditional path)
npm install @neptrek/db

# Using yarn (for alternative routes)
yarn add @neptrek/db
```

## 🥾 Usage

Navigate the data terrain with confidence:

```typescript
import { createClient } from '@neptrek/db';

// Establish your base camp
const db = createClient(process.env.DATABASE_URL);

// Scout the trails
const popularTreks = await db.query.trek.findMany({
  where: { difficulty: 'moderate' },
  orderBy: { rating: 'desc' }
});

// Mark a new trail
const newTrek = await db.insert(treks).values({
  name: "Annapurna Circuit",
  difficulty: "challenging",
  elevation: 5416,
  // More trail details
});
```

## 🗻 Schema Examples

### Trek Schema
```typescript
const treks = pgTable("treks", {
  name: text("name").notNull(),
  difficulty: difficultyEnum("difficulty").notNull(),
  elevation: integer("elevation").notNull(),
  // More fields for the perfect trek
});
```

## 🏃‍♂️ Development

```bash
# Pack your gear
pnpm install

# Start your expedition
pnpm dev

# Summit push (build)
pnpm build
```

## 🌄 Features Coming Soon

- 🏃‍♀️ Trail activity logging
- 🌡️ Weather data integration
- 📍 Advanced waypoint tracking
- 🚁 Emergency response system

## ⛰️ Best Practices

- Always check your types before starting your query journey
- Keep your migrations well-documented like a detailed trail map
- Test your routes before deploying to production peaks

## 🎯 License

ISC - As free as the mountain breeze!

---
Crafted with 🏔️ by the Neptrek team - Your guides in the database highlands
