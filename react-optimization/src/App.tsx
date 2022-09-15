import {
  ButtonHTMLAttributes,
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './App.scss';
import { DemoOutput } from './components/Demo';
import { Button } from './components/UI/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // NOTE since this changes on every render, it will cause Button, a memo() component, to be re-evaluated
  // * since it's props will technically change.
  // const toggleParagraph = () => {
  //   setShowParagraph((prevState) => !prevState);
  // };

  // NOTE to fix this, toggleParagraph should be moved to a useCallback hook
  const toggleParagraph = useCallback(() => {
    if (!allowToggle) return;

    // NOTE to avoid stale/outdated state, the functional form of setState is used
    // * should be always used whenever a state change is dependent on a previous state
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, [allowToggle]);

  // NOTE for React.memo() to work for objects or arrays, their must be wrapped in useMemo()
  const buttonStyles = useMemo<CSSProperties>(() => ({ marginTop: '8px' }), []);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraph} disabled={false} style={buttonStyles}>
        Toggle Paragraph
      </Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      {/* NOTE only the difference between the virtual React DOM snapshot will be re-rendered */}
      {/* // * so whenever showParagraph's state changes this is re-rendered */}
      {/* // * {showParagraph && <p>This is new!</p>} */}

      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
