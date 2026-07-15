import mongoose from 'mongoose';

import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      {
        username: 'alexrunner',
        email: 'alex.runner@example.com',
        firstName: 'Alex',
        lastName: 'Rivera',
        profile: { age: 31, fitnessLevel: 'intermediate', primaryGoal: 'Half-marathon endurance' },
      },
      {
        username: 'maya_lifts',
        email: 'maya.lifts@example.com',
        firstName: 'Maya',
        lastName: 'Chen',
        profile: { age: 27, fitnessLevel: 'advanced', primaryGoal: 'Strength progression' },
      },
      {
        username: 'samcycles',
        email: 'sam.cycles@example.com',
        firstName: 'Sam',
        lastName: 'Patel',
        profile: { age: 36, fitnessLevel: 'beginner', primaryGoal: 'Build weekly consistency' },
      },
    ]);

    await Team.insertMany([
      {
        name: 'Morning Milers',
        description: 'Early risers logging steady outdoor miles before work.',
        city: 'Seattle',
        memberUsernames: ['alexrunner', 'samcycles'],
        weeklyGoalMinutes: 420,
      },
      {
        name: 'Core Crew',
        description: 'Strength and mobility team focused on durable training habits.',
        city: 'Austin',
        memberUsernames: ['maya_lifts'],
        weeklyGoalMinutes: 360,
      },
    ]);

    await Activity.insertMany([
      {
        username: 'alexrunner',
        activityType: 'Run',
        durationMinutes: 52,
        caloriesBurned: 610,
        activityDate: new Date('2026-07-12T06:30:00.000Z'),
        notes: 'Tempo intervals with a relaxed cooldown.',
      },
      {
        username: 'maya_lifts',
        activityType: 'Strength Training',
        durationMinutes: 48,
        caloriesBurned: 390,
        activityDate: new Date('2026-07-13T18:15:00.000Z'),
        notes: 'Lower-body session with deadlift volume work.',
      },
      {
        username: 'samcycles',
        activityType: 'Cycling',
        durationMinutes: 40,
        caloriesBurned: 430,
        activityDate: new Date('2026-07-14T12:00:00.000Z'),
        notes: 'Lunchtime ride on the river trail.',
      },
    ]);

    await LeaderboardEntry.insertMany([
      { username: 'alexrunner', points: 1420, rank: 1, weeklyMinutes: 265, streakDays: 12 },
      { username: 'maya_lifts', points: 1310, rank: 2, weeklyMinutes: 220, streakDays: 8 },
      { username: 'samcycles', points: 980, rank: 3, weeklyMinutes: 165, streakDays: 5 },
    ]);

    await Workout.insertMany([
      {
        title: 'Endurance Builder Run',
        focusArea: 'Cardio',
        difficulty: 'intermediate',
        estimatedMinutes: 45,
        exercises: ['Dynamic warmup', 'Steady run', 'Stride repeats', 'Cooldown walk'],
      },
      {
        title: 'Foundational Strength Circuit',
        focusArea: 'Full Body',
        difficulty: 'beginner',
        estimatedMinutes: 30,
        exercises: ['Goblet squats', 'Incline pushups', 'Dumbbell rows', 'Plank holds'],
      },
      {
        title: 'Power Lower Body',
        focusArea: 'Strength',
        difficulty: 'advanced',
        estimatedMinutes: 55,
        exercises: ['Deadlifts', 'Walking lunges', 'Hip thrusts', 'Farmer carries'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
