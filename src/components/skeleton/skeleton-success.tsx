import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonSuccess() {
  return (
    <div className="py-2" data-testid="skeleton-success">
      <Skeleton
        className="mb-2 h-10 w-full bg-gray-200 py-6"
        data-testid="skeleton-1"
      />
      <Skeleton
        className="mb-2 h-10 w-full bg-gray-200 py-6"
        data-testid="skeleton-2"
      />
      <Skeleton
        className="mb-0 h-10 w-full bg-gray-200 py-6"
        data-testid="skeleton-3"
      />
    </div>
  )
}
