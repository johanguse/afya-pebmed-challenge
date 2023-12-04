'use client'

import Link, { LinkProps } from 'next/link'
import { always, cond, equals } from 'ramda'

import {
  ButtonHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  FC,
  ForwardRefRenderFunction,
  HTMLAttributeAnchorTarget,
  InputHTMLAttributes,
  PropsWithChildren,
  SVGProps,
  forwardRef,
  useMemo,
} from 'react'

import { IconSpin } from '@/components/ui/icons/spin'

import { cn, removeSimilarTWClasses } from '@/lib/utils'

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger'

type ButtonProps<NativeProps = {}> = PropsWithChildren & {
  labelToken?: string
  className?: string
  tokenArgs?: { [key: string]: any }
  href?: string
  target?: HTMLAttributeAnchorTarget
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconPlacement?: 'left' | 'right'
  iconSize?: 'sm' | 'md'
  disabled?: boolean
  variant?: ButtonVariant
  download?: any
  loading?: boolean
} & NativeProps

const getButtonColorClasses = cond<ButtonVariant[], string>([
  [
    equals<ButtonVariant>('primary'),
    always(
      `bg-blue text-white text-sm rounded-3xl transition-colors border-transparent justify-center hover:bg-blue-200`
    ),
  ],
  [
    equals<ButtonVariant>('secondary'),
    always(
      `bg-blue text-white text-sm font-bold uppercase rounded-3xl transition-colors border-transparent justify-center hover:bg-blue-200`
    ),
  ],
  [
    equals<ButtonVariant>('tertiary'),
    always(
      `text-blue text-xs font-bold px-3 py-1 hover:underline justify-center`
    ),
  ],
  [
    equals<ButtonVariant>('danger'),
    always(
      `bg-red-600 text-white text-sm rounded-3xl transition-colors border-transparent justify-center hover:bg-blue-200`
    ),
  ],
])

export const getButtonStyles = (variant: ButtonVariant, className?: string) =>
  removeSimilarTWClasses(
    cn(
      'flex w-full cursor-pointer items-center justify-center rounded-3xl',
      getButtonColorClasses(variant),
      className
    )
  )

export const Button: FC<ButtonProps<HTMLButtonProps | LinkProps>> = ({
  labelToken,
  tokenArgs,
  className,
  children,
  href,
  Icon,
  iconPlacement = 'left',
  iconSize = 'md',
  variant = 'primary',
  download,
  loading,
  target,
  ...props
}) => {
  const iconPlacementRight = iconPlacement === 'right'
  const classes = useMemo(
    () =>
      removeSimilarTWClasses(
        cn(
          'group relative flex cursor-pointer items-center rounded-3xl px-4 py-3',
          getButtonColorClasses(variant),
          { 'flex-row-reverse': iconPlacement === 'right' },
          className
        )
      ),
    [className, variant, iconPlacement]
  )

  const content = (
    <>
      {Icon && (
        <Icon
          className={cn(
            'h-5 w-5 stroke-2',
            {
              'h-5 w-5': iconSize === 'md',
              'h-4 w-4': iconSize === 'sm',
              invisible: loading,
            },
            iconPlacementRight ? 'ml-2' : 'mr-2'
          )}
        />
      )}
      <span className={cn({ invisible: loading })}>
        {children ?? labelToken}
      </span>
      {loading && variant !== 'tertiary' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <IconSpin className="h-8 w-8 animate-spin" />
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link {...{ href, target }} {...(props as LinkProps)} className={classes}>
        {content}
      </Link>
    )
  }
  return (
    <button {...(props as HTMLButtonProps)} className={classes}>
      {content}
    </button>
  )
}

type InputSubmitProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const SubmitButtonBase: ForwardRefRenderFunction<
  HTMLInputElement,
  ButtonProps<InputSubmitProps>
> = (
  { labelToken, tokenArgs, className, variant = 'primary', loading, ...props },
  ref
) => {
  const classes = useMemo(
    () => getButtonStyles(variant, className),
    [variant, className]
  )

  return (
    <input
      type="submit"
      className={classes}
      disabled={loading}
      value={labelToken ?? tokenArgs?.label}
      {...props}
      ref={ref}
    />
  )
}

export const SubmitButton = forwardRef(SubmitButtonBase)
