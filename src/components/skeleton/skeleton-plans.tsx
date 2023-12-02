import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonPlans() {
  return (
    <div className="py-2">
      <Skeleton className="mb-2 h-24 w-full bg-gray-200 py-6" />
      <Skeleton className="mb-0 h-24 w-full bg-gray-200 py-6" />
    </div>
  )
}
