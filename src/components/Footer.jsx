import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
              <span className="text-lg font-semibold tracking-tight">VogueFlow</span>
            </div>
            <p className="mt-4 text-zinc-600 max-w-xs">
              Contemporary apparel designed for motion. Crafted with sustainable materials and premium detail.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-black">Women</a></li>
              <li><a href="#" className="hover:text-black">Men</a></li>
              <li><a href="#" className="hover:text-black">Accessories</a></li>
              <li><a href="#" className="hover:text-black">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} VogueFlow. All rights reserved.</p>
          <div className="flex items-center gap-3 text-zinc-600">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-zinc-100"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-zinc-100"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full hover:bg-zinc-100"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
