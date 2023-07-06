import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface SICModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

// eslint-disable-next-line react/display-name
const SICModal = React.forwardRef<HTMLDivElement, SICModalProps>(
  ({ children, className = '', open, onClose, ...props }, ref) => {
    if (!open) {
      return <></>;
    }

    return (
      <>
        <div className="fixed inset-0 h-screen w-full bg-[rgba(0,0,0,0.5)] z-10" onClick={onClose} />
        <div
          ref={ref}
          className={clsx(
            'overflow-y-auto  max-h-[90vh]  max-w-[95vw] p-14 bg-dark-main z-[11] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            [className],
          )}
          {...props}
        >
          <div>{children}</div>
        </div>
      </>
    );
  },
);

export default SICModal;
