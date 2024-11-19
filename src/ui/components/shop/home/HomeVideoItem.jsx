
export const HomeVideoItem = ({ source = '' }) => {
  return (
    <video 
      controls 
      className="w-full h-auto rounded-lg shadow-2xl mt-4"
    >
      <source src={ source } type="video/mp4" />
      Tu navegador no soporta la reproducción de videos.
    </video>
  );
}
