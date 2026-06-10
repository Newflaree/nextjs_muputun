import { HomeVideoItem } from './';

const videos = [
  {
    id: 'field-01',
    title: 'Levantamiento en terreno',
    description: 'Flujos de medición precisos para operación diaria.',
    source: 'https://res.cloudinary.com/newflare/video/upload/v1728577074/demos/muputun/videos/ccbgg4tlu2w7ovczajf6.mp4',
  },
  {
    id: 'field-02',
    title: 'Integración RTK',
    description: 'Equipos X5 trabajando junto a procesos técnicos reales.',
    source: 'https://res.cloudinary.com/newflare/video/upload/v1732029097/demos/muputun/videos/lwgda86zhng742l7jmrl.mp4',
  },
  {
    id: 'field-03',
    title: 'Precisión portátil',
    description: 'Tecnología compacta para decisiones geoespaciales confiables.',
    source: 'https://res.cloudinary.com/newflare/video/upload/v1732029222/demos/muputun/videos/okrst1qbl5ps4x8tzp24.mp4',
  },
];

export const HomeVideo = () => {
  const [featuredVideo, ...secondaryVideos] = videos;

  return (
    <div className='grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_0.9fr]'>
      <HomeVideoItem
        title={ featuredVideo.title }
        description={ featuredVideo.description }
        source={ featuredVideo.source }
        variant='featured'
      />

      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-1'>
        {secondaryVideos.map((video) => (
        <HomeVideoItem
          key={ video.id }
          title={ video.title }
          description={ video.description }
          source={ video.source }
          variant='compact'
        />
      ))}
      </div>
    </div>
  );
}
