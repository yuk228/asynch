import { useArticlesSearchQuery } from '@/services/articles/articles-search-query-hooks'
import { Box } from '@chakra-ui/react'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense>
      <Suspended />
    </Suspense>
  )
}

function Suspended() {
  const { initialQ, initialIsAiSearch, page, sort } = useArticlesSearchQuery()
  console.log(initialQ, initialIsAiSearch, page, sort)
  return <Box></Box>
}
