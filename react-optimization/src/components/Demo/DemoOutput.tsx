import React from 'react';

interface DemoOutputProps {
  show: boolean;
}

// NOTE React.memo() will make it so DemoOutput and it's entire component branch only re-renders if the props change
// * However it React.memo() should only be used on bigger component trees and/or components that have props that rarely change
const DemoOutput = React.memo(({ show }: DemoOutputProps) => {
  console.log('DemoOutput ran!');
  return <p>{show ? 'This is new!' : ''}</p>;
});

export { DemoOutput };
