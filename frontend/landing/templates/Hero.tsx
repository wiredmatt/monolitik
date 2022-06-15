import Link from 'next/link'

import { Background } from '../components/background/Background'
import { Button } from '../components/button/Button'
import { HeroOneButton } from '../components/hero/HeroOneButton'
import { Section } from '../components/layout/Section'
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns'
import { AppConfig } from '../utils/AppConfig'
import { Logo } from './Logo'

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Legal</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {`Tokenized ${AppConfig.asset} for\n`}
            <span className="text-primary-500">Everyone</span>
          </>
        }
        description={`The easiest way to invest in ${AppConfig.asset}.`}
        button={
          <Link href="/">
            <a>
              <Button xl>Launch App</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
)

export { Hero }
