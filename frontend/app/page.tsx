"use client";

import { ColorModeToggle } from "@/components/shared/color-mode-toggle";
import { Box, Button, Center, Heading, Stack, Text, Container } from "@chakra-ui/react"

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
              <Stack direction="row" justify="center" mb="4">
                <ColorModeToggle />
              </Stack>
              <Heading size="3xl" mb="2">Chakra UI v3</Heading>
            </Box>
            
            <Stack direction="row" gap="4" justify="center">
              <Button colorPalette="blue" variant="solid">
                Primary Button
              </Button>
              <Button colorPalette="gray" variant="outline">
                Secondary Button
              </Button>
            </Stack>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}
