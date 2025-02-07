/** @format */

import { renderWithA11y } from '@/_internal/react-testing-library';
import React from 'react';
import { ButtonDefault as Button } from '.';

describe('Component - Atoms - Button', () => {
  test('should render button with children as text', async () => {
    await renderWithA11y(<Button>Click me</Button>);
  });
});
