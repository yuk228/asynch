'use client'

import { IconButton } from '@chakra-ui/react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from 'next-themes'

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="toggle color mode"
      onClick={toggleColorMode}
      variant="ghost"
      size="sm"
    >
      {colorMode === 'light' ? <LuMoon /> : <LuSun />}
    </IconButton>
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  }
}
