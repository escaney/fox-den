/** @format */

import { renderWithA11y } from '@/_internal/react-testing-library';
import React from 'react';
import Heading, { HeadingSize } from '.';

describe('Component - Atoms - Heading', () => {
  test('should render heading with children as text', async () => {
    await renderWithA11y(
      <Heading headingLevel={HeadingSize.H1}>Title</Heading>
    );
  });
});
