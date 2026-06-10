// React Icons
import {
  IoDocumentTextOutline,
  IoDownloadOutline,
} from 'react-icons/io5';
// Components
import { MupuButton } from '@/presentation/shared';
import type { ProductDoc } from '@/core';
import type { FileDownloadHandler } from '../hooks';

type ProductDocsProps = {
  doc: ProductDoc[];
  handleDownload: FileDownloadHandler;
};

export const ProductDocs = ({ doc, handleDownload }: ProductDocsProps) => {
  return (
    <div className='rounded-[2.5rem] bg-white/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8'>
      <div className='mb-8 max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
          Descargas
        </p>
        <h2 className='mt-4 text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
          Documentación oficial.
        </h2>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {doc.map(({ name, path }) => (
          <article
            key={ name }
            className='flex flex-col gap-5 rounded-[2rem] bg-white/48 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_20px_56px_rgba(15,23,42,0.07)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between'
          >
            <div className='flex items-center gap-4'>
              <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400/18 text-cyan-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                <IoDocumentTextOutline size={ 23 } />
              </span>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  PDF
                </p>
                <h3 className='mt-1 text-lg font-semibold text-slate-950'>
                  { name }
                </h3>
              </div>
            </div>

            <MupuButton
              onClick={() => handleDownload( path )}
              iconRight={ <IoDownloadOutline size={ 18 } /> }
              size='md'
              variant='solid'
            >
              Descargar
            </MupuButton>
          </article>
        ))}
      </div>
    </div>
  );
};
