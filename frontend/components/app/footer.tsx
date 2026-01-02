'use client'

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  Separator,
} from '@chakra-ui/react'
import { LuGithub, LuTwitter, LuMail } from 'react-icons/lu'

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

const DEVELOPERS = [
  {
    name: 'Rune',
    links: [
      { label: 'Twitter', icon: <LuTwitter />, href: 'https://x.com/pgdgggw' },
      { label: 'GitHub', icon: <LuGithub />, href: 'https://github.com/yuk228' },
    ],
  },
  {
    name: 'zatunohito',
    links: [
      { label: 'Twitter', icon: <LuTwitter />, href: 'https://x.com/zatunohitori' },
      { label: 'GitHub', icon: <LuGithub />, href: 'https://github.com/zatusub' },
    ],
  },
]

export function Footer() {
  return (
    <Box
      as="footer"
      py={{ base: '12', md: '16' }}
      bg="transparent"
      position="relative"
      zIndex="1"
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
          gap={{ base: '4', md: '6' }}
        >
          {/* Brand Section - Large Cell */}
          <GridItem colSpan={{ base: 1, lg: 5 }}>
            <Box
              h="full"
              bg={{ base: 'whiteAlpha.500', _dark: 'blackAlpha.500' }}
              backdropFilter="blur(12px)"
              borderWidth="1px"
              borderColor={{ base: 'blackAlpha.50', _dark: 'whiteAlpha.100' }}
              borderRadius="2xl"
              p={{ base: '6', md: '8' }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Stack gap="4">
                <HStack gap="3">
                  {/* Logo Placeholder */}
                  <Box
                    w="8"
                    h="8"
                    bgGradient="to-br"
                    gradientFrom="cyan.400"
                    gradientTo="blue.600"
                    borderRadius="lg"
                  />
                  <Heading size="lg" fontWeight="bold" letterSpacing="tight">
                    Asynch
                  </Heading>
                </HStack>
                <Text color="fg.muted" fontSize="md" lineHeight="relaxed" maxW="sm">
                  非同期コミュニケーションのための<br />
                  新しいプラットフォーム。
                </Text>
              </Stack>

              <Stack gap="4" mt={{ base: '8', lg: 'auto' }}>
                {DEVELOPERS.map((dev) => (
                  <Box key={dev.name}>
                    <Text fontSize="xs" fontWeight="semibold" color="fg.subtle" mb="1">
                      Connect with {dev.name}
                    </Text>
                    <HStack gap="1">
                      {dev.links.map((link) => (
                        <SocialButton key={link.label} icon={link.icon} href={link.href} label={link.label} />
                      ))}
                    </HStack>
                  </Box>
                ))}
              </Stack>
            </Box>
          </GridItem>

          {/* Links Section - Bento Cells */}
          <GridItem colSpan={{ base: 1, lg: 7 }}>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={{ base: '4', md: '6' }}
              h="full"
            >
              {FOOTER_LINKS.map((section, idx) => (
                <GridItem key={idx}>
                  <Box
                    h="full"
                    bg={{ base: 'whiteAlpha.500', _dark: 'blackAlpha.500' }}
                    backdropFilter="blur(12px)"
                    borderWidth="1px"
                    borderColor={{ base: 'blackAlpha.50', _dark: 'whiteAlpha.100' }}
                    borderRadius="2xl"
                    p="6"
                  >
                    <Text fontWeight="bold" mb="4" fontSize="lg">
                      {section.title}
                    </Text>
                    <Stack gap="3">
                      {section.links.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          href={link.href}
                          color="fg.muted"
                          _hover={{ color: 'fg.default', textDecoration: 'none' }}
                          fontSize="sm"
                          fontWeight="medium"
                          transition="color 0.2s"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </Stack>
                  </Box>
                </GridItem>
              ))}

              {/* Newsletter / Extra Cell - Optional */}
              <GridItem colSpan={{ base: 1, md: 3 }}>
                <Box
                  bg={{ base: 'blue.50', _dark: 'blue.900/20' }}
                  backdropFilter="blur(12px)"
                  borderWidth="1px"
                  borderColor={{ base: 'blue.100', _dark: 'blue.800' }}
                  borderRadius="2xl"
                  p="6"
                  display="flex"
                  flexDirection={{ base: 'column', sm: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                  gap="4"
                >
                  <Box>
                    <Text fontWeight="bold" fontSize="md">Stay updated</Text>
                    <Text fontSize="sm" color="fg.muted">最新のアップデート情報をお届けします。</Text>
                  </Box>
                  <IconButton
                    aria-label="Subscribe"
                    variant="ghost"
                    colorPalette="blue"
                    size="lg"
                    rounded="full"
                  >
                    <LuMail />
                  </IconButton>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>

        <Separator my="8" borderColor="border.subtle" opacity={0.5} />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap="4"
          color="fg.muted"
          fontSize="xs"
        >
          <Text>© {new Date().getFullYear()} Asynch Inc. All rights reserved.</Text>
          <HStack gap="6">
            <Link href="#" _hover={{ color: 'fg.default' }}>Privacy Policy</Link>
            <Link href="#" _hover={{ color: 'fg.default' }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <IconButton
      asChild
      variant="ghost"
      color="fg.muted"
      _hover={{
        bg: 'whiteAlpha.800',
        color: 'fg.default',
        transform: 'translateY(-2px)',
        _dark: { bg: 'blackAlpha.800' }
      }}
      transition="all 0.2s"
      size="sm"
      rounded="full"
    >
      <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </IconButton>
  )
}
