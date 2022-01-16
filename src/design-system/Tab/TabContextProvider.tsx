import { useSafeContext } from '@/hooks/useSafeContext';
import { createContext, FC, RefObject, useMemo, useState } from 'react';

export interface TabContextValue {
  activeTabIndex: number | null;
  setActiveTabIndex: (index: number) => void;
  currentTabItemRef: RefObject<HTMLButtonElement | null>;
  setCurrentTabItemRef: (ref: RefObject<HTMLButtonElement>) => void;
  indicator: {
    top: number;
    left: number;
    height: number;
    width: number;
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

  const contextValue = useMemo<TabContextValue>(() => {
    const currentTabItemRect =
      currentTabItemRef.current?.getBoundingClientRect();
    const tabGroupRect = props.tabGroupRef.current?.getBoundingClientRect();

    return {
      activeTabIndex: props.activeTabIndex,
      setActiveTabIndex: props.setActiveTabIndex,
      currentTabItemRef,
      setCurrentTabItemRef,
      indicator: {
        top: (currentTabItemRect?.top ?? 0) - (tabGroupRect?.top ?? 0),
        left: (currentTabItemRect?.left ?? 0) - (tabGroupRect?.left ?? 0),
        height: currentTabItemRect?.height || 0,
        width: currentTabItemRect?.width || 0,
      },
    };
  }, [
    currentTabItemRef,
    props.activeTabIndex,
    props.setActiveTabIndex,
    props.tabGroupRef,
  ]);

  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export const useTabContext = () => useSafeContext(TabContext, 'TabContext');
