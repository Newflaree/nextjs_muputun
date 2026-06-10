type SeparatorProps = {
  className?: string;
};

export const Separator = ({ className = '' }: SeparatorProps) => {
  return (
    <div
      className={`
        w-full
        h-px
        bg-gray-300
        my-10
        ${ className }
      `}
    />
  );
}
