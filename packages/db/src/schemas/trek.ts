import {
  boolean,
  decimal,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { user } from "./auth";

const NT_TREK_DIFFICULTY = [
  "easy",
  "moderate",
  "challenging",
  "difficult",
  "extreme",
] as const;

const NT_TREK_SEASONS = ["spring", "summer", "fall", "winter"] as const;

export const difficultyEnum = pgEnum("difficulty", NT_TREK_DIFFICULTY);
export const seasonEnum = pgEnum("season", NT_TREK_SEASONS);

// Trek base table
export const treks = pgTable("treks", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull().unique(),
  description: text("description").notNull(),
  difficulty: difficultyEnum("difficulty").notNull(),
  distance: decimal("distance").notNull(), // in kilometers
  duration: integer("duration").notNull(), // in days
  maxAltitude: integer("max_altitude").notNull(), // in meters
  startPoint: text("start_point").notNull(),
  endPoint: text("end_point").notNull(),
  bestSeasons: seasonEnum("best_seasons").array().notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdById: text("created_by_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Waypoints along the trek
export const waypoints = pgTable("waypoints", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  trekId: text("trek_id")
    .references(() => treks.id)
    .notNull(),
  name: text("name").notNull(),
  description: text("description"),
  latitude: decimal("latitude").notNull(),
  longitude: decimal("longitude").notNull(),
  altitude: integer("altitude").notNull(), // in meters
  distanceFromStart: decimal("distance_from_start").notNull(), // in kilometers
  type: text("type").notNull(), // e.g., 'rest_stop', 'viewpoint', 'camping', 'lodge'
  facilities: text("facilities").array(), // e.g., ['water', 'food', 'lodging']
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Emergency contacts along the trek route
export const emergencyContacts = pgTable("emergency_contacts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  trekId: text("trek_id")
    .references(() => treks.id)
    .notNull(),
  name: text("name").notNull(),
  type: text("type").notNull(), // e.g., 'medical', 'police', 'rescue'
  phone: text("phone").notNull(),
  description: text("description"),
  latitude: decimal("latitude").notNull(),
  longitude: decimal("longitude").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Trek Reviews
export const trekReviews = pgTable("trek_reviews", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  trekId: text("trek_id")
    .references(() => treks.id)
    .notNull(),
  userId: text("user_id")
    .references(() => user.id)
    .notNull(),
  rating: integer("rating").notNull(), // 1-5
  review: text("review"),
  visitDate: timestamp("visit_date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Types for use in the application
export type Trek = typeof treks.$inferSelect;
export type NewTrek = typeof treks.$inferInsert;
export type Waypoint = typeof waypoints.$inferSelect;
export type NewWaypoint = typeof waypoints.$inferInsert;
export type EmergencyContact = typeof emergencyContacts.$inferSelect;
export type NewEmergencyContact = typeof emergencyContacts.$inferInsert;
export type TrekReview = typeof trekReviews.$inferSelect;
export type NewTrekReview = typeof trekReviews.$inferInsert;
