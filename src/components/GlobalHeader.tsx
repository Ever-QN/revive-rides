import Link from 'next/link';

export default function GlobalHeader() {
    return (
      <header className='bg-gray-900 text-white p-4'>
        <div className='container flex justify-between'>
            <Link href='/'>
                <img
                    src='/images/'
                    alt='S&D Autobody Logo'
                    className='logo'
                    style={{ width: '100px', height: '25px'}}
                />
            </Link>
          <nav className='space-x-4 flex justify-between gap-4'>
            <Link href='/'>
              <div className='hover:text-gray-300 cursor-pointer'>Home</div>
            </Link>
            <Link href='/about'>
              <div className='hover:text-gray-300 cursor-pointer'>About Us</div>
            </Link>
            <Link href='/services'>
              <div className='hover:text-gray-300 cursor-pointer'>Services</div>
            </Link>
            <Link href='/reviews'>
              <div className='hover:text-gray-300 cursor-pointer'>Review us online</div>
            </Link>
            <Link href='/contact'>
              <div className='hover:text-gray-300 cursor-pointer'>Contact us</div>
            </Link>

            <Link href='/booking'>
                <div className='hover:text-gray-300 cursor-pointer gap-4'>Book an Appointment</div>
            </Link>
          </nav>
        </div>
      </header>
    );
  }