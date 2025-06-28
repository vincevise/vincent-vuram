"use client";
import SidebarArchitecture from "@/components/3d/sidebar";
import VavSidebar from "@/components/3d/vav/vav-sidebar";
import PageContainer from "@/components/ui-components/page-container";


const page = () => {
  return (
    <>
      <PageContainer>
        <SidebarArchitecture title="Vaav">
          <VavSidebar />
        </SidebarArchitecture>
       <iframe
            src="https://architecture-3d.vercel.app/vav"
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
