import react from "react";
// import logo from "/img/stokzy_logo.png";
import logo from "../../../../public/img/stokzylogowhite.webp";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className=" bg-black sticky top-0 z-50">
      <div className="w-full  flex items-center justify-between px-4 ">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="Stokzy Logo" className="h-full w-[100px]" />
        </div>
        <div className="">
            <ul className="flex items-center justify-center">
                <li><Link href="/" className="nav-link text-white">Home</Link></li>
                <li><Link href="/about" className="nav-link text-white">About Us</Link></li>
                <li><Link href="/courses" className="nav-link text-white">Courses</Link></li>
                <li><Link href="/news" className="nav-link text-white">News</Link></li>
                <li><Link href="/community" className="nav-link text-white">Community</Link></li>
                <li><Link href="/products" className="nav-link text-white">Product</Link></li>
                <li><Link href="/blog" className="nav-link text-white">Blog</Link></li>
                <li><Link href="/contact" className="nav-link text-white">Contact Us</Link></li>
            </ul>
        </div>
        <div className="">
            <ul className="flex items-center justify-center gap-4">
                <li><Link href="/login">Sign Up</Link></li>
                <li><Link href="/signup" className="nav-btn">Get Started</Link></li>
            </ul>
        </div>
      </div>
    </header>
  );
}