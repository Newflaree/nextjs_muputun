// Layouts
import { MainLayout } from '@/components/layouts';
//Views
import { InBuilding } from '@/views';


export default function Home() {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc='Servicio de drones y equipos topográficos'
    >
      <InBuilding />
    </MainLayout>
  )
}
