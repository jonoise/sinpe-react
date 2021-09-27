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

| Props      | Type                               | Required | Description                          |
| ---------- | ---------------------------------- | -------- | ------------------------------------ |
| vendor     | object: {redirectUrl, phoneNumber} | ✔        | Options related to the vendor (you). |
| customer   | object: {email}                    | ✔        | Options related to your customer.    |
| btnClass   | string:                            |          | Custom styling class for button.     |
| modalClass | string                             |          | Custom styling class for button.     |
