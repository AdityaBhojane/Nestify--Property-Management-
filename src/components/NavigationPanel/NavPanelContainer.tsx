import React, { ReactNode } from 'react';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from './NavigationPanel';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { ModeToggle } from '../ThemeToggle/ModeToggle';
import { useNavigate } from 'react-router-dom';


interface NavPanelContainerProps {
  children: ReactNode;
}

const NavPanelContainer: React.FC<NavPanelContainerProps> = ({ children }) => {

  const navigate = useNavigate();


  return (
    <>
      <SidebarProvider>
        <AppSidebar />
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
              <Button onClick={()=>navigate('/auth/admin')} variant="outline" className="flex items-center gap-2 text-green-600">
                Admin Panel
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

export default NavPanelContainer;
