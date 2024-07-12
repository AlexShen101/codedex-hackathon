# Sip & Play SSR Website + Strapi CMS

### Table of Contents



# About

### Team Code Sovereigns
Alex (https://www.linkedin.com/in/alexandershen2004/), Julian (https://www.linkedin.com/in/jatkindev/), Leeanna

<img src="./readme/sipnplayEvents.png" alt="Sip & Play Events Page" width="600"/>

#### GitHub:

**Next.js**: https://github.com/AlexShen101/codedex-hackathon

**Strapi**: https://github.com/jmdatkin/codedex-hackathon-strapi

**Live demo**: https://codedex-hackathon-sip-n-play.vercel.app/


### Greetings hackathon organizers!

For our project we wanted to overhaul Sip & Play’s site to enhance its speed, streamline its design, and integrate it with a CMS to allow the owners to easily add new content.

To achieve this we chose to use Next.js combined with Strapi, a headless CMS. Strapi supports content editing via an admin dashboard, and its database can be queried via REST. Next.js allowed us to perform server side rendering for SEO optimization, and it also allowed us to efficiently render dynamic pages based on database content, and we used its close integration with Vercel for hassle-free deployments.

First we created a design for the site, which was inspired by the colors of boba and board games. Leeanna really pulled through here and built us an awesome and sleek layout and color scheme.

Meanwhile, while I was setting up Strapi, Alex broke ground on the Next.js app. He built out all our pages, configured Tailwind CSS, and translated Leeanna’s design into code.

I based the database structure off of the types of content already present on Sip & Play’s current website: identifying key entities like menu categories, menu items, and individual price points for menu items.

I incorporated these entities into distinct content types in Strapi. Now new content can be written in a user-friendly manner via the admin dashboard, and it will seamlessly dynamically render into our Next.js website.

Lastly, with the foundation in place, we implemented more complex features like an event calendar, a detailed events view. We additionally designed some 3D models from scratch to add a friendly and interactive feel to the menu.

This hackathon was an awesome experience! I’m so tired writing this but I had a great time building with an awesome and talented team! I want to thank my team members for making this project possible, and of course a huge thank you to Codedex and all hackathon organizers and volunteers for making this whole thing happen!

Will definitely keep an eye out for more events like this in the future! 🔥


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started
**Note:** This project requires npm version 18.19!

First, install dependencies:
```
npm install
# or
yarn
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
