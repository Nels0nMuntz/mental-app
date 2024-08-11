import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className='flex flex-col items-center text-sm lg:flex-row'>
        <li>
          <Link href='/about' className='px-5 py-4'>
            About
          </Link>
        </li>
        <li>
          <Link href='our-specialists' className='px-5 py-4'>
            Our Experts
          </Link>
        </li>
        <li>
          <Link href='for-specialists' className='px-5 py-4'>
            For Specialists
          </Link>
        </li>
      </ul>
    </nav>
  );
}
