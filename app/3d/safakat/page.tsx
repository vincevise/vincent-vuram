"use client";
import SafakatHouseSidebar from "@/components/3d/safakathouse/safakathouse-sidebar";
import SidebarArchitecture from "@/components/3d/sidebar";
import PageContainer from "@/components/ui-components/page-container";


const page = () => {
  return (
    <>
      <PageContainer>
        <SidebarArchitecture title="Safakat">
          <SafakatHouseSidebar />
        </SidebarArchitecture>
        <iframe
            src="https://architecture-3d.vercel.app/safakat-house"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
          />
      </PageContainer>
    </>
  );
};

export default page;
