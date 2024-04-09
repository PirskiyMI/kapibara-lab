export const getClasses = ({
   mainClassName,
   className,
}: {
   mainClassName: string;
   className?: string;
}) => (className ? `${mainClassName} ${className}` : mainClassName);
