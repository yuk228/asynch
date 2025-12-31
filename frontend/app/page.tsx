'use client'

import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Container,
} from '@chakra-ui/react'

export default function Page() {
  return (
    <Box bg="bg" minH="100vh" transition="background 0.2s">
      <Container maxW="container.md" py="20">
        <Center>
          <Stack
            gap="8"
            p="10"
            border="1px solid"
            borderColor="border"
            borderRadius="xl"
            shadow="sm"
            bg="bg.panel"
          >
            <Box textAlign="center">
              <Heading size="3xl" mb="2">
                Asynch
              </Heading>
            </Box>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}
