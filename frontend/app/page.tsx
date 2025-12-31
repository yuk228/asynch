'use client'

import { Box, Container } from '@chakra-ui/react'

export default function Page() {
  return (
    <Box bg="bg" minH="100vh" transition="background 0.2s">
      <Container maxW="container.md" py="20"></Container>
    </Box>
  )
}
