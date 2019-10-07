import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import * as themes from 'themes'

function render(ui, ...rest) {
  return rtlRender(
    <ThemeProvider theme={themes.dark}>{ui}</ThemeProvider>,
    ...rest,
  )
}

export * from '@testing-library/react'
// override the built-in render with our own
export {render}
