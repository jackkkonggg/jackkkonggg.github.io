import { useDebugValue, useEffect, useState } from 'react';

export default function useMediaQuery(queryInput: string): boolean {
  const query = queryInput.replace(/^@media( ?)/m, '');

  const [match, setMatch] = useState(false);

  useEffect(() => {
    let active = true;

    const queryList = window.matchMedia(query);
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query]);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDebugValue({ query, match });
  }

  return match;
}
