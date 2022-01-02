import { Button } from '@/design-system/Button';
import { FC } from 'react';
import { AutoNumberedHeading } from './NumberedHeading';

export const Contact: FC = () => {
  return (
    <section className="py-24 max-w-xl mx-auto flex flex-col items-center">
      <p className="counter-increment before-green-counter before:mr-2 text-sm-scalable text-green font-mono">
        What's Next?
      </p>
      <h2 className="mt-5 text-slate-light text-md-scalable">Get In Touch</h2>
      <p className="mt-2.5 text-center text-slate-dark">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a className="mt-12" href="mailto:jackkkonggg@icloud.com">
        <Button>Say Hello</Button>
      </a>
    </section>
  );
};
