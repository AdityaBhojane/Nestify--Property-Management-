import React, { ReactNode } from 'react';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Plus, Search } from 'lucide-react';
import { ModeToggle } from '../ThemeToggle/ModeToggle';
import { useDispatch } from 'react-redux';
import { setPropertyModal } from '@/redux/slice/modalSlice';

import { NavigationPanelAdmin } from './NavigationPanelAdmin';


interface NavPanelContainerProps {
  children: ReactNode;
}

const NavPanelContainerAdmin: React.FC<NavPanelContainerProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <SidebarProvider>
        <NavigationPanelAdmin />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b justify-between ">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator className="mr-2 h-4" />
              <Input type='text' placeholder='Search Property' />
              <Button variant={'outline'} >
                <Search />
              </Button>
            </div>

            <div className="px-5 flex items-center gap-2">
              <Button onClick={()=>dispatch(setPropertyModal())} variant="default" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Property
              </Button>
              <ModeToggle />
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default NavPanelContainerAdmin;
