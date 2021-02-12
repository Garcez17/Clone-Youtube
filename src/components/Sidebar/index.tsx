import { useToogleSidebarState } from '../../hooks/Sidebar';

import Opened from './Opened';
import Closed from './Closed';

const Sidebar: React.FC = () => {
  const { isOpened } = useToogleSidebarState();

  return (
    <>
    {isOpened ? (
      <Opened />
    ) : (
      <Closed />
    )}
    </>
  );
}

export default Sidebar;