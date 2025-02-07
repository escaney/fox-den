## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Get up and running:

```bash
npm install

npm run dev
```

## Automated accessibility tests built in

I wanted to create a starter project that has automated accessibility tests built in from the start. This project is using jest and [jest-axe](https://www.npmjs.com/package/jest-axe). Such a great tool provided by the folks over at [Deque](https://www.deque.com).

Using a custom render method, utilising react-testing-library, we can wrap our components in our tests and have accessibility checks run automagically.

## Things to note

1. Automated accessibility checks apparently only catch around 30% of accessibiltiy violations. They are not a silver bullet. Be mindful to have a well rounded approach to accessibility. There are many great resources on the web. [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) is the obvious place to start. I also really enjoyed snooping through this project: [Inclusive Components](https://inclusive-components.design/)

2. Next.js out the box uses SWC as it's compiler, so there is a small work around to configure jest using @swc/jest. No big shakes, should just work via the commands above.
