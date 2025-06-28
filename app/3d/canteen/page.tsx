'use client'
import CanteenSidebar from '@/components/3d/canteen/canteen-sidebar'
import SidebarArchitecture from '@/components/3d/sidebar'
import PageContainer from '@/components/ui-components/page-container'


const page = ( ) => {
  return (
    <>
    <PageContainer>
      <SidebarArchitecture title='Canteen'>
        <CanteenSidebar/>
      </SidebarArchitecture>
      <iframe
            src="https://architecture-3d.vercel.app/canteen"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
          />
    </PageContainer>
    </>
  )
}

export default page