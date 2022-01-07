/**
 * @jest-environment jsdom
 */
import test from 'jest-gwt';
import { mocked } from 'ts-jest/utils';
import {
  renderHook,
} from '@testing-library/react-hooks';
import {
  noop,
  identity,
} from 'lodash/fp';

import {
  useDispatch,
} from 'react-redux';

import useAction from './useAction';

jest.mock('react-redux');
const mocked_useDispatch = mocked(useDispatch);

describe('hooks > use action', () => {
  test('dispatches action', {
    given: {
      dispatch,
      action,
    },
    when: {
      using_action,
      invoking_callback,
    },
    then: {
      action_dispatched_WITH_ARGS,
      returns_action_result,
    },
  });
});

function dispatch(this: any) {
  this.dispatch = jest.fn().mockImplementation(identity);
  mocked_useDispatch.mockReturnValue(this.dispatch);
}

function action(this: any) {
  this.action = jest.fn().mockReturnValue(Symbol.for('result'));
}

function using_action(this: any) {
  const { result } = renderHook(() => useAction(this.action));

  this.call_action = result;
}

function invoking_callback(this: any) {
  this.result = this.call_action.current('one', 3, noop);
}

function action_dispatched_WITH_ARGS(this: any) {
  expect(this.action).toHaveBeenCalledWith(
    'one',
    3,
    noop,
  );
}

function returns_action_result(this: any) {
  expect(this.result).toBe(Symbol.for('result'));
}
