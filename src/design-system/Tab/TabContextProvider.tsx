import { useSafeContext } from '@/hooks/useSafeContext';
import { createContext, createRef, FC, RefObject, useState } from 'react';

export interface TabContextValue {
  activeTabIndex: number | null;
  setActiveTabIndex: (index: number) => void;
  currentTabItemRef: RefObject<HTMLButtonElement | null>;
  setCurrentTabItemRef: (ref: RefObject<HTMLButtonElement>) => void;
  indicator: {
    top: number;
    height: number;
  };
}

const TabContext = createContext<TabContextValue | undefined>(undefined);

interface TabContextProviderProps
  extends Pick<TabContextValue, 'activeTabIndex' | 'setActiveTabIndex'> {
  tabGroupRef: RefObject<HTMLDivElement>;
}

export const TabContextProvider: FC<TabContextProviderProps> = ({
  children,
  ...props
}) => {
  const [currentTabItemRef, setCurrentTabItemRef] = useState<
    RefObject<HTMLButtonElement | null>
  >({
    current: null,
  });

  const contextValue: TabContextValue = {
    activeTabIndex: props.activeTabIndex,
    setActiveTabIndex: props.setActiveTabIndex,
    currentTabItemRef,
    setCurrentTabItemRef,
    indicator: {
      top:
        (currentTabItemRef.current?.getBoundingClientRect().top ?? 0) -
        (props.tabGroupRef.current?.getBoundingClientRect().top ?? 0),
      height: currentTabItemRef.current?.getBoundingClientRect().height || 0,
    },
  };

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export const useTabContext = () => useSafeContext(TabContext, 'TabContext');
