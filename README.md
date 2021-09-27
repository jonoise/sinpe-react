# Sinpe React Component

### ⚠ This tool is in development mode ⚠ 

```md
Even though the package is available on npm already, it is in development mode and is not functional.
```

### Features


- One-click processing payment via Sinpe Móvil.
- Instant notifications for both parts.
- Custom hooks to open, close, start, terminate process.
- Customizable styling.

### Quickstart

```bash
npm i sinpe-react
--OR
yarn add sinpe-react
```


```js
import React from 'react';
import SinpeReact from 'sinpe-react';

function App() {
  const vendorOptions={"..."}
  const customerOptions={"..."}
  return (
   <SinpeReact 
    vendorOptions={vendorOptions}
    customerOptions={customerOptions}
   />
  );
}
```

### API

| Props           | Type                                        | Required | Description                          |
|-----------------|---------------------------------------------|----------|--------------------------------------|
| vendorOptions   | object: {redirectUrl, phoneNumber:optional} | ✔        | Options related to the vendor (you). |
| customerOptions | object: {email: required}                   | ✔        | Options related to your customer.    |
