import * as React from "react"
import { CircleUserRound, LandPlot, LayoutDashboard, LogOut, MessageSquareText, School } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearAuthData } from "@/redux/slice/authSlice"
import { clearAdminAuthData } from "@/redux/slice/adminAuthSlice"




export function NavigationPanelAdmin({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const dispatch = useDispatch();
    // This is sample data.
    const data = {
        navMain: [
            {
                title: "Dashboard",
                url: "/dashboard/admin",
                icon: <LayoutDashboard />
            },
            {
                title: "My Properties",
                url: "/properties/admin",
                icon: <LandPlot />
            },
            {
                title: "Messages",
                url: "/messages/admin",
                icon: <MessageSquareText />
            },
            {
                title: "My Profile",
                url: "/profile/admin",
                icon: <CircleUserRound />
            },
            {
                title: "Logout",
                url: "/signin",
                icon: <LogOut />,
                style:"text-red-500 ",
                event:()=>{
                    dispatch(clearAuthData())
                    dispatch(clearAdminAuthData())
                }
            },
        ],
    };
    
    return (
        <>
            <Sidebar {...props}>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <span >
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <School className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 leading-none">
                                        <span className="font-semibold text-lg">Nestify Home</span>
                                    </div>
                                </span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            {data.navMain.map((item,index) => (
                                <Link key={index} to={item.url} onClick={item?.event}>
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <div className={`flex items-center my-2 py-7 ${location.pathname === item.url? "text-blue-500 bg-blue-200 dark:bg-blue-900 font-semibold": "hover:text-blue-400"}`}>
                                                <span>
                                                    {item?.icon}
                                                </span>
                                                <p className={`font-medium text-lg text-[#8b8b8b] ${item?.style}`}>
                                                    {item.title}
                                                </p>
                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </Link>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
        </>
    )
}
