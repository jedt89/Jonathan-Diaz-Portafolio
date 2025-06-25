import { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className='mainContainer'>{children}</div>;
};

export default MainContainer;
