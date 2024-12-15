import * as React from "react"
import { CircleUserRound, LandPlot, LayoutDashboard, MessageSquareText, School, User } from "lucide-react"

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


// This is sample data.
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: <LayoutDashboard />
        },
        {
            title: "Properties",
            url: "/properties",
            icon:<LandPlot/>
        },
        {
            title: "Agent",
            url: "/agents",
            icon:<User/>
        },
        {
            title: "Messages",
            url: "/messages",
            icon:<MessageSquareText/>
        },
        {
            title: "My Profile",
            url: "/profile",
            icon:<CircleUserRound/>
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <>
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <School className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold text-lg">Nestify Home</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <Link to={item.url}>
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <div className="flex items-center my-2 py-7">
                                        <span>
                                            {item?.icon}
                                        </span>
                                        <Link to={item.url} className="font-medium text-lg text-[#ccc]">
                                            {item.title}
                                        </Link>
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
