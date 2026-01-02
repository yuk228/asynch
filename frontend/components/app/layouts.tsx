import { Container } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'

export function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container maxW="container.xl" py="8">
        {children}
      </Container>
      <Footer />
    </>
  )
}
