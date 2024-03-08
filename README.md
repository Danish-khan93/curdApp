# Curd app with React + TypeScript + Vite + Redux-toolkit

This is a simple CRUD (Create, Read, Update, Delete) application built using React. It allows users to perform CRUD operations on a list of items fetched from an API  https://jsonplaceholder.typicode.com/posts. Redux Toolkit is used for state management, and pagination is implemented for better user experience. React-router-dom is used for navigation between differnt pages. 

# Installation

To run this project locally, follow these steps:

* clone the repo  

```bash
https://github.com/Danish-khan93/curdApp.git
```
* install the project

```bash
npm install
```
* Run the project

```bash
npm run dev
```

# Features

* Create new items
* Read existing items
* Update existing items
* Delete items




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
