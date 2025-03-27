import {Separator} from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div>Hello</div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <div>Content</div>
      </SidebarContent>
      <SidebarFooter>
        <div>Footer</div>
      </SidebarFooter>
    </Sidebar>
  );
}
