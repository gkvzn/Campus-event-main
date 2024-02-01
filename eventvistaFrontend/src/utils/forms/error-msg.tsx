import React from 'react';
import { ErrorMsgProps } from '@/types_and_interfaces/types';

const ErrorMsg: React.FC<ErrorMsgProps> = ({ error }) => {
  return (
    <>
      {error != undefined && < p style={{ color: 'red' }}>{error}</p >}
    </>
  );
};

export default ErrorMsg;