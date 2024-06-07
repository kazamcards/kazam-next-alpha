# Kazam Cards

## What is this?

This repo is a rewrite and modern refresh of the trading card sales website [Kazam Cards](https://www.kazamcards.co.uk/).

It served as the final Week 12 Project for the team members below, who were on the [Tech Educators Software Development Bootcamp](https://techeducators.co.uk/)

**Live link:** https://kazam-next-alpha.vercel.app/

We completed our task remaining fully remote. We co-ordinated planning and tasks through Figma and Jira, and communication via Google Meet and Discord _(See bottom of README for visuals)_

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

---

# Features!

- You can see the most Recently Added products, and scroll the latest 10.
- You can click on an individual product and see more information.
- Product not in stock? It'll tell ya with a nice `Sold Out!` message!
- Beautiful dynamically rendered `Categories` and `Eras` drop down menus, with `All Categories/Eras` pages, and also dynamic routes for the `Categories`/`Eras`. Woah! Just click them!
- A user can create an account on the site.
- An admin would be able to see a button to access an "Admin Console", which would let them input new products to the database.

---

# Instructions

_Not all sensitive information will be included as this project is for a client, however here's some instructions to get set up for yourself:_

1. Fork this repo and clone it to your local machine.

2. Set up your database _(We used Supabase in this instance, and Supabase also handles user login information)_ with the seed.sql file. This will give you your products, and other tables.

   - The `seed.sql` is incomplete and you will need to fill in the gaps. - The `seed.sql` was made early in the project and the database has been modified since then.
   - The 'descriptions' and 'image_url' columns are missing from the `CREATE` statements and also the `INSERT` statements.

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

   - [The Supabase docs are actually quite good to follow for this](https://supabase.com/docs/guides/auth/quickstarts/nextjs)

7. And then define an `admins` table, which contains a column for admin email addresses. This will be checked by the `<AdminSignedIn>` component.

---

# User Stories

- As an admin I want to add new sets.

- As an admin I want to upload new products, ideally with: images, description, sale price, buy in cost, stock count, SKU, delivery charges, special offers.

- As an admin I want to create categories to organise stock, so the website can load different categories for different shop pages.

- As an admin I want to create special offers for a category as well as for individual items.

- As an admin I want to create emails to send to members about products.

- As a user, I want to be able to register for membership (IE users can make an account on the website).

- As a user I want to be able to browse the different categories of available products.

- As a user I want to be able to make an account which can track my purchase history.

- As a user I want to be able to see my basket, and have it save my basket between visits (IE if I close my tab).

- As a user I want to be able to buy nice shiny things!!!!

- As a user I want to be able to see all affiliated links in one place: Instagram, facebook etc. (See the bottom of the page - that’s what we’re tidying up!)

---

# MVP - Minimum Viable Product Goals

1. A modern website design

   - Sleek UI, basic UX like hover effects.
   - Nice colour scheme.
   - Good visual hierarchy.
   - Separate pages for about, products? etc.
   - To give off a more trustworthy feeling

2. A backend database which contains

   - Individual products
   - Categories for sealed products, singles being part of ‘sword shield’/’scarlet violet’ etc
   - Plus their sub sets, editions, promo singles, non-card products IE storage

3. A user can browse the website. And add to basket (MVP = sealed products) _(Note: this wasn't achieved, but we got close with some dummy buttons and a fancy basket icon!)_

4. An admin can add products to the site.

- Functionality all in all:
  - Back end has products, with categories
  - Front end has browseable and searchable products
  - Front end has browseable categories
  - An admin can log in
    - Can add new products
    - Can edit existing products
  - A user can log in
    - Can add items to their cart
    - Can eventually purchase products

---

# Issues

1.  Problem: Upon Isaac joining the group, we realised that he could not be added to the Jira without Katya's approval. At the time, she was on leave from the project and could not be quickly contacted.

    - Status: Resolved. Katya approved the join request via mobile when notified.

2.  Problem: We're too neurodivergent for this and keep getting distracted.

    - Status: Unresolved.

3.  Problem: Authentication was an issue from start to finish.

    - Status: Resolved for the project. Auth.js was difficult to implement when trying to integrate with Supabase, which led us to finding out about Supabases integrated Auth.

# Bugs

1.  Problem: Footer appears twice.

    - Cause: Footer was in both the layout.tsx but also manually included on the homepage.

    - Status: Resolved.

2.  Problem: Deployments failing.

    - Cause: Errors in TypeScript - params in the indivdual product page was being flagged for its type not being declared.

    - Status: Resolved. Lots of TypeScripting added, and some `time-sink ignore` added too _(`@ts-ignore`)_

# Extras

## Resources

- [Pokeball Loading Spinner](https://codepen.io/vinztt/pen/XjEyvZ)

- Inspiration from [Chaos Cards](https://www.chaoscards.co.uk/shop/card-games/pokemon)

- Inspiration from [Total Cards](https://totalcards.net/collections/pokemon)

- [Auth.js Docs](https://authjs.dev/guides/role-based-access-control)

## Planning Visuals

**Jira Sprints**
![jira image of sprints](<public/images/(readme-images)/jira-sprints.png>)

**Jira Boards**
![jira image of boards](<public/images/(readme-images)/jira-boards.png>)

**Jira Resources**
![jira image of resources](<public/images/(readme-images)/jira-resources.png>)

**Figma Overall View**
![figma image of our whole board](<public/images/(readme-images)/figma-birds-eye.png>)

**Figma Wireframes**
![figma image of the wireframes](<public/images/(readme-images)/figma-wireframes.png>)
