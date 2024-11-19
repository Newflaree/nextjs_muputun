// React Icons
import { IoDocumentTextOutline } from 'react-icons/io5';
// Components
import { Title } from '../../ui';


export const ProductDocs = ({ doc, handleDownload }) => {
  return (
    <div className='p-4'>
      <Title
        label='Documentación oficial'
        className='font-bold text-start text-2xl'
      />

      <div>
        {doc.map(({ name, path }) => (
          <div key={ name } className='mb-8'>
            <h3 className='text-xl font-medium mb-3'>
              { name }
            </h3>

            <button
              onClick={() => handleDownload( path )}
              className="bg-[#1FBEE8] text-white py-2 px-4 rounded-lg flex items-center hover:bg-[#17A6C8] transition-all duration-300"
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoDocumentTextOutline className='w-6 h-6 mr-2' />
              Descargar PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

