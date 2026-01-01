'use client'

import { useSearchParams } from 'next/navigation'
import { Editor } from '@/components/articles/Editor'
import { Suspense } from 'react'
import { Center, Spinner } from '@chakra-ui/react'

function ArticlesContent() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  return <Editor status={status} />
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={<Center h="100vh"><Spinner /></Center>}>
      <ArticlesContent />
    </Suspense>
  )
}
