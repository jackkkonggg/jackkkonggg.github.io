import { Link } from '@/design-system/Link';
import { List } from '@/design-system/List';
import { Tab } from '@/design-system/Tab';
import { FC, useState } from 'react';
import { AutoNumberedHeading } from './NumberedHeading';

interface ExperienceT {
  position: string;
  companyName: string;
  companyUri: string;
  start: string;
  end: string;
  accomplishments: string[];
}

const experiences: readonly ExperienceT[] = [
  {
    position: 'Full-Stack Engineer',
    companyName: 'EventX',
    companyUri: 'https://www.eventx.io/',
    start: 'June 2020',
    end: 'Present',
    accomplishments: [
      'Increased the event capacity from 5 to 60 events per month by migrating hardcoded environment variables and feature flags into Firebase.',
      'Created a CMS with an auto-save feature to facilitate easier event creation and customization.',
      'Designed and implemented an instant messaging application with Twilio to increase product engagement.',
      'Improved the Lighthouse performance of the platform by utilizing code-splitting and lazy image loading.',
      'Added many features to the in-house webinar platform, such as directly streaming a video file, hand-raising for the audience, and emoji reactions.',
      'Planned and implemented a private React library to help the Engineering team build user translatable (i18n) forms.',
    ],
  },
  {
    position: 'Blockchain Engineer (Freelance)',
    companyName: 'Carbonbase',
    companyUri: 'https://www.carbonbase.co/',
    start: 'August 2021',
    end: 'Present',
    accomplishments: [
      'Established the core of a new frontend project with Next.js and TypeScript.',
      'Built a GitLab CI/CD pipeline that uses an AWS EC2 executor to deploy the Next.js project via the Serverless Framework.',
      'Implemented smart contracts with Solidity to facilitate carbon offset related NFT transactions.',
      'Created the prototype for CryptoPunks on the Kucoin Chain using the HardHat framework.',
    ],
  },
  {
    position: 'Robotics Engineer',
    companyName: 'HKUST Robotics',
    companyUri: 'https://robotics.ust.hk/',
    start: 'December 2018',
    end: 'August 2019',
    accomplishments: [
      'Built a car control pipeline, which includes raw image processing from the camera, optimized path planning, and speed control with PID control.',
      'Improved the performance of the car by adjusting various attributes of the car, such as camber, toe-angle, ride-height, center of gravity, etc.',
    ],
  },
];

export const Experience: FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const selectedExperience = experiences[activeTabIndex];

  return (
    <section id="experience" className="py-24 max-w-3xl mx-auto">
      <AutoNumberedHeading heading="Where I've Worked" />
      <div className="flex gap-x-5">
        <Tab.Group
          aria-label="Experience"
          aria-labelledby="Experience"
          orientation="vertical"
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          className="w-fit h-fit shrink-0"
        >
          {experiences
            .map(({ companyName }) => companyName)
            .map((companyName, index) => (
              <Tab.Item
                key={companyName}
                className="font-mono w-full text-left"
                index={index}
              >
                {companyName}
              </Tab.Item>
            ))}
        </Tab.Group>
        <Tab.Panel className="grow relative py-1.5">
          <h3 className="text-slate-light font-medium text-xl">
            <span>{selectedExperience.position} </span>
            <span className="text-green"> @ </span>
            <Link href={selectedExperience.companyUri} target="_blank">
              {selectedExperience.companyName}
            </Link>
          </h3>
          <p className="mt-2 font-mono text-xs text-slate-dark">
            {selectedExperience.start} - {selectedExperience.end}
          </p>
          <List.Group variant="ordered" className="mt-6 space-y-2.5">
            {selectedExperience.accomplishments.map((accomplishment) => (
              <List.Item key={accomplishment} listStyle="leading-[22px]">
                <p className="text-slate-dark">{accomplishment}</p>
              </List.Item>
            ))}
          </List.Group>
        </Tab.Panel>
      </div>
    </section>
  );
};
