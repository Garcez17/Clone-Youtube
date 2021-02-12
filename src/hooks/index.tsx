import { SidebarProvider } from './Sidebar';

const AppProvider: React.FC = ({ children }) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
};

export default AppProvider;