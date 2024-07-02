import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">
        <SideNav />
      </div>
      <div className="">{children}</div>
    </div>
  );
}