# UI Builder Template

## 🔥🔥 Template for UI Builder Node with Vue + Vite + Typescript and More 🔥🔥

### Features
- 💻 Built with Vue 3
- 🎨 Tailwind CSS
- 💎 Integrated with Morpheme UI
- 🚀 Provides TypeScript support by default
- 🥖 Linting support for better code
- 🔨 Node red for drag n drop node pallete and easily create backend services
- 🌩️ Socket io integrated

### How to run ?

- Clone this repo
```bash
git clone https://github.com/MuhamadAdrian/vue-node-red-template.git
```

- Install [lerna](https://lerna.js.org/) and [pnpm](https://pnpm.io/id/installation#menggunakan-npm), and [node-red](https://nodered.org/) globally:
```bash
npm i -g lerna pnpm node-red
```

- Install all packages with pnpm
```bash
pnpm install
```
- Run this command to start node-red server
```bash
pnpm dev
```

- And then open new terminal, build and watch the uibuilder client vue with this command
```bash
pnpm build:client:watch
```

Or you can preview the vue project with
```bash
lerna run dev
```

- Open http://localhost:1881 and now you are seeing the node-red admin dashboard
- For the ui dashboard, open new tab and you can copy this url http://localhost:1881/dashboard
- Finally, try to trigger inject node and see what happen on the dashboard ui 🌤️

