# Student Portfolio - Practical 8: Performance Optimization & Lazy Loading

A modern React Single Page Application (SPA) optimized for high performance using **Route-Based and Component-Level Code Splitting** with `React.lazy()` and `Suspense`.

## Key Features
- **Route-Based Code Splitting**: `Home`, `Projects`, `Contact`, and `NotFound` pages are dynamically imported on-demand.
- **Component-Level Lazy Loading**: Heavy interactive `AnalyticsVisualizer` chart component loaded asynchronously only when requested.
- **Meaningful Suspense Fallback**: Custom spinner and pulsing skeleton placeholder displayed while chunks download.
- **Performance Profiling**: Measured bundle size and chunk transfer metrics before and after optimization.

---

## Code Splitting Architecture

```text
index-main.js (Initial App Shell)
   ├── /          ──► Home-*.js (1.24 kB)
   ├── /projects  ──► Projects-*.js (2.86 kB)
   │     └─► Toggle Analytics ──► AnalyticsVisualizer-*.js (2.19 kB)
   ├── /contact   ──► Contact-*.js (1.95 kB)
   └── * (404)    ──► NotFound-*.js (0.57 kB)
```

---

## Build Output Evidence
```text
dist/index.html                                0.46 kB │ gzip:  0.30 kB
dist/assets/index-BlflHquF.css                 3.68 kB │ gzip:  1.34 kB
dist/assets/NotFound-BNq-D5nH.js               0.57 kB │ gzip:  0.37 kB
dist/assets/Home-EifYjOr2.js                   1.24 kB │ gzip:  0.59 kB
dist/assets/Contact-zaJUjsu4.js                1.95 kB │ gzip:  0.96 kB
dist/assets/AnalyticsVisualizer-BCaX79Js.js    2.19 kB │ gzip:  0.97 kB
dist/assets/Projects-B1eQ9uqj.js               2.86 kB │ gzip:  1.31 kB
dist/assets/index-CZCVpAHY.js                260.82 kB │ gzip: 82.83 kB
```

For full performance comparison metrics and viva answers, see [performance_comparison.md](docs/performance_comparison.md).

---

## Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle with code-split chunks
npm run build

# Preview production build
npm run preview
```