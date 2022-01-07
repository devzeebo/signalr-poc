import {
  useCallback,
} from 'react';
import {
  useDispatch,
} from 'react-redux';

type PartialFunction<
CArgs extends readonly any[],
FArgs extends readonly any[],
Result> = (
  (...args: [...CArgs, ...FArgs]) => Result
);

export type UseAction<Args extends readonly any[], Result> = (...args: Args) => Result;

type ActionResult<
CArgs extends readonly any[],
FArgs extends readonly any[],
T extends (
  PartialFunction<CArgs, FArgs, any>
),
> = T extends PartialFunction<CArgs, FArgs, infer TResult>
  ? TResult
  : never;

export const useCurry = <
CArgs extends readonly any[],
FArgs extends readonly any[],
T extends (
  PartialFunction<CArgs, FArgs, TResult>
),
TResult = ActionResult<CArgs, FArgs, T>
>(
    action: T,
    ...curriedArgs: CArgs
  ): UseAction<FArgs, TResult> => useCallback(
    (...args: FArgs) => action(...[...curriedArgs, ...args]) as TResult,
    [action, curriedArgs],
  );

export default <
CArgs extends readonly any[],
FArgs extends readonly any[],
T extends (
  PartialFunction<CArgs, FArgs, TResult>
),
TResult = ActionResult<CArgs, FArgs, T>
>(
  action: T,
  ...curriedArgs: CArgs
): UseAction<FArgs, TResult> => {
  const dispatch = useDispatch();

  return useCallback(
    (...args: FArgs) => dispatch(action(...[...curriedArgs, ...args])) as TResult,
    [action, curriedArgs, dispatch],
  );
};
