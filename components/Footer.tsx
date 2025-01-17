import Link from 'next/link';
import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center mb-10">
          <Building2 className="h-10 w-auto text-white" />
        </div>
        <nav className="mb-10 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Bablu Infracon. All rights reserved.
          </p>
          <address className="mt-4 text-xs leading-5 text-gray-400 not-italic">
            123 Business Avenue, City, Country<br />
            Phone: +1 (555) 123-4567<br />
            Email: contact@babluinfracon.com
          </address>
        </div>
      </div>
    </footer>
  );
}