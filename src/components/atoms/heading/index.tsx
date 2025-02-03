import React, { JSX } from 'react'

type HeadingProps = {
    headingLevel?: HeadingSize;
    children?: string;
}

export enum HeadingSize {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

const Heading = ({ children, headingLevel }: HeadingProps) => {
    const Title = headingLevel as keyof JSX.IntrinsicElements;
        
    return <Title>{children}</Title>
};

export default Heading;
