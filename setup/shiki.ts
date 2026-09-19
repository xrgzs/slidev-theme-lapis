import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'
import { lapisDark } from './themes/lapis-dark'
import { lapisLight } from './themes/lapis-light'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: lapisLight,
      dark: lapisDark,
    },
  }
})
