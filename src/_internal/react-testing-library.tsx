/** @format */
import { Queries, queries } from '@testing-library/dom';
import { RenderOptions, render } from '@testing-library/react'
import React, { JSXElementConstructor, ReactElement } from 'react'
import { axe, toHaveNoViolations } from 'jest-axe';

import { ThemeProvider } from "@material-tailwind/react";

import { theme } from '../theme';

expect.extend(toHaveNoViolations);

function customRender<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
>(
    ui: ReactElement<any, string | JSXElementConstructor<any>>,
    renderOptions?: RenderOptions<Q, Container, BaseElement>,
) {
    return render(
        <ThemeProvider value={theme}>
            {ui}
        </ThemeProvider>,
        renderOptions ?? {},
    );
}

/**
 * A wrapper around customRender that automatically runs accessibility checks.
 * @param {React.ReactElement} ui - The React element to render.
 * @param {object} providerOptions - Options for the theme provider.
 * @param {object} renderOptions - Options for Testing Library's render function.
 * @returns {object} - The result of the render function with a11y checks performed automatically.
 */
async function renderWithA11y<
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
>(
    ui: ReactElement<any, string | JSXElementConstructor<any>>,
    renderOptions?: RenderOptions<Q, Container, BaseElement>,
) {
    const { container } = customRender(ui, renderOptions);

    const results = await axe(container as Element);
    expect(results).toHaveNoViolations();

    return { container };
}

export * from '@testing-library/react';

export { renderWithA11y, customRender as render };
