import { FC } from 'react';
import { AutoNumberedHeading } from './NumberedHeading';

interface TechnologiesProps {
  technologies: string[];
}

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ol className="grid grid-cols-2 gap-3 text-sm">
      {technologies.map((technology) => (
        <li key={technology} className="flex gap-x-3">
          <span className="text-green text-xs select-none">▹</span>
          <p className="font-mono">{technology}</p>
        </li>
      ))}
    </ol>
  );
};

export const About: FC = () => {
  return (
    <section className="py-24">
      <AutoNumberedHeading heading="About Me" />
      <div className="space-y-4 text-slate-dark">
        <p>
          Hello! My name is Jack and I enjoy creating things that live on the
          internet. My interest in web development started back in 2020 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at EventX for a variety of
          clients.
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
    </section>
  );
};
