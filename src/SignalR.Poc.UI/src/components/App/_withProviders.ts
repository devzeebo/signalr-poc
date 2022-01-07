import { createElement, FC, ReactElement } from 'react';
import {
  isEmpty,
  castArray,
  defaultTo,
} from 'lodash/fp';

type FCWithProps<T> = [FC<T>, T];

export const composeComponents = (
  components: Array<FCWithProps<unknown> | FC<unknown>>,
): ReactElement<any, any> | null => {
  if (isEmpty(components)) {
    return null;
  }

  const [nextComponent, ...remainingComponents] = components;
  const [Component, props = {}]: any[] = castArray(nextComponent);

  return createElement(
    Component,
    defaultTo(null, props),
    composeComponents(remainingComponents),
  );
};

export default <P extends object = {}>(
  components: any,
  rootComponent: FC<P>,
) => (
  (props: P) => composeComponents([
    ...components,
    [rootComponent, props],
  ])
);
