import { renderWithA11y } from '@/_internal/react-testing-library';
// import { render } from '@testing-library/react'

import React from 'react';
import BadButton from '.';

describe('Component - BadButton', () => {
    test('should render button with children as text', async () => {
        await renderWithA11y(
            <BadButton
                as="div"
                tabindex="-1"
                aria-hidden="true"
                type="button"
            ></BadButton>,
        );
    });
});
