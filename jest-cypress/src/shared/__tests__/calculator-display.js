import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchSnapshot()
})
