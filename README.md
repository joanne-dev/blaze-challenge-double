# PRUEBA TÉCNICA BLAZE

Hola! 👋 Me alegra llegar hasta este punto de enviar la solución para la prueba técnica, es muy gratificante para mi realizar este tipo de retos. A continuación nombraré aspectos para tener en cuenta del desarrollo:

- **ALCANCE**. para esta prueba técnica, el alcance del flujo del juego, es una partida en donde cada 7 segundos inicia el movimiento de la ruleta, en donde durante esos 6 segundos puedes apostar algun color, si aciertas, aparecerá la rampa de festejo con una ganancia "hardcodeada o quemada" de lo contrario se repite el flujo con el loading y movimiento de la ruleta.
- _MOBILE_ para esta prueba se hizo un diseño especifico para mobile, en donde se puede ver que no hay responsive para el resto de breakpoints. Todas las medidas de anchos estan "hardcodeadas o quemadas" en el codigo.
- **Uso GSAP**. para la animación de la ruleta utilicé GSAP, es una libreria muy potente para ese tipo de animcaciones. El resultado de cada iteración lo simulé desde el front, aunque en reaidad es un dato que debe de venir desde el backend.
- **Uso de Redux toolkit**. En este proyecto hice la implementación del estado del juego con redux-toolkit, casi que es nuevo para mi implementarla, pero me pareció muy interesante y muy sencillo de implementar y de entender, además de que es muy potente.
- **Siempre hay mejores formas de hacer las cosas** Este proyecto se hizo con el fin de cumplir con el alcance de la prueba, pero siempre hay mejores formas de hacer las cosas, por ejemplo, el uso de redux-toolkit se puede separar más la responsabilidad de los slices, se puede mejorar la implementación del uso de los estilos usando temas para brandeos especificos,
  el uso de los componentes, usando una metodología Atómica, incluso creando una libreria de componentes propios de Blaze.

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
