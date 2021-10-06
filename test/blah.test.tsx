import * as React from 'react'
import * as ReactDOM from 'react-dom'
import SinpeReact from '../src/index'

const vendorPhoneNumber = '84019933'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <SinpeReact
        vendorPhoneNumber={vendorPhoneNumber}
        order={{ totalAmount: 5500 }}></SinpeReact>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
