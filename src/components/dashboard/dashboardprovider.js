import { createContext } from 'react';

export const DashboardContext = createContext();
export const DashboardProvider = (data) => {
  const { children } = data;
  const Verifylogin = async () => {
    console.log('checkLogin');
  };

  return (
    <DashboardContext.Provider value={{ Verifylogin }}>
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardProvider;
