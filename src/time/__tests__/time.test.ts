/** @ts-ignore */
import { describe, expect, test } from 'bun:test';
import * as time from '..';

describe('time', () => {
  describe('milliseconds', () => {
    test('1 second to milliseconds', () => {
      expect(time.milliseconds(1000).valueOf()).toBe(1000);
    });

    test('1 minute to milliseconds', () => {
      expect(time.milliseconds(60000).valueOf()).toBe(60000);
    });

    test('1 hour to milliseconds', () => {
      expect(time.milliseconds(3600000).valueOf()).toBe(3600000);
    });

    test('1 day to milliseconds', () => {
      expect(time.milliseconds(86400000).valueOf()).toBe(86400000);
    });
  });

  describe('seconds', () => {
    test('1 second to seconds', () => {
      expect(time.seconds(1).valueOf()).toBe(1);
    });

    test('1 minute to seconds', () => {
      expect(time.seconds(60).valueOf()).toBe(60);
    });

    test('1 hour to seconds', () => {
      expect(time.seconds(3600).valueOf()).toBe(3600);
    });

    test('1 day to seconds', () => {
      expect(time.seconds(86400).valueOf()).toBe(86400);
    });
  });

  describe('minutes', () => {
    test('1 second to minutes', () => {
      expect(time.minutes(1).valueOf()).toBe(1);
    });

    test('1 minute to minutes', () => {
      expect(time.minutes(60).valueOf()).toBe(60);
    });

    test('1 hour to minutes', () => {
      expect(time.minutes(3600).valueOf()).toBe(3600);
    });

    test('1 day to minutes', () => {
      expect(time.minutes(86400).valueOf()).toBe(86400);
    });
  });

  describe('hours', () => {
    test('1 second to hours', () => {
      expect(time.hours(1).valueOf()).toBe(1);
    });

    test('1 minute to hours', () => {
      expect(time.hours(60).valueOf()).toBe(60);
    });

    test('1 hour to hours', () => {
      expect(time.hours(3600).valueOf()).toBe(3600);
    });

    test('1 day to hours', () => {
      expect(time.hours(86400).valueOf()).toBe(86400);
    });
  });

  describe('days', () => {
    test('1 second to days', () => {
      expect(time.days(1).valueOf()).toBe(1);
    });

    test('1 minute to days', () => {
      expect(time.days(60).valueOf()).toBe(60);
    });

    test('1 hour to days', () => {
      expect(time.days(3600).valueOf()).toBe(3600);
    });

    test('1 day to days', () => {
      expect(time.days(86400).valueOf()).toBe(86400);
    });
  });
});
