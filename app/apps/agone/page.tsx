import Image from 'next/image'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import agone from 'assets/agone.svg'
import items from 'assets/items.webp'
import groups from 'assets/groups.webp'
import appStore from 'assets/app-store.svg'

export const metadata = {
  alternates: {
    canonical: 'https://mattwaler.com/apps/agone',
  },
  title: 'Agone: Recurring Task Tracker',
  description: 'A simple and easy-to-use recurring task tracker.',
  openGraph: {
    images: [{
      url: 'https://mattwaler.com/assets/agone-og.png',
      alt: 'Agone OG Image',
      width: 1440,
      height: 906,
    }],
  },
}

const appStoreLink = "https://apps.apple.com/us/app/agone-recurring-tasks-tracker/id6478084115?platform=iphone"

const steps = [
  {
    heading: 'Create a Group',
    body: 'Groups act like folders for a batch of items that relate to one another. Start by creating a group, choosing an icon, and selecting a custom color.',
  },
  {
    heading: 'Create an Item',
    body: 'Now it is time to create your first item. Be sure to set the frequency at which the app will remind you.',
  },
  {
    heading: 'Live your Life',
    body: 'That is it. Agone will now send you a notification when items are due. It will also display badges on the app icon so you do not forget.',
  },
  {
    heading: 'Upgrade to Premium',
    body: 'If you are enjoying the app, consider upgrading to lifetime premium! This will allow you to create more than 20 items.',
  },
]

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="container section-spacing pb-0 flex flex-col lg:flex-row items-center justify-between gap-24">
        <div className="flex-1">
          <h1 className="mt-4 text-4xl xl:text-6xl font-extrabold tracking-tight text-balance">
            Agone makes{' '}
            <span className="text-agone-blue">tracking recurring tasks</span> and{' '}
            <span className="text-agone-blue">task organization</span> dead simple.
          </h1>
          <p className="text-lg xl:text-2xl text-zinc-400 mt-4 text-balance">
            Keeping track of all of life's recurring tasks is impossible. Make
            it possible with Agone, where you can create custom groups, custom
            intervals, and view the entire history of each task for reference.
          </p>
          <div className="mt-6">
            <a target="_blank" href={appStoreLink}>
              <Image
                src={appStore}
                alt="Download Agone on the App Store"
                height="53"
                width="160"
              />
            </a>
            <p className="text-sm text-zinc-400 mt-3">
              Available for iOS, iPadOS, and macOS
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[400px] lg:w-[450px] lg:h-[600px] overflow-hidden">
          <Image
            src={items}
            alt="View of Agone app in the items view."
            height="909"
            width="450"
          />
        </div>
      </section>
      {/* Steps */}
      <section className="section-spacing pb-0 border-t">
        <div className="container flex flex-col xl:flex-row items-center justify-between gap-12">
          <div className="w-[300px] h-[400px] xl:w-[450px] xl:h-[600px] overflow-hidden order-last xl:order-first">
            <Image
              placeholder="blur"
              src={groups}
              alt="View of Agone app in the groups view."
              height="909"
              width="450"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-100">
              How it works
            </h2>
            <p className="text-lg lg:text-xl text-zinc-300 mt-5">
              Agone keeps it super simple and straightforward.
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 my-7 lg:my-14">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex items-center justify-center h-8 w-8 bg-agone-blue rounded-full text-zinc-100 text-xl font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-zinc-200">
                      {step.heading}
                    </h2>
                    <p className="text-zinc-400 text-lg mt-2">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      {/* Privacy */}
      <section className="section-spacing border-t">
        <div className="container sm:max-w-screen-xs lg:max-w-screen-sm xl:max-w-[700px] text-center">
          <LockClosedIcon className='size-12 text-agone-blue mx-auto mb-4' />
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-zinc-100 mb-6 text-balance">
            Agone will never have ads, trackers, or signup forms.
          </h2>
          <p className="text-lg lg:text-2xl text-zinc-400 text-balance">
            Agone stores all your data directly in iCloud. This means your data
            is yours and yours alone, and will sync seamlessly between all of
            your devices.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a target="_blank" href={appStoreLink}>
              <Image
                src={appStore}
                alt="Download Agone on the App Store"
                height="53"
                width="160"
              />
            </a>
            <a
              target="_blank"
              href="https://www.privacypolicies.com/live/b7154941-c4a9-429a-814d-410182d5a0cc"
              className="bg-agone-blue text-white font-semibold lg:text-lg px-6 py-3 rounded-lg flex items-center justify-center"
            >
              Privacy <span className="hidden sm:inline">&nbsp;Policy &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
