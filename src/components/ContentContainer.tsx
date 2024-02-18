import { FC } from 'react';
import Link from "next/link";
import Text from './Text';
import NavElement from './nav-element';
interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="flex-1 flex  flex-col justify-between items-center bg-slate-900 pt-16">
      <div className='max-w-lg w-full'>
        <div className="items-center drawer-content flex flex-col justify-between w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
