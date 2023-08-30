import { createContext } from "react";

export const DashboardContext = createContext();
export const DashboardProvider = ({ children }) => {
    const Verifylogin = async () => {
        console.log("checkLogin");
    };

    return (
        <DashboardContext.Provider value={{ Verifylogin }}>
            {children}
        </DashboardContext.Provider>
    );
}
export default DashboardContext;