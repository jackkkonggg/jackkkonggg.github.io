import { List } from '@/design-system/List';
import clsx from 'clsx';
import { FC } from 'react';
import { AutoNumberedHeading } from './NumberedHeading';

interface TechnologiesProps {
  technologies: string[];
}

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <List.Group variant="ordered" className="grid grid-cols-2 gap-3 text-sm">
      {technologies.map((technology) => (
        <List.Item key={technology} listStyle="leading-[18px]">
          <p className="font-mono">{technology}</p>
        </List.Item>
      ))}
    </List.Group>
  );
};

export const About: FC = () => {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto">
      <AutoNumberedHeading heading="About Me" />
      <div
        className={clsx(
          'grid grid-rows-[auto_auto] justify-items-center gap-10',
          'sm:grid-cols-[minmax(0,_1fr)_200px]',
        )}
      >
        <div className="space-y-4 text-slate-dark">
          <p>
            Hello! My name is Jack and I enjoy creating things that live on the
            internet. My interest in web development started back in 2020 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at EventX for
            a variety of clients.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <Technologies
            technologies={[
              'JavaScript (ES6+)',
              'TypeScript',
              'React',
              'Next.js',
              'TypeORM',
              'Solidity',
            ]}
          />
        </div>
        <img
          className="rounded max-w-[200px]"
          src="https://media-exp1.licdn.com/dms/image/C5603AQH3gsHrqBq_TQ/profile-displayphoto-shrink_800_800/0/1638520282735?e=1646870400&v=beta&t=Skk1qKVHAZmss6B8D5jhriePbEugoLaIb7PKXEfQRQo"
          alt="Profile Photo"
        />
      </div>
    </section>
  );
};
