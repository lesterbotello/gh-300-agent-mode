import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
    weeklyMinutes: { type: Number, required: true },
    streakDays: { type: Number, required: true },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);