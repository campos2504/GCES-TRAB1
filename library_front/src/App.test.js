import { render, screen } from '@testing-library/react';
import { validateEmail, validateName, validateSignUp } from './Utils/validations/index.js';

describe('Email Validation', () => {
  test('Valid email should return true', () => {
    const email = 'test@example.com';
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  test('Invalid email should return false', () => {
    const email = 'invalid_email';
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe('Name Validation', () => {
  test('Valid name should return true', () => {
    const name = 'John Doe';
    const result = validateName(name);
    expect(result).toBe(true);
  });

  test('Invalid name should return false', () => {
    const name = '123';
    const result = validateName(name);
    expect(result).toBe(false);
  });
});

describe('Sign Up Validation', () => {
  test('Valid email should return true', () => {
    const email = 'test@example.com';
    const name = 'John Doe';
    const result = validateSignUp(email, name);
    expect(result).toBe(true);
  });

  test('Invalid email should return false', () => {
    const email = 'invalid_email';
    const name = 'John Doe';
    const result = validateSignUp(email, name);
    expect(result).toBe(false);
  });
});
