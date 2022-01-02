import { FC, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  TabContextProvider,
  TabContextValue,
  useTabContext,
} from './TabContextProvider';

interface TabGroupProps extends TabContextValue {
  'aria-label': string;
  'aria-labelledby': string;
  orientation: 'vertical'; // Currently only supports vertical
  className?: string;
}

export const TabGroup: FC<TabGroupProps> = ({
  orientation,
  children,
  activeTabIndex,
  setActiveTabIndex,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  className,
}) => {
  return (
    <TabContextProvider
      activeTabIndex={activeTabIndex}
      setActiveTabIndex={setActiveTabIndex}
    >
      <div
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-orientation={orientation}
        role="tablist"
        className={twMerge(className)}
      >
        {children}
      </div>
    </TabContextProvider>
  );
};

interface TabItemProps {
  index: number;
  className?: string;
}

export const TabItem: FC<TabItemProps> = ({ index, className, children }) => {
  const { activeTabIndex, setActiveTabIndex } = useTabContext();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isSelected = index === activeTabIndex;

  const handleClick = () => {
    setActiveTabIndex(index);
  };

  return (
    <button
      ref={buttonRef}
      role="tab"
      aria-selected={isSelected ? 'true' : 'false'}
      className={twMerge(
        'block px-5 py-3  text-slate-dark text-sm transition-all duration-300',
        isSelected && 'text-green',
        'hover:bg-navy-light hover:text-green',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const Tab = {
  Group: TabGroup,
  Item: TabItem,
};
