import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  badge?: string;
  children?: React.ReactNode;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, badge, children, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="w-full">
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <span className="text-gray-800">{label}</span>
            {badge && (
              <span className={`ml-2 text-xs px-1 rounded ${
                badge === 'HOT' ? 'bg-red-500 text-white' : 
                badge === 'SALE' ? 'bg-teal-500 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {badge}
              </span>
            )}
          </div>
          {children && (
            <ChevronDown 
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          )}
        </div>
        {children && isOpen && (
          <div className="bg-gray-50 py-2">
            {children}
          </div>
        )}
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center px-4 py-6 cursor-pointer">
        <span className="text-gray-700 hover:text-black">{label}</span>
        {badge && (
          <span className={`ml-1 text-xs px-1 rounded ${
            badge === 'HOT' ? 'bg-red-500 text-white' : 
            badge === 'SALE' ? 'bg-teal-500 text-white' :
            'bg-gray-200 text-gray-600'
          }`}>
            {badge}
          </span>
        )}
      </div>
      
      {children && isHovered && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg py-4 z-50">
          {children}
        </div>
      )}
    </div>
  );
};

const MobileSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:hidden
      `}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          <NavItem label="Home" isMobile />
          
          <NavItem label="Shop" isMobile>
            <div className="space-y-2 pl-4">
              <div className="py-2">Simple Products</div>
              <div className="py-2 flex items-center">
                Grouped Products
                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-1 rounded">NEW</span>
              </div>
            </div>
          </NavItem>

          <NavItem label="Categories" badge="SALE" isMobile>
            <div className="space-y-2 pl-4">
              <div className="py-2">Shop Page</div>
              <div className="py-2">Category Page</div>
              <div className="py-2">Checkout Page</div>
            </div>
          </NavItem>

          <NavItem label="Products" badge="HOT" isMobile />
          <NavItem label="Top Deals" isMobile />
          <NavItem label="Elements" isMobile />

          <div className="border-t mt-4">
            <div className="px-4 py-3">Blog</div>
            <div className="px-4 py-3">About Us</div>
            <div className="px-4 py-3">Contact Us</div>
            <div className="px-4 py-3">FAQs</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50 py-[1vh]">
      <div className="mx-auto px-[3vw]">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="text-5xl font-semibold">Timen</div>

          {/* Navigation Items - Desktop */}
          <div className="hidden lg:flex items-center text-lg font-semibold">
            <NavItem label="HOME" />
            <NavItem label="SHOP">
              <div className="space-y-2">
                <h3 className="px-4 font-semibold">Product Types</h3>
                <div className="hover:bg-gray-50 px-4 py-2">Simple Products</div>
                <div className="hover:bg-gray-50 px-4 py-2 flex items-center">
                  Grouped Products
                  <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-1 rounded">NEW</span>
                </div>
              </div>
            </NavItem>
            <NavItem label="CATEGORIES" badge="SALE" />
            <NavItem label="PRODUCTS" badge="HOT" />
            <NavItem label="TOP DEALS" />
            <NavItem label="ELEMENTS" />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-7 h-7 text-gray-600 cursor-pointer" />
            <User className="w-7 h-7 text-gray-600 cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="w-7 h-7 text-gray-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default Navbar;