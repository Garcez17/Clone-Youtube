import { createContext, useCallback, useContext, useState } from "react";

interface SidebarContextData {
  isOpened: boolean;
  toogleView: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData
);

const SidebarProvider: React.FC = ({ children }) => {
  const [isOpened, setIsOpened] = useState(true);

  const toogleView = useCallback((isOpen: boolean) => {
    setIsOpened(isOpen);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpened, toogleView }}>
      {children}
    </SidebarContext.Provider>
  )
}

function useToogleSidebarState(): SidebarContextData {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useToogleSidebarState must be used within a SidebarProvider');
  }

  return context;
}

export { useToogleSidebarState, SidebarProvider };