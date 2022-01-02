import { FC, MouseEvent, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  TabContextProvider,
  TabContextValue,
  useTabContext,
} from './TabContextProvider';

const TabIndicator: FC = () => {
  const { indicator } = useTabContext();
  return (
    <div className="absolute top-0 h-full w-[2px] bg-navy-light">
      <span
        className="absolute h-full w-[2px] bg-green transition-all duration-300"
        style={{
          top: indicator.top,
          height: indicator.height,
        }}
      />
    </div>
  );
};

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
  const tabGroupRef = useRef<HTMLDivElement>(null);

  return (
    <TabContextProvider
      activeTabIndex={activeTabIndex}
      setActiveTabIndex={setActiveTabIndex}
      tabGroupRef={tabGroupRef}
    >
      <div
        ref={tabGroupRef}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-orientation={orientation}
        role="tablist"
        className={twMerge(className, 'relative')}
      >
        {children}
        <TabIndicator />
      </div>
    </TabContextProvider>
  );
};

interface TabItemProps {
  index: number;
  className?: string;
}

export const TabItem: FC<TabItemProps> = ({ index, className, children }) => {
  const { activeTabIndex, setActiveTabIndex, setCurrentTabItemRef } =
    useTabContext();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isSelected = index === activeTabIndex;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    if (isSelected) {
      setCurrentTabItemRef(buttonRef);
    }
  }, [isSelected, setCurrentTabItemRef]);

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
