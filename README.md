# React Monorepo Template
Many monorepo is using Lerna on top of yarn workspaces without a reason. For most of React monorepos, the high level Lerna commands are never used. It is unnecessary to bring Lerna to increase the complexity here.

Starting from npm 7, npm provides the support for workspaces similar to yarn. And now the npm 8.1.2 is shipped with Node.js v16.13.1. Here, we create a simple React Monorepo template with npm workspaces. No Lerna.
## npm workspaces
```shell
// initialize the top level repo
npm init 

// adds the first workspace
npm init -w ./packages/lib-a 

// adds the second workspace
npm init -w ./packages/lib-b 
```

## adds react
```shell
npm install -D react react-dom
```
## adds typescript
```shell
npm install -D typescript
```

## adds MUI
```shell
npm install @mui/material @emotion/react @emotion/styled

// install for workspace lib-a only
npm install @mui/material @emotion/react @emotion/styled -w lib-a
```
## adds rollup
```shell
npm install -D rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser @rollup/plugin-babel @rollup/plugin-replace node-sass @babel/preset-react
```
## adds storybook
```shell
npx sb init --type react

// install postcss
npm install -D postcss

// run story book
npm run storybook
```