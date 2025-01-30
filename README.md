This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Setting up Environment Variables

1. Create a `.env` file in the root directory and add the following variables:

```env
# Database Configuration
DATABASE_URL="mysql://root:@localhost:3306/db_name"

# GitHub OAuth Configuration
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"

# NextAuth Secret
AUTH_SECRET="your_generated_secret"
```

To get the required values:

- Generate AUTH_SECRET using: `npx auth secret`
- Get GitHub OAuth credentials from [GitHub Developer Settings](https://github.com/settings/applications/new)

### Installation and Setup

```bash
# Install dependencies
pnpm install
# or
npm install

# Setup database
npx prisma migrate dev  # Create database tables
npx prisma db seed     # Populate with initial data

# Start development server
pnpm dev
# or
npm run dev
```

Your application will be available at:

- Frontend: [http://localhost:3000](http://localhost:3000)
- GraphQL API: [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)

### Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
