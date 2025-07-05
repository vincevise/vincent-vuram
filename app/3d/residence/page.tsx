"use client";
import ResidenceSidebar from "@/components/3d/residence/residence-sidebar";
import SidebarArchitecture from "@/components/3d/sidebar";
import PageContainer from "@/components/ui-components/page-container";


const page = () => {
  return (
    <>
      <PageContainer>
        <SidebarArchitecture title="Mass Housing">
          <ResidenceSidebar />
        </SidebarArchitecture>
        <iframe
            src="https://architecture-3d.vercel.app/residence"
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
