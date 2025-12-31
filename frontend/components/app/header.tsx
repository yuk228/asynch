'use client'

import { ColorModeToggle } from '@/components/shared/color-mode-toggle'
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Menu,
  Text,
  Spacer,
  Separator,
  Input,
} from '@chakra-ui/react'
import Link from 'next/link'
import { LuBell } from 'react-icons/lu'
import { LinkButton } from '../shared/link-button'
import { IconButton } from '@chakra-ui/react'

const MENU_ITEMS = [
  { value: 'profile', label: 'プロフィール', href: '/account/profile' },
  { value: 'articles', label: '記事一覧', href: '/dashboard/articles' },
  { value: 'likes', label: 'いいねした記事', href: '/dashboard/likes' },
]

export function Header() {
  return (
    <Box as="header" borderBottomWidth="1px" py="4" bg="bg.panel">
      <Container maxW="container.xl">
        <Flex align="center" gap="4">
          <Link
            href="/"
            passHref
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Heading size="lg" letterSpacing="tight" cursor="pointer">
              Asynch
            </Heading>
          </Link>

          <Spacer />
          <Input placeholder="キーワードを入力..." />

          <Flex align="center" gap="4">
            <ColorModeToggle />
            <NotificationButton />
            <AvatarButton />
            <LinkButton href="/articles/new">執筆する</LinkButton>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export function AvatarButton() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <HStack cursor="pointer" gap="2">
          <Avatar.Root size="sm">
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar.Root>
          <Text>User</Text>
        </HStack>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content minW="200px" p="1">
          {MENU_ITEMS.map((item) => (
            <Menu.Item
              key={item.value}
              value={item.value}
              asChild
              cursor="pointer"
            >
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
          <Separator my="1" />
          <Menu.Item
            value="logout"
            color="fg.error"
            _hover={{ bg: 'bg.error', color: 'fg.error' }}
            cursor="pointer"
          >
            ログアウト
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export function NotificationButton() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <HStack cursor="pointer" gap="2">
          <IconButton variant="ghost">
            <LuBell />
          </IconButton>
        </HStack>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content minW="150px" p="1">
          <Text>＊＊さんがあなたをフォローしました。</Text>
          <Separator my="1" />
          <Text>＊＊さんがあなたをフォローしました。</Text>
          {/* {MENU_ITEMS.map((item) => (
            <React.Fragment key={item.value}>
              <Menu.Item value={item.value} asChild cursor="pointer">
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
              <Separator my="1" />
            </React.Fragment>
          ))} */}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export function SearchBar() {}
