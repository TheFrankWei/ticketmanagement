## User Story
1. As a User, I want to be able to submit a support ticket w/name, email, description -- POST
2. As a User, I should receive emails on ticket creation and status update (console log)
3. As an Admin, I should be able to view all tickets on the admin page -- GET
4. As an Admin, I want to be able to update the status of each ticket -- PATCH
5. As an Admin, I want to be able to respond to each ticket -- PATCH/POST/PUT

Schema:
-Ticket object: issue/response (1 to many), ticket status (string) 
-Ticket issue/response object: description (string)

Only 3 statuses, "new", "in progress", "resolved" -- implied oldest "Ticket issue/response object" was "new", everything else is "in progress" unless ticket is "resolved" (last is "resolved"). Could also have moved the status into the "Ticket issue/response object" to account for more detailed statuses past the 3.


##
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Copyright (c) [2024] [Frank Wei]
This code is provided for portfolio and demonstration purposes only.
Viewing and reviewing for evaluation purposes is permitted.
No other use, copying, modification, or distribution is permitted without explicit written permission.
