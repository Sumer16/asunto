# [Asunto Issue Tracker](https://asunto.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE)

![Asunto Issue Tracker Landing Page](/asunto.png)

## About Asunto Issue Tracker

This is a fully-functional full-stack issue tracker application that helps product owners to track issues for their teams in a productive and secure way.
This platform is built using Next.js 13.5, React, Radix UI, TailwindCSS, PostgreSQL, PlanetScale, Prisma, NextAuth and more.

## Key Features

- **Troubleshoot Issues:** Instantly look at various issues the team needs to work on
- **Editing & Deleting Issues:** Edit and delete issues in real-time
- **Pagination:** Manage multiple issues easily through pagination
- **Member Management:** Assign authenticated members various issues based on their skills
- **Charts:** Visualize the issues in a more seamless and detailed format
- **Stunning UI:** Beautifully designed using TailwindCSS and Radix UI
- **Responsiveness:** Works flawlessly on both desktop and mobile devices
- **Database & ORM:** PostgreSQL for robustness & Prisma for database operations
- **PostgreSQL Database:** Utilize Planetscale for your PostgreSQL database
- **Authentication:** Secured the app using NextAuth

## Installation

### Clone the repository
To get started, you'll need to clone this repository to your local machine. You can do this by running the following in the command line:

```bash 
git clone https://github.com/Sumer16/asunto.git 
```

### Install dependencies

Once you've cloned the repository, navigate to the project directory and run npm/yarn install to install all the necessary dependencies.

```bash
cd asunto

npm install
# or
yarn install
```

### Setup the environment variables

After the dependencies have been installed, create a ```.env``` file in the root of the project and add all necessary API credentials of your own:

```env
DATABASE_URL=your_db_url

GOOGLE_CLIENT_SECRET=your_google_secret
GOOGLE_CLIENT_ID=your_google_id

NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=your_nextauth_url
```

### Setup Prisma

Add PostgreSQL Database (I used PlanetScale but later changed to Supabase, you can use any of your own choice):

```bash
npx prisma generate
npx prisma db push
```

NOTE: The setup to migrate is very simple for MySQL to PostgreSQL.

### Run the development server

After the dependencies have been installed, you can start the development server by running:

```bash
npm run dev
# or
yarn dev
```

This will start the server at `http://localhost:3000`, and you can view the website in your browser.

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

## Build for production

```bash
npm run build
# or
yarn build
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```bash
npm install -g vercel
# or
yarn global add vercel

vercel
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Things to say

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Credits

- [Programming with Mosh](https://www.codewithmosh.com/) => Thanks for making this amazing tutorial!
