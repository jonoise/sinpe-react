⚠🚨 This tools IS in DEVELOPMENT ⚠🚨

```bash
This tools is NOT suitable for production.
```

# Sinpe React Component

![Banner image with Sinpe-React Logo](https://user-images.githubusercontent.com/71573508/136670885-0fe00e99-8dea-4328-883b-e86ee1771053.jpg)

## What is Sinpe React?

Sinpe-React is a React wrapper around the SINPE Móvil flow to send money via sms. It's just an automation that provide a basic API.

## Docs.

Para más información revisa [**la documentación**](https://soloamilkar.github.io/sinpe-react).

## Features

- Send money via sms.
- Connect to your backend.
- Define your data structure.
- Written in Typecript.
- User friendly.
- Styles highly customizable.

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

```js
import React from 'react';
import SinpeReact from 'sinpe-react';
import "sinpe-react/dist/sinpe-react.cjs.development.css"

function App() {
  const vendorOptions={"..."}
  const customerOptions={"..."}

  const styles = {
    modalClass: "myModalClass",
    btnClass: "myBtnClass"
  }

  return (
   <SinpeReact
    vendorOptions={vendorOptions}
    customerOptions={customerOptions}
    styles={styles}
   />
  );
}
```

## API

| Props             | Type     | Required | Description                                                          |
| ----------------- | -------- | -------- | -------------------------------------------------------------------- |
| vendorPhoneNumber | string   | ✔        | The number that receives the transfer.                               |
| order             | object   | ✔        | Options related to your customer.                                    |
| callbackFunction  | function |          | Fires after customer confirm order receipt number.                   |
| redirectUrl       | string   |          | Url you want to redirect the user after the purchase, eg: /thankyou. |
| styles            | object   |          | Custom stylings classes.                                             |

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
