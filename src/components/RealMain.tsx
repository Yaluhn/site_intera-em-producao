import { useState } from 'react';
import { Main } from './Main';
import { MainHeader } from './MainHeader';
import { QuemSomos } from './QuemSomos';

const aparecer = (num: number) => {
  switch (num) {
    case 0:
      return <Main />;
    case 1:
      return (
        <>
          <MainHeader />
          <QuemSomos />
        </>);
    case 2:
      return (
        <>
          <MainHeader />
        </>);
    case 3:
      return (
        <>
          <MainHeader />
        </>);
    case 4:
      return (
        <>
          <MainHeader />
        </>);
    case 5:
      return (
        <>
          <MainHeader />
        </>);  
    default:
      return <Main />;
  }
}

export const RealMain = () => {
  const [num, setNum] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(aparecer(num));

  const handleChangeComponent = (newNum: number) => {
    setNum(newNum);
    setCurrentComponent(aparecer(newNum));
  };

  return (
    <main className="real-main">
      {currentComponent}
      <button onClick={() => handleChangeComponent(1)}>Show QuemSomos</button>
      <button onClick={() => handleChangeComponent(0)}>Show Main</button>
    </main>
  )
}