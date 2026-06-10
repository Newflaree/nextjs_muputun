type SubTitleProps = {
  label: string;
};

export const SubTitle = ({ label }: SubTitleProps) => {
  return (
    <h2 className='text-2xl text-start font-semibold mb-10'>
      { label }
    </h2>
  );
}
