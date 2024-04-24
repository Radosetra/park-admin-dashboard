import { createPortal } from 'react-dom';
import { ModalProps } from './types/modal.type';


export default function ModalBase(props: ModalProps) {
    const {children, style= '', name, setIsOpen} = props;

  return createPortal(
    <>
      <div className={`absolute inset-2 justify-center items-center flex z-50 outline-none focus:outline-none`}>
        <div className="relative w-auto max-w-3xl">
          {/*content*/}
          <div className={`border-0 rounded-lg shadow-lg relative flex flex-col ${style} bg-white dark:bg-boxdark outline-none focus:outline-none p-4`}>
            {/*header*/}
            <div className="flex items-center justify-between rounded-t mb-4">
              <div className=""></div>
              <h3 className="text-3xl font-semibold">{name}</h3>
              <button
                className="p-1 border-0 text-black text-3xl font-semibold outline-none focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-black dark:text-white text-2xl h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="overflow-y-scroll">
              {children}
            </div>

              
          </div>
        </div>
      </div>
      <div className="fixed inset-0 opacity-25 z-40 bg-black dark:bg-white w-screen"></div>
    </>
  ,document.body);
}
