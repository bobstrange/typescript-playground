import { Theme } from 'theme-ui'
import { roboto as presets } from '@theme-ui/presets'

export const theme: Theme = {
  ...presets,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
  },
  styles: {
    ...presets.styles,
  },
} as Theme
