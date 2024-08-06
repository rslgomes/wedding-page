import { FC, HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={`h-6 bg-primary-200 rounded max-w-sm mb-4 animate-pulse ${className}`}
    ></div>
  );
};

export default Skeleton;
