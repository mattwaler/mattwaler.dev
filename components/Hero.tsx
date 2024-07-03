import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

interface Props {
  heading: string
  paragraph: string
  image?: StaticImageData
}

export default function Hero(props: Props) {
  return (
    <section className="border-b text-white py-8 lg:py-32">
      <div className="container flex items-center flex-col gap-8 lg:gap-16 lg:flex-row">
        <div className="w-full order-2 lg:order-1">
          <h1 className="h1 pb-2 xl:pb-4 text-balance text-transparent bg-clip-text bg-gradient-to-tl from-mw-purple via-mw-blue to-mw-teal">
            {props.heading}
          </h1>
          <p
            className={clsx(
              'text-pretty text-base sm:text-lg lg:text-xl xl:text-2xl text-zinc-300',
              !props.image && 'lg:max-w-2xl'
            )}
          >
            {props.paragraph}
          </p>
        </div>
        {props.image && (
          <>
            <Image
              style={{ clipPath: "url('#blob')" }}
              src={props.image}
              role="presentation"
              alt=""
              width={320}
              height={320}
              className={clsx(
                'flex-none overflow-hidden',
                'order-1 size-64',
                'lg:order-2 lg:size-80 xl:size-96'
              )}
            />
          </>
        )}
      </div>
    </section>
  )
}
