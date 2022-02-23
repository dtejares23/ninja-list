import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect (() => {
        //console.log('Mali na pili mong website dre');

        setTimeout(() => {
            //router.go(1)
            router.push('/');
        }, 3600)
    }, [])

    return ( 
        <div className="not-found">
            <Image src="/404.png" alt="404 Logo" width={130} height={120}/>
            &nbsp;
            <Image src="img/5secs.gif" alt="5secs Logo"  width={200} height={120}/>

            <h2>Oooops...This Page is Lost in Space (ERROR 404)</h2>

            <h4>You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn't amount to anything.You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.</h4>

            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            
        </div>
     );
}
 
export default NotFound;