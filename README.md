# This both my frontend portfolio and my sandbox app for practicing stuff

### Practical project exercises, I want to do as many of these as possible:
- Pagination
  - Client-side pagination (breaking data into pages)
  - Server-side pagination (loading data on demand)
  - Infinite scrolling with lazy loading
  - Data tables with sorting and filtering
- Performance
  - Lazy loading components or images (same as above)
  - Reducing re-renders (e.g., React.memo, useMemo, useCallback)
  - Code splitting and dynamic imports
  - Optimizing bundle size (e.g., Webpack, Vite, Parcel)
  - Lighthouse audits (checking Core Web Vitals)
- Modal/dialog boxes
- Dropdown menus
- Search Bar with Debouncing
  - Create a searchable list that debounce input for performance
- Custom Hooks (React)
  - Write hooks for reusable logic like useFetch or usePagination
- Accordions
- Carousels/sliders
- E-commerce Features
  - Developing shopping carts and checkout processes
  - MedusaJS
- Form validation
  - Creating forms with real-time validation
- Autocomplete

- Charts and data visualization
- Drag and drop functionality
- Interactive Maps
  - Integrating maps using APIs like Google Maps
- Light/Dark Mode Toggle
  - Theme switching with localStorage persistence
  

### Other stuff I should be aware:
1. Core Fundamentals ⏳
   1. HTML
      - Semantic HTML (e.g., article, section, header, footer)
      - Accessibility a11y (ARIA roles, alt text for images, focus management)
        - Ensuring websites are usable by everyone, including those with disabilities
        - ARIA attributes
        - Keyboard navigation
        - Screen reader compatibility
      1. SEO Best Practices 
         - Semantic HTML (same thing as above)
         - Meta tags
         - Structured data (Schema.org)
   2. CSS
      - Layouts: Flexbox, Grid, and Positioning
      - Responsive design (media queries, mobile-first design)
      - Preprocessors like SCSS
      - Block Element Modifier
      - UI Component Libraries
        - Frameworks ike Tailwind CSS
        - Material-UI (MUI)
   3. TypeScript
      - ES6+ syntax (arrow functions, destructuring, template literals, modules)
      - DOM manipulation (vanilla JS, querySelector, addEventListener)
      - Type annotations
      - Interfaces
      - Generics
      - Event handling (e.g., click, input, debounce/throttle)
      - Fetch API and AJAX (working with APIs)
      - Promises and async/await
      - Error handling (try-catch, network error scenarios)
   4. Libraries like GSAP or Framer Motion
      - CSS animations
      - JavaScript animations
2. React Core ⏳
   - State Management (Redux)
     - Local state (e.g., useState in React, setState in Vue)
     - Global state (e.g., Redux, Zustand, MobX, Context API)
   - Routing
     - Implementing routing (React Router)
     - Handling protected routes and dynamic routing
   - Component Design
     - Building reusable UI components
     - Component patterns (compound components, higher-order components, render props)
3. Build Tools and Module Bundlers
   - Webpack
   - Vite
4. Version Control (git)
5. Package Managers (npm)
6. Testing
   - Vitest
   - React Testing Library
   - Mocking APIs for tests
   - End-to-End Testing:
     - Writing tests with Cypress, Playwright, or Puppeteer
   - Both manual and automated
7. Debugging (Chrome DevTools (Network, Performance, Elements tabs))
8. Cross-Browser Compatibility
   - Feature detection
   - Polyfills
9. Web Performance Optimization
   - Techniques to improve load times
10. Content Management Systems (CMS)
11. API Integration
    - RESTful APIs
    - GraphQL
      -  Writing queries and mutations
      -  Using Apollo or Relay for data fetching
    - Axios or Fetch for HTTP requests
12. Authentication and Authorization
    - JWT (JSON Web Tokens)
    - OAuth
13. Progressive Web Apps (PWAs)
    - Service Workers
    - Web App Manifests
14. Code Quality and Linting
    - ESLint
    - Prettier
15. Frontend Architecture
    - Component-based architecture
    - Micro-frontends
16. Shadow and Virtual DOM 
17. Server-Side Rendering (SSR) and Static Site Generation (SSG)
    - Next.js
18. Modern Web APIs
    - Intersection Observer
    - Web Storage
    - Geolocation
19. Web Security
    - HTTPS
    - CORS
    - XSS prevention
    - CSRF protection
20. Internationalization (i18n) and Localization (l10n)
    - Multi-language support
    - Right-to-left (RTL) layouts
21. WebSockets/Real-time updates:
    - Integrating real-time data (e.g., chat apps, live notifications)
22. RESTful API integration
    - CRUD operations (GET, POST, PUT, DELETE)
    - Handling API errors and retries
    - Pagination in APIs (e.g., ?page=1&limit=10 query params)
23. Task Runners (e.g., Gulp)
24. Writing docs (basically this Readme is enough for that)

#### Mentorálás:
Fixed:
- Kétszer hív be az apira, amikor az oldalra lépek. 
  - Megoldás: Bentmaradt a StrictMode deploynál ami 2x hívta az apit a 2x render miatt.
- Az api url-en a filter értékei ne menjenek be üresen 
  - Megoldás: Kicseréltem a ?? operátort a ||-ra vissza és így nem 0 a kezdeti érték
- Ha frissítem az oldalt, akkor lehal minden 
  - Megoldás: "Uncaught SyntaxError: Unexpected token '<'" < script src="index.html"></script> ezt ki kellett egészíteni egy type=text/HTML-lel
- Page indexek nem jók  
  - Megoldás: kicseréltem a ?? operátort a ||-ra vissza és így nem 0 a kezdeti érték. Lehet inicializálásnál túl megengedő...
- Reszponzivitás szinte tökéletes legyen 
  - Megoldás: Szerintem már majdnem tökéletes a paginálós oldalon. Kicsi közepes és nagy oldalrakra is külön bővítménnyel állítva a képernyő méretét.
- Illetve az oldal betöltésekor kérődjönek le a szűrőparamétereknek és a paginációnak megfelelő resultok
  - Megoldás: Szerintem ez jó volt alapból de lehet Roli valahogy máshogy tesztelte és úgy bugos. Tesztelnem kell még rajta.
- Legyen rajta valami search gomb, megnyomásra
    - Search gomb helyett filter clearelő gombot raktam, mert ha nem ismeri valaki a műsort akkor nem fogja tudni hogy mire tud rákeresni ezért jobb ha egyből keres gépelésre. Pl vannak Human-ok és Humanoid-ok is.
- Ha vissza gombot nyomok az előző oldalra ugorjak, ne pedig az előző filterparaméterekre.
    - Nem tudom hogy igazam van-e de szerintem ez jól működik. Ha Zalando-n kipróbálom hogy egy cipőn márkát és méretet állítok akkor először a méretet veszi el az URL-ből aztán pedig a márkáját a cipőnek amikor visszalépek.
- Filter paramok defaultból ne kerüljenek be az urlbe, ha a page-re lépek
    - De ha valaki el akarja linkelni az oldalt a kért paraméterekkel akkor pont hogy azt akarjuk, hogy ők is lássák hogy mi mire szűrtünk, nem?
- Mivel az API nem tud sortolni az összes találat között ezért csak kliens oldalt sortolok, ami nem jó, érdemes lenne kivenni ezt a lehetőséget
    - Megoldottam úgy, hogy ráraktam egy tooltip-et a menüre, szerintem érdemes bent hagyni mert az igazi munkában nem mindig fekete-fehér a megoldás amit keresünk, alkalmazkodni tudni kell a kéréshez

Nem fixed még / megmutatom újra hogy szerintem miért jó:
- Form validátor használata
  - Én csinálom a form validálást ami nem biztos hogy a legjobb, de működik
  - Meg kell nézni a Formik, React Hook Form + Yup könyvtárakat mert ezek a legjobbak a material-ui-hoz

Optional
- Ne legyen vegyítve a material és a tailwind, vagy ha igen, akkor indokold meg, ha esetleg megkérdezik
- Én azt ajánlom, hogy shadecn legyen használva
  - Ez jogos de szeretem gyakorolni a dolgoakt ebben az appban
  - Egy új rendes prodos app-ban nem vegyíteném a kettőt
