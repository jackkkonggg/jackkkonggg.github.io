import { useSafeContext } from '@/hooks/useSafeContext';
import { createContext, FC, useState } from 'react';

export interface TabContextValue {
  activeTabIndex: number | null;
  setActiveTabIndex: (index: number) => void;
}

const TabContext = createContext<TabContextValue | undefined>(undefined);

interface TabContextProviderProps extends TabContextValue {}

export const TabContextProvider: FC<TabContextProviderProps> = ({
  children,
  ...contextValue
}) => {
  return (
    <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
  );
};

export const useTabContext = () => useSafeContext(TabContext, 'TabContext');
