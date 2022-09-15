import {
  ButtonHTMLAttributes,
  CSSProperties,
  useCallback,
  useEffect,
  useState,
} from 'react';
import './App.scss';
import { DemoOutput } from './components/Demo';
import { Button } from './components/UI/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  // NOTE since this changes on every render, it will cause Button, a memo() component, to be re-evaluated
  // * since it's props will technically change.
  // const toggleParagraph = () => {
  //   setShowParagraph((prevState) => !prevState);
  // };

  // NOTE to fix this, toggleParagraph should be moved to a useCallback hook
  const toggleParagraph = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button
        onClick={toggleParagraph}
        disabled={false}
        // NOTE it is also possible to set nested properties via the HTMLAttributes property
        // style={getButtonStyles()}
      >
        Click me!
      </Button>
      {/* NOTE only the difference between the virtual React DOM snapshot will be re-rendered */}
      {/* // * so whenever showParagraph's state changes this is re-rendered */}
      {/* // * {showParagraph && <p>This is new!</p>} */}

      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
