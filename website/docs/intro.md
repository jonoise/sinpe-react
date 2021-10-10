---
sidebar_position: 1
---

# Introducción

Sinpe React es simplemente un modal que se abre al accionar un botón.

Vamos a descubrir **Sinpe React en menos de 5 minutos**.

## Getting Started

Crea una aplicación de **react**.

```bash
npx create-react-app my-store && cd my-store
```

## Instala Sinpe-React

Puedes usar **npm** o **yarn**:

```bash
npm install sinpe-react
--OR
yarn add sinpe-react
```

## Llama el componente

```jsx
// default imports ↓
import SinpeReact from 'sinpe-react';
import "sinpe-react/dist/sinpe-react.cjs.development.css"
// default imports ↑

function Checkout() {
    // Puedes llamarlo en el checkout, o en cualquier parte realmente.
    const order={"..."}
    const myNumber={"..."}
    return (
    <SinpeReact
        vendorPhoneNumber={myNumber}
        order={order}
    />
    );
}
```

El componente necesita de 2 props para funcionar:

- El número de la persona a la cuál se le va a hacer el depósito.
- La orden a procesar.

Revisa qué otras props se puede usar.
