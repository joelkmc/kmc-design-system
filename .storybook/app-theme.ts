import { kbranding } from './../src/constants/colors.contant'
import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: kbranding.pumpkin,
  colorSecondary: kbranding.pumpkin,

  // UI
  appBg: '#111827',
  appContentBg: '#1f2937',
  appBorderColor: '#d1d5db',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: '#EDEEEF',
  barSelectedColor: '#FFFFFF',
  barBg: '#374151',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'KMC - Design System',
  brandUrl: 'https://erp.kmc.solutions/images/01%20KMC%202018%20LOGO-02.png',
  brandImage: 'https://erp.kmc.solutions/images/01%20KMC%202018%20LOGO-02.png',
  brandTarget: '_self',
})
