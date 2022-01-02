import { Tab } from '@/design-system/Tab';
import { FC, useState } from 'react';
import { AutoNumberedHeading } from './NumberedHeading';

export const Experience: FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  return (
    <section className="py-24">
      <AutoNumberedHeading heading="Where I've Worked" />
      <Tab.Group
        aria-label="Experience"
        aria-labelledby="Experience"
        orientation="vertical"
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        className="w-fit"
      >
        {['EventX', 'Carbonbase', 'HKUST Robotics Team'].map(
          (company, index) => (
            <Tab.Item
              key={company}
              className="font-mono w-full text-left"
              index={index}
            >
              {company}
            </Tab.Item>
          ),
        )}
      </Tab.Group>
    </section>
  );
};
