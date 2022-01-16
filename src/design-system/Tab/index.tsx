import useMediaQuery from '@/hooks/useMediaQuery';
import clsx from 'clsx';
import {
  FC,
  MouseEvent,
  useEffect,
  useRef,
  HTMLAttributes,
  useState,
  useMemo,
  CSSProperties,
} from 'react';
import { twMerge } from 'tailwind-merge';
import {
  TabContextProvider,
  TabContextValue,
  useTabContext,
} from './TabContextProvider';

const TabIndicator: FC = () => {
  const { indicator } = useTabContext();
  const verticalMode = useMediaQuery('@media (min-width: 640px)');

  const style = useMemo<CSSProperties>(() => {
    if (verticalMode) {
      return {
        top: indicator.top,
        height: indicator.height,
      };
    }

    return {
      left: indicator.left,
      width: indicator.width,
    };
  }, [
    indicator.height,
    indicator.left,
    indicator.top,
    indicator.width,
    verticalMode,
  ]);

  return (
    <div
      className={clsx(
        'absolute bottom-0 bg-navy-light',
        'bottom-0 h-[2px] w-full',
        'sm:top-0 sm:h-full sm:w-[2px]',
      )}
    >
      <span
        className="absolute h-full w-[2px] bg-green transition-all duration-300"
        style={style}
      />
    </div>
  );
};

interface TabGroupProps
  extends Pick<TabContextValue, 'activeTabIndex' | 'setActiveTabIndex'> {
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
        'hover:bg-navy-main hover:text-green',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

interface TabPanelProps
  extends Exclude<HTMLAttributes<HTMLDivElement>, 'role'> {}

const TabPanel: FC<TabPanelProps> = ({ style, ...props }) => {
  const tabPanelRef = useRef<HTMLDivElement>(null);
  const [minHeightPx, setMinHeight] = useState(0);

  useEffect(() => {
    const currentPanelHeight =
      tabPanelRef.current?.getBoundingClientRect().height ?? 0;
    setMinHeight((prevMinHeight) =>
      currentPanelHeight > prevMinHeight ? currentPanelHeight : prevMinHeight,
    );

    // Reset minHeight when tab panel resizes
    const handleResize = () => {
      setMinHeight(0);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [props.children]);

  return (
    <div
      ref={tabPanelRef}
      role="tabpanel"
      style={{
        ...(style ?? {}),
        minHeight: `${minHeightPx}px`,
      }}
      {...props}
    />
  );
};

export const Tab = {
  Group: TabGroup,
  Item: TabItem,
  Panel: TabPanel,
};
