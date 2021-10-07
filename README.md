# Sinpe React Component

## ⚠ This tool is in development mode ⚠

```md
The package is available on npm already but it is in development mode and is NOT suitable for production.
```

## Features

- One-click processing payment via Sinpe Móvil.
- Instant notifications for both parts.
- Custom hooks to open, close, start, terminate process.
- Customizable styling.

## Quickstart

```bash
npm i sinpe-react
--OR
yarn add sinpe-react
```

```js
import React from 'react';
import SinpeReact from 'sinpe-react';
import "sinpe-react/dist/sinpe-react.cjs.development.css"

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

## Using NextJS.

If using NextJS you need to make styles import in \_app.js file.

```js
// _app.js
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// add this
import 'sinpe-react/dist/sinpe-react.cjs.development.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
```

## Custom Styling.

You can add custom styling to both button and modal components using `btnClass` and `modalClass` respectively as props of SinpeReact component.

In this case is not necessary to import default styling file.

```js
import React from 'react';
import SinpeReact from 'sinpe-react';
import "sinpe-react/dist/sinpe-react.cjs.development.css"

function App() {
  const vendorOptions={"..."}
  const customerOptions={"..."}
  return (
   <SinpeReact
    vendorOptions={vendorOptions}
    customerOptions={customerOptions}
    btnClass="myBtnClass"
    modalClass="myModalClass"
   />
  );
}
```

## API

| Props      | Type                                      | Required | Description                          |
| ---------- | ----------------------------------------- | -------- | ------------------------------------ |
| vendor     | object: {redirectUrl, phoneNumber}        | ✔        | Options related to the vendor (you). |
| customer   | object: {email}                           | ✔        | Options related to your customer.    |
| order      | object: {totalAmount, items[], order_id?} | ✔        | Options related to the order.        |
| btnClass   | string:                                   |          | Custom styling class for button.     |
| modalClass | string                                    |          | Custom styling class for button.     |

## Troubleshooting

### Typing error from env variable -> conf: {{api_key: process.env.SINPE_API_KEY}}

When getting an Environment Variable you need to specify the type of value that variable is.

```js
declare var process: {
  env: {
    SINPE_API_KEY: string
  }
}

// and call the conf
conf={api_key:process.env.SINPE_API_KEY}
<SinpeReact conf={conf} />
```
