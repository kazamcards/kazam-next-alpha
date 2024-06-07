# Kazam Cards

## What is this?

This repo is a rewrite and modern refresh of the trading card sales website [Kazam Cards](https://www.kazamcards.co.uk/).

**Live link:** https://kazam-next-alpha.vercel.app/

### Team Members

- [Connor Lansdown](https://github.com/MopeyHippo)
- [Katya Senior](https://github.com/KatyaSenior)
- [Isaac Dalglish](https://github.com/isaacgomu)
- [Kev Barr](https://github.com/KJB88)
- [Frankie Shrieves](https://github.com/frank-ventures)

# Before and After

**Before**

![before of the website](<public/images/(readme-images)/before-kazam.png>)

**After**

![after of the website](<public/images/(readme-images)/after-kazam.png>)

# Features!

- You can see the most Recently Added products, and scroll the latest 10.
- You can click on an individual product and see more information.
- Product not in stock? It'll tell ya with a nice `Sold Out!` message!
- Beautiful dynamically rendered `Categories` and `Eras` drop down menus, with `All Categories/Eras` pages, and also dynamic routes for the `Categories`/`Eras`. Woah! Just click them!
- A user can create an account on the site.
- An admin would be able to see a button to access an "Admin Console", which would let them input new products to the database.

# Instructions

_Not all sensitive information will be included as this project is for a client, however here's some instructions to get set up for yourself:_

1. Fork this repo and clone it to your local machine.

2. Set up your database _(We used Supabase in this instance, and Supabase also handles user login information)_ with the seed.sql file. This will give you your products, and other tables.
   The `seed.sql` is incomplete and you will need to fill in the gaps. The `seed.sql` was made early in the project and the database has been modified since then.
   The 'descriptions' and 'image_url' columns are missing from the `CREATE` statements and also the `INSERT` statements.

3. Set up your .env variables with these keys _(and get your own values!)_:

```
    AUTH_SECRET=
    AUTH_GITHUB_ID=
    AUTH_GITHUB_SECRET=
    DATABASE_URL=
    GOOGLE_ID=
    GOOGLE_SECRET=
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

4. Make sure to `npm install` locally so you can successfully run localhost

5. By this point you should hopefully be able to see the website working

6. You will have to connect your Supabase `Authentication` area to your project.
   [The Supabase docs are actually quite good to follow for this](https://supabase.com/docs/guides/auth/quickstarts/nextjs)

7. And then define an `admins` table, which contains a column for admin email addresses. This will be checked by the `<AdminSignedIn>` component.

---

# User Stories

Issues:

1.  Problem: Upon Isaac joining the group, we realised that he could not be added to the Jira without Katya's approval. At the time, she was on leave from the project and could not be quickly contacted.
    Status: Resolved. Katya approved the join request via mobile when notified.
2.  Problem: We're too neurodivergent for this and keep getting distracted.
    Status: Unresolved.

Bugs:

1.  Problem: Footer appears twice.
    Cause: Footer was in both the layout.tsx but also manually included on the homepage.
    Status: Resolved.

2.  Problem: Deployments failing.
    Cause: Errors in TypeScript - params in the indivdual product page was being flagged for its type not being declared.
    Status: Testing.

## Resources

- [Pokeball Loading Spinner](https://codepen.io/vinztt/pen/XjEyvZ)
