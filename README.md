Stajım sırasında hazırlamış olduğum e-ticaret projesi.
----------------------------------------------------------
Bu projede ilk kez typescript kullandım ve neden javascript yerine tercih edildiğinin farkına vardım.State yönetimi tarafında redux kullandım.Verileri Fake Store API'den çektim.

Projemde ürünlerin listelenmesi,ürünlerin sepete eklenmesi,sepetteki ürünlerin fiyatlarının girilen adete göre değişmesi,ürünlerin kategori ve cinsiyete göre filtrelenmesi,ürünlerin fiyatlarının artan ve azalan olarak sıralanması ve pagination işlemlerini gerçekleştirdim.Bunun yanında basit seviyede dark-light mod değiştirme özelliği ve sadece ana sayfada çalışan tr-en dil değiştirme modu ekledim. 


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
