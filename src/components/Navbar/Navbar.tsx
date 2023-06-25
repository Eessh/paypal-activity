import {useState} from "react";
import NavLink from "../NavLink";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <nav className="bg-[#142c8f]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#d1f2ff] hover:bg-[#27419b] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuVisible(prevState => !prevState)}
            >
              <span className="sr-only">Open main menu</span>
              {
                menuVisible
                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                : <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              }
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            {/* Paypal logo */}
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-8 w-auto lg:hidden" src="https://cdn-icons-png.flaticon.com/512/888/888871.png" alt="Your Company"/>
              <img className="hidden h-8 w-auto lg:block" src="https://cdn-icons-png.flaticon.com/512/888/888871.png" alt="Your Company"/>
            </div>
            {/* Nav links */}
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                <NavLink link="#">Home</NavLink>
                <NavLink link="#">Finances</NavLink>
                <NavLink link="#">Send and Request</NavLink>
                <NavLink link="#">Deals</NavLink>
                <NavLink link="#">Wallet</NavLink>
                <NavLink link="#" active={true}>Activity</NavLink>
                <NavLink link="#">Help</NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex gap-2 items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            {/* Notifications */}
            <button type="button" className="rounded-full p-1 text-[#d1f2ff] hover:text-white focus:outline-none">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            {/* Settings */}
            <button type="button" className="rounded-full p-1 text-[#d1f2ff] hover:text-white focus:outline-none">
              <span className="sr-only">View notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            {/* Logout */}
            <button type="button" className="rounded-full p-1 text-[#d1f2ff] hover:text-white focus:outline-none">
              <span className="sr-only">View notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
            {/* Logout text */}
            {/* <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="text-base">LOG OUT</span>
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {
        menuVisible
        ? <div className="absolute w-full lg:hidden flex-1 bg-[#142c8f] z-10" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink link="#" mobile={true}>Home</NavLink>
              <NavLink link="#" mobile={true}>Finances</NavLink>
              <NavLink link="#" mobile={true}>Send and Request</NavLink>
              <NavLink link="#" mobile={true}>Deals</NavLink>
              <NavLink link="#" mobile={true}>Wallet</NavLink>
              <NavLink link="#" active={true} mobile={true}>Activity</NavLink>
              <NavLink link="#" mobile={true}>Help</NavLink>
            </div>
          </div>
        : null
      }
    </nav>
  );
};

export default Navbar;