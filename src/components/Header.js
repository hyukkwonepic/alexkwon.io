import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Alex H. Kwon Blog">
            <div className="text-2xl md:text-2xl font-bold text-gray-600">
              Alex H. Kwon
            </div>
          </a>
        </Link>
      </div>
      <div className="text-base leading-5 space-x-4">
        <a
          href="https://github.com/alexKwonIsAwesome"
          target="_blank"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          About &rarr;
        </a>
      </div>
    </header>
  );
}
