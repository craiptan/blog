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
  const RootLayout = ({children}) => {
    const router = useRouter();
    return(
        <div className="min-h-screen flex flex-col">
            <header
                className="bg-zinc-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase"
            >
                Next.js sidebar menu
            </header>
            <div className="flex flex-col md:flex-row flex-1">
                <aside className="bg-zinc-100 w-full md:w-60">
                    <nav>
                        <ul>
                            {menuItems.map(({ href,title })=>(
                                <li className="m-2" key={title}>
                                    <Link href={href} className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${router.asPath === href && 'bg-fuchsia-600 text-white'}`}>
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
export default RootLayout;