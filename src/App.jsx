import './App.css';
import Button from './components/Button/Button'

const clickHandler = () => console.log('online...') 

function App() {
  return (
    <>
      <Button
        onClickHandler={clickHandler}
        icon={true}
        fontDim={2} />
    </>
  );
}

export default App;
