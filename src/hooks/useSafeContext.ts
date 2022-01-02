import { Context, useContext } from 'react';

export const useSafeContext = <T extends Context<any>>(
  context: T,
  contextName: string,
): T extends Context<infer U> ? NonNullable<U> : unknown => {
  const contextValue = useContext(context);

  if (contextValue === null || contextValue === undefined) {
    throw new Error(`useSafeContext: ${contextName} is not available`);
  }

  return contextValue;
};
