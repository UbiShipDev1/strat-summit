import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { EntrySplash } from '@/components/EntrySplash'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  description: site.description,
}

function ServiceOverview() {
  const services = [
    {
      title: 'Property Management',
      href: '/property-management',
      description:
        'Full-service vacation rental management, including guest communication, revenue optimization, booking management, and property oversight.',
      image: site.images.propertyManagement,
      imageWidth: 800,
      imageHeight: 600,
      shape: 0 as const,
    },
    {
      title: 'Property Support Services',
      href: '/contact',
      description:
        'Cleaning, laundry, inspections, maintenance, and guest-ready support for self-managed properties.',
      image: site.images.hero,
      imageWidth: 1920,
      imageHeight: 840,
      shape: 1 as const,
    },
    {
      title: 'Renovations & Improvements',
      href: '/renovations',
      description:
        "Repairs, upgrades, and renovation projects that enhance your property's value, functionality, and guest experience.",
      image: site.images.renovations,
      imageWidth: 800,
      imageHeight: 600,
      shape: 2 as const,
    },
  ]

  return (
    <>
      <SectionIntro
        eyebrow="How we support property owners"
        title="One local team. Complete property care."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Owning a mountain property comes with unique responsibilities. We help
          owners simplify the process through professional management,
          dependable local support, and thoughtful property improvements.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.title} className="flex flex-col">
              <Link href={service.href} className="group">
                <StylizedImage
                  src={service.image}
                  width={service.imageWidth}
                  height={service.imageHeight}
                  alt={service.title}
                  shape={service.shape}
                  grayscale={false}
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  className="justify-center"
                />
                <h3 className="mt-8 font-display text-2xl font-semibold text-neutral-950 group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function WhyUs() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 ring-1 ring-gold/15 sm:mt-32 sm:py-32 lg:mt-40">
      <SectionIntro
        eyebrow="Why owners choose us"
        title="Local expertise. Hospitality standards. One trusted team."
        invert
      >
        <p>
          We bring together professional property management, luxury hospitality
          experience, and hands-on local support to help owners maximize value
          and deliver exceptional guest experiences.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Local expertise" invert>
            Based on Mount Washington, we provide responsive support and
            year-round oversight.
          </GridListItem>
          <GridListItem title="Hospitality standards" invert>
            Our background in luxury hospitality influences every aspect of the
            guest and owner experience.
          </GridListItem>
          <GridListItem title="One trusted team" invert>
            Property management, support services, and renovations—all
            coordinated through one trusted team.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <EntrySplash />
      <RootLayout>
        <Container className="mt-24 sm:mt-32 md:mt-56">
          <FadeIn className="max-w-3xl">
            <p className="font-display text-sm font-semibold tracking-wider text-gold uppercase">
              Mount Washington
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
              Property management from a team that lives here.
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              We built {site.name} to give homeowners and vacation rental hosts
              a dependable local partner for property management. Backed by
              in-house cleaning, maintenance, and renovation services, we help
              owners maximize revenue, protect their investment, and deliver
              exceptional guest experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white transition hover:bg-gold-dark"
              >
                Get in touch
              </Link>
              <Link
                href="/property-management"
                className="inline-flex rounded-full px-5 py-2 text-sm font-semibold text-neutral-950 ring-1 ring-gold/30 transition hover:bg-gold/10"
              >
                View services
              </Link>
            </div>
          </FadeIn>
        </Container>

        <div className="relative mt-16 sm:mt-24">
          <Container>
            <FadeIn>
              <div className="overflow-hidden rounded-4xl ring-1 ring-gold/20">
                <Image
                  src={site.images.hero}
                  alt="Mount Washington alpine landscape"
                  width={1920}
                  height={840}
                  className="aspect-16/7 w-full object-cover object-center"
                  priority
                />
              </div>
            </FadeIn>
          </Container>
        </div>

        <ServiceOverview />
        <WhyUs />
        <ContactSection />
      </RootLayout>
    </>
  )
}
