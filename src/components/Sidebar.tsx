import { FC, ReactNode, useState } from 'react';
import NetworkSwitcher from './NetworkSwitcher';
import dynamic from 'next/dynamic';
import { useAutoConnect } from 'contexts/AutoConnectProvider';
import { AppBar } from './AppBar';
import Link from 'next/link';


interface SidebarProps {
    children: ReactNode;
}

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

export const Sidebar: FC<SidebarProps> = ({ children }) => {
    const { autoConnect, setAutoConnect } = useAutoConnect();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toogleOpen = () => {
        setIsOpened(!isOpened);
    };
    
    return (<>
        <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" onClick={toogleOpen} aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm  rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="separator-sidebar" className={`fixed flex overflow-hidden top-0 left-0 z-40 bg-gray-800 w-64 h-screen ${!isOpened && "-translate-x-full"}  transition-transform sm:translate-x-0`} aria-label="Sidebar">

            <div className="h-full px-3 py-4 overflow-hidden   flex flex-col justify-between">
                <div>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group gap-4">
                                <svg className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover: group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/new-request-data" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group gap-4">
                                <svg className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover: group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Nuevo proyecto</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-projects" className="flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group gap-4">
                                <svg className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Mis proyectos</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="space-y-2 font-medium">

                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">

                        <li>
                            <Link href="/ViewModels" className="flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group gap-4">
                                <svg className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                                    <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Modelos</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/UploadModel" className="flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group gap-4">
                                <svg className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                                    <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Nuevo modelo</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/MyModels" className="flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group gap-4">
                                <svg className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover: dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                                    <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Mis modelos</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <AppBar />

            </div>
        </aside>

        <div className="sm:ml-64">
            {children}
        </div>
    </>
    )
}
