import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1>Ninja List</h1> */}
                <Image src="/ninja.png" alt="404 Logo" width={80} height={40}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar; 