"use client";
import MasshousingSidebar from "@/components/3d/masshousing/masshousing-sidebar";
import SidebarArchitecture from "@/components/3d/sidebar";
import PageContainer from "@/components/ui-components/page-container";


const page = () => {
  return (
    <>
      <PageContainer>
        <SidebarArchitecture title="Mass Housing">
          <MasshousingSidebar />
        </SidebarArchitecture>
        <iframe
            src="https://architecture-3d.vercel.app/mass-housing"
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
