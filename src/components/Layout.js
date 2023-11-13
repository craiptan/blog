import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/agents',
      title: 'Agents',
    },
    {
      href: '/services',
      title: 'Services',
    },
  ];
function Layout({ children}){
    const router = useRouter();
    return(
        <div className="flex flex-col">
            <div className="flex-1 flex-col md:flex-row">
                {children}
            </div>
        </div>
    );
}
export default Layout;