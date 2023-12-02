export function IconCheckmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      className={props.className}
    >
      <circle cx="30" cy="30" r="29" stroke="#F4F3F6" strokeWidth="2" />
      <path
        className="fill-blue"
        d="M39.869 24.14 26.807 38.228a1.167 1.167 0 0 1-1.745-.037l-4.897-5.764a1.167 1.167 0 1 0-1.778 1.511l4.897 5.764a3.5 3.5 0 0 0 5.234.113L41.58 25.726a1.167 1.167 0 1 0-1.711-1.586Z"
      />
    </svg>
  )
}
