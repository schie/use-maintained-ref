import { useRef, useEffect } from 'react';

export function useMaintainedRef<T = any>(maintainedThing: T) {
  const ref = useRef(maintainedThing);

  useEffect(() => {
    ref.current = maintainedThing;
  }, [maintainedThing]);

  return ref;
}
