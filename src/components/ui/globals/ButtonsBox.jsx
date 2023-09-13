// Mateial Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const ButtonsBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openWhatsApp = () => {
    console.log( 'ToWspp' );
  };

  return (
    <div className="caja-con-botones">
      <button className="boton-circular toUp-btn" onClick={scrollToTop}>
        Ir arriba
      </button>
      <button className="boton-circular wspp-btn" onClick={openWhatsApp}>
          <WhatsAppIcon
            sx={{
              paddingBottom: '2px',
              fontSize: '35px',
              transition: 'all 0.3s ease',
              color: 'white',
              ":hover": {
                fontSize: '40px'
              }
            }}
          />
      </button>
    </div>
  );
}
