import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonSuccess() {
  return (
    <div className="py-2">
      <Skeleton className="mb-2 h-10 w-full bg-gray-200 py-6" />
      <Skeleton className="mb-2 h-10 w-full bg-gray-200 py-6" />
      <Skeleton className="mb-0 h-10 w-full bg-gray-200 py-6" />
    </div>
  )
}
