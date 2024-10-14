import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior><a>About</a></Link>
        </li>
        <li>
          <Link href="/services" legacyBehavior><a>Services</a></Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior><a>Contact</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
