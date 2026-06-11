type LoadingScreenProps = {
  isVisible: boolean;
};

export const LoadingScreen = ({ isVisible }: LoadingScreenProps) => {
  return (
    <div
      aria-hidden='true'
      className={`loading-screen ${ isVisible ? 'loading-screen--visible' : '' }`}
    >
      <div className='loading-screen__panel'>
        <span className='loading-screen__mark' />
        <span className='loading-screen__line' />
      </div>
    </div>
  );
};
