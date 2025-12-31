'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

export function Providers(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
