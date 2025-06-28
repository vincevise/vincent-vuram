import SidebarArchitecture from '@/components/3d/sidebar'
import UrbanSidebar from '@/components/3d/urbansem/urban-sidebar'
import PageContainer from '@/components/ui-components/page-container'


const page = () => {
  return (
    <PageContainer>
      <SidebarArchitecture title='Urban Design'>
        <UrbanSidebar/>
      </SidebarArchitecture>
      <iframe
            src="https://architecture-3d.vercel.app/urban-sem"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
          />
     </PageContainer>
  )
}

export default page