import { useMaintainedRef } from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useMaintainedRef', () => {
  it('ensures that ref stays up to date w/ prop', () => {
    const initialValue = Math.random();
    const { result, rerender } = renderHook(({ value }) => useMaintainedRef(value), {
      initialProps: { value: initialValue },
    });

    expect(result.current.current).toBe(initialValue);

    // rerender w/ new value
    let nextValue = Math.random();
    act(() => {
      rerender({ value: nextValue });
    });

    // Check after rerender
    expect(result.current.current).toBe(nextValue);
  });
});
