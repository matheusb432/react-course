import { useReducer, useCallback } from 'react';

interface HttpState {
  status: 'pending' | 'completed' | 'error' | null;
  data: any;
  error: string | null;
}

export enum HttpActions {
  SEND = 'SEND',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface HttpAction {
  type: HttpActions;
  responseData?: any;
  errorMessage?: string;
}

function httpReducer(state: HttpState, action: HttpAction): HttpState {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage as any,
      status: 'completed',
    };
  }

  return state;
}

function useHttp(
  requestFunction: (...args: any[]) => Promise<any>,
  startWithPending = false
) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData?: any) {
      dispatch({ type: HttpActions.SEND });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: HttpActions.SUCCESS, responseData });
      } catch (error: any) {
        dispatch({
          type: HttpActions.ERROR,
          errorMessage: error?.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
