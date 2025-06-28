"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BriefcaseIcon,
  DatabaseIcon,
  HelpCircleIcon,
  HomeIcon,
  FlaskConicalIcon,
  SettingsIcon,
  SearchIcon,
  PlusIcon,
} from "lucide-react"

import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentView?: string
  currentPath?: string
  onNavigate?: (path: string) => void
}

export function AppSidebar({ currentView = 'dashboard', currentPath = '/dashboard', onNavigate, ...props }: AppSidebarProps) {
  // Determine navigation items based on current path
  const mainNavItems = React.useMemo(() => {
    if (currentPath.startsWith('/admin/chat/')) {
      // Chat navigation - show Discover and Create
      return [
        {
          title: "Discover",
          url: "/admin/discover",
          icon: SearchIcon,
          isActive: currentPath === '/admin/discover',
          onClick: () => onNavigate?.('/admin/discover'),
        },
        {
          title: "Create AI",
          url: "/admin/quick-create",
          icon: PlusIcon,
          isActive: false,
          onClick: () => onNavigate?.('/admin/quick-create'),
        },
      ]
    } else {
      // Dashboard navigation - show all dashboard items
      return [
        {
          title: "Dashboard",
          url: "/admin",
          icon: HomeIcon,
          isActive: currentPath === '/admin',
          onClick: () => onNavigate?.('/admin'),
        },
        {
          title: "Projects",
          url: "/admin/projects",
          icon: BriefcaseIcon,
          isActive: currentPath === '/admin/projects' || currentPath.startsWith('/admin/projects/'),
          onClick: () => onNavigate?.('/admin/projects'),
        },
        {
          title: "Playground",
          url: "/admin/playground",
          icon: FlaskConicalIcon,
          isActive: currentPath === '/admin/playground',
          onClick: () => onNavigate?.('/admin/playground'),
        },
        {
          title: "Data Library",
          url: "/admin/data-library",
          icon: DatabaseIcon,
          isActive: currentPath === '/admin/data-library',
          onClick: () => onNavigate?.('/admin/data-library'),
        },
      ]
    }
  }, [currentPath, onNavigate])

  const data = {
    navMain: mainNavItems,
    navSecondary: [
      {
        title: "Settings",
        url: "/admin/settings",
        icon: SettingsIcon,
      },
      {
        title: "Help & Support",
        url: "/admin/help-support",
        icon: HelpCircleIcon,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Thetails-Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onNavigate={onNavigate} />
        <NavSecondary items={data.navSecondary} className="mt-auto" onNavigate={onNavigate} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}