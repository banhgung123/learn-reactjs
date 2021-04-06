## Folder structure

```
src
|__ components (shared components betweens features)
| |__ Loading
| |__ index.jsx
| |__ styles.scss
|
|__ features
| |__ Todo
| |__ components (components of feature Todo)
| |__ pages (pages of feature Todo)
| |__ index.jsx (entry point of feature Todo)
|
|__ App.js
```

FiltersViewer

```js
const filters = {
    isPromotion: true,
    salePrice_lte: 100,
    salePrice_gte: 1,
};
```

CONFIG:

-   id: number
-   getLabel(filters): => string (func to build label)
-   isActive: (filters) => true/false (func to check active or not)
-   isVisible: (filters) => true/false (func )
-   isRemovable: boolean
-   onRemove: func
-   onToggle: func
