import Image from 'next/image'

export default function Home() {
  return (
    <div className="m-auto pt-10">
      <Image
        src="/images/logo_w.svg"
        width={82}
        height={49}
        alt="logo"
        className="mx-auto"
      />
    </div>
  )
}
