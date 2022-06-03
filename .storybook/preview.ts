// .storybook/preview.js

import { themes } from '@storybook/theming'
import 'tailwindcss/tailwind.css'

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.dark,
  },
}
