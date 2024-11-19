import { HomeVideoItem } from './';

export const HomeVideo = () => {
  return (
    <div className='mb-20'>
      <div className='px-5'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20'>
          <HomeVideoItem 
            source='https://res.cloudinary.com/newflare/video/upload/v1728577074/demos/muputun/videos/ccbgg4tlu2w7ovczajf6.mp4'
          />

          <HomeVideoItem 
            source='https://res.cloudinary.com/newflare/video/upload/v1732029097/demos/muputun/videos/lwgda86zhng742l7jmrl.mp4'
          />

          <HomeVideoItem 
            source='https://res.cloudinary.com/newflare/video/upload/v1732029222/demos/muputun/videos/okrst1qbl5ps4x8tzp24.mp4'
          />
        </div>
      </div>
    </div>
  );
}
