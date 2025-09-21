# Amy.bo's new website

Amy.bo is a non-profit open source protein fermentation community - and this is the 'new', yet-to-be-deployed website. Check out the ['website refresh' thread on the Amy.bo forum](https://forum.amybo.org/t/website-refresh/132/9) for more context and how you can get involved.

## Status

ACTIVE DEVELOPMENT - please [see the issues board to get an idea of what needs doing](https://github.com/users/myndrws/projects/3/views/1), and get started on one of these if you'd like to help out!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   │   ├── amybo.svg
│   │   ├── amybo_dark.svg 
│   │   └── free-forest.jpg
│   ├── components/
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── content/
│   │   └── docs/
│   │       ├── contact.mdx
│   │       ├── index.mdx
│   │       ├── mission.mdx
│   │       ├── collaborate/
│   │       │   ├── fund_us.mdx
│   │       │   ├── pioreactor.mdx
│   │       │   └── volunteer.mdx
│   │       ├── experiments/
│   │       │   ├── community_experiments.mdx
│   │       │   ├── hardware.mdx
│   │       │   ├── protocols.mdx
│   │       │   └── submit.mdx
│   │       ├── guides/
│   │       │   └── example.md
│   │       └── reference/
│   │           └── example.md
│   ├── data/
│   │   └── links.json
│   ├── styles/
│   │   ├── amybo.css
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

The image free-forest.jpg is a freely available, and subsequently edited, photo by <a href="https://unsplash.com/@ozarkdrones?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ozark Drones</a> on <a href="https://unsplash.com/photos/birds-eye-view-photo-of-trees-jeV-LUEyJoE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
      

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out the current (and soon to be replaced by this project) [Amy.bo site](https://amybo.org/) and [forum.](https://forum.amybo.org/)

For help on contributing using Starlight, check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
