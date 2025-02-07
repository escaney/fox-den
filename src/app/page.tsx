/** @format */

import { ButtonDefault as Button } from '../components/atoms/button';
import Heading, { HeadingSize } from '../components/atoms/heading';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt=""
          width={180}
          height={38}
          priority
        />
        <Heading headingLevel={HeadingSize.H1}>Hi, I&rsquo;m Elizabeth</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit hic,
          cum ullam dignissimos error minus in. Voluptates voluptatum mollitia
          quos, accusantium excepturi ea nulla esse illum inventore animi aut
          fuga earum vero veniam corporis atque asperiores, temporibus impedit
          culpa, aspernatur nemo neque? Distinctio fuga a, nesciunt mollitia ab
          totam corporis autem inventore ipsum eveniet perspiciatis illo
          architecto fugiat eos minima cupiditate. Nihil inventore accusamus vel
          quam non laboriosam, vitae ad fugiat quidem praesentium, eos
          reiciendis pariatur quas fugit at velit illo nobis obcaecati. Est
          quasi a, cumque facere cum dignissimos, eius nulla modi sed rem aut
          dolores corporis nam.
        </p>
        <Button ripple={true} color="white" variant="outlined">
          Click me
        </Button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          ratione!
        </p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Find me on LinkedIn →
        </a>
      </footer>
    </div>
  );
}
