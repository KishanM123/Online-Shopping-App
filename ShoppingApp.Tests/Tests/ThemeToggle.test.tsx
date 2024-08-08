// src/components/ThemeToggle.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Make sure to extend expect for matchers
import ThemeToggle from './ThemeToggle'; // Correct path to ThemeToggle component

describe('ThemeToggle Component', () => {
  test('toggles theme on button click', () => {
    render(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /switch to dark theme/i });
    expect(toggleButton).toBeInTheDocument();

    // Initial theme should be light
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Click to switch to dark theme
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Button text should update
    expect(toggleButton).toHaveTextContent(/switch to light theme/i);

    // Click again to switch back to light theme
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Button text should update
    expect(toggleButton).toHaveTextContent(/switch to dark theme/i);
  });
});
