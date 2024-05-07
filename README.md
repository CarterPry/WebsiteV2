# Personal Portfolio/Blog
## About This Project
This is my personal website, where I'll post from time to time on any topics or projects I might find interesting, mostly relating to technology. It was developed using [Astro](https://astro.build), a framework designed for less JavaScript usage and improved loading speeds. Astro is good for building high performance websites that are SEO-friendly and don't take long to load. It's extremely customizable with various UI frameworks and can integrate lots of tools/components.


More details on Astro can be found on the [official Astro documentation](https://docs.astro.build).

## Some Cool Features
- **Islands Architecture**: Optimized for interactive elements without sacrificing any performance.
- **UI Agnostic**: Compatible with frameworks like React, Vue, Svelte, and a lot more.
- **Zero JS by Default**: Reduces the amount of client-side JavaScript.


## Local Dev
This current site build is ran on [pnpm](https://pnpm.io/) and if your template as well, below is the table I used for the production of this project. Each command should be executed at the root of the project repo.

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm run dev`          | Starts local dev server                                                                                      |
| `pnpm run build`        | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`      | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check` | Check code format with Prettier                                                                                                  |
| `pnpm run format`       | Format codes with Prettier                                                                                                       |
| `pnpm run sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | Lint with ESLint                                                                                                                 |
