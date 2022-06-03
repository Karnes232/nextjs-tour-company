import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import heroImage from '../images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg';
import { Section } from '../layout/Section';

const Hero = () => (
  <>
    <Background color="relative">
      <Section yPadding="pt-20 pb-32 ">
        <Image
          src={heroImage}
          alt="hero1"
          layout="fill"
          objectFit="cover"
          // objectPosition="50% 80%"
          className="-z-10 opacity-90 brightness-50"
          priority
        />
        <HeroOneButton
          title={
            <>
              {'Get to Know he Real\n'}
              <span className="text-primary-500">Dominican Republic</span>
            </>
          }
          description="Dominican Republic is a country in the Caribbean. It is known for its beaches."
          button={
            <Link href="/contact">
              <a>
                <Button xl>Book Now!</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  </>
);

export { Hero };
