'use client';
import {SidebarProvider} from '@/components/ui/sidebar';
import AppSidebar from './AppSidebar';
import {OptionalRootLayoutProps} from '@/interfaces/general';

export default function SidebarLayout({
  children,
}: Readonly<OptionalRootLayoutProps>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
