import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonPlans() {
  return (
    <div className="skeleton-plans py-2" data-testid="skeleton-plans">
      <Skeleton
        className="mb-2 h-24 w-full bg-gray-200 py-6"
        data-testid="skeleton-1"
      />
      <Skeleton
        className="mb-0 h-24 w-full bg-gray-200 py-6"
        data-testid="skeleton-2"
      />
    </div>
  )
}
