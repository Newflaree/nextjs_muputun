type TitleProps = {
  label?: string;
  className?: string;
};

export const Title = ({
  label = 'Test Label',
  className = ''
}: TitleProps) => {
  return (
    <h1 className={ `text-4xl text-center mb-10 ${ className }` }>
      { label }
    </h1>
  );
}
