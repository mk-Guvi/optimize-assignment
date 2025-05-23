# Frontend Assignment: Landing site Optimization

## Task

You're given a simple landing website. Written in Next.js, using TypeScript.

The website has:

- landing page
- demo page
- blog
- gallery
- pricing


Here's a cleaned-up and professional version of your changes using the `Where / What / Why` format, ideal for inclusion in a README or assignment submission:

---

### CHANGES DONE

* **Where**: `app/globals.css`
  **What**: Added CSS to hide horizontal scrollbar
  **Why**: To prevent horizontal scroll in the Plans section for better layout control

* **Where**: `app/components/OpImage.tsx`
  **What**: Added a reusable Next.js `Image` component with a skeleton loader
  **Why**: To follow the DRY principle and optimize image loading experience

* **Where**: `app/components/common/Button.tsx`, `app/components/common/Input.tsx`
  **What**: Created reusable `Button` and `Input` components
  **Why**: To maintain a consistent UI across the application

* **Where**: `app/components/layouts/BaseLayout`
  **What**: Implemented a common layout component
  **Why**: To enforce uniform layout structure and follow DRY principle

* **Where**: `app/components/AppBar`
  **What**: Added backdrop and adjusted text size for small devices
  **Why**: To enhance mobile responsiveness and ensure content is  hidden behind the top bar during scroll.

* **Where**: `app/(home)/page`
  **What**: Moved Home page to `(home)` folder
  **Why**: To separate home-specific components from shared ones and improve folder organization

* **Where**: `app/(home)/_components/Features`, `FontShowCase`, `Gallery`, `Hero`
  **What**: Moved Home page sections to `_components` folder; replaced static image tags with `OpImage`; removed redundant background classes; updated video source in `Hero`
  **Why**: To organize home components, lazy-load images, and eliminate duplicated styling

* **Where**: `app/blog/_components/BlogPostCard`, `NewsLetter`, `page`
  **What**: Moved Blog components to `_components` folder; reused `Input`, `Button`, `BaseLayout`, and `OpImage`
  **Why**: To improve organization, enable component reuse, and optimize image loading

* **Where**: `app/demo/_components/GeneratedImage`, `PromptInput`, `page`
  **What**: Moved Demo page components to `_components` folder; reused `Button` and `BaseLayout` and fixed height of the card container to maintain the UI consistent.
  **Why**: To centralize demo components and enforce component reuse

* **Where**: `app/gallery/layout`, `page`, `loading`, `Pagination`
  **What**: Added layout, loading, and pagination components; implemented server-side pagination; reused `OpImage`
  **Why**: To support server-side rendering for faster load times and partial content loading with suspense

* **Where**: `app/pricing/page`
  **What**: Enabled horizontal scroll for pricing cards and hid the scrollbar
  **Why**: To make all cards visible and improve mobile responsiveness

* **Where**: `next.config.js`
  **What**: Added `pexels.com` to the list of allowed image domains
  **Why**: To enable the use of Pexels-hosted images with the Next.js `Image` component
