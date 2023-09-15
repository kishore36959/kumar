import React from "react";


// Navbar.js


function Navbar() {
  return (
    <nav className="bg-blue-500 p-5 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/indiapostlogo.png" className="h-8 w-8" />
          <a href="/" className="text-xl font-bold">Your Logo</a>
        </div>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/postage-calculator" className="hover:underline">Postage Calculator</a>
          <a href="/find-pincode" className="hover:underline">Find Pincode</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
