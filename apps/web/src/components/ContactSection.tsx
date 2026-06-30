import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 ring-1 ring-gold/20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Ready to simplify property ownership?
            </h2>
            <p className="mt-4 text-base text-neutral-300">
              Whether you&apos;re looking for property management, local
              property support, or renovation services, we&apos;d love to learn
              more about your property and how we can help.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact">Contact us</Button>
            </div>
            <div className="mt-10 border-t border-gold/20 pt-10">
              <h3 className="font-display text-base font-semibold text-gold-light">
                Service area
              </h3>
              <Offices invert className="mt-6" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
