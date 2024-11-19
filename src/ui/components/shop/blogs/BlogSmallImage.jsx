import Image from "next/image";


export const BlogSmallImage = ({
  source = '',
  alt = '',
  isShort = false,
  isBanner = false
}) => {
  return (
    <>
      {/* Desktop view */}
      <div className="my-4 hidden md:flex w-full">
        <div className="flex items-center justify-center w-full">
          <Image
            src={ source }
            alt={ alt }
            width={ isShort ? 250 : 600 }
            height={ isBanner ? 400 : 300 }
            style={{ borderRadius: '8px' }}
          />
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden">
        <div className="flex items-center justify-center w-full">
          <Image
            src={ source }
            alt={ alt }
            width={ isShort ? 220 : 330 }
            height={ isShort ? 450 : 150 }
            style={{ borderRadius: '8px' }}
          />
        </div>
      </div>
    </>
  );
};
