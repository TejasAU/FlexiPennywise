import { MdHome as HomeIcon, MdSettings as StngIcon} from 'react-icons/md';
import { TbCategory2 as CategoryIcon } from 'react-icons/tb';
import  { VscGraph as GraphIcon } from 'react-icons/vsc';
import  { BsListTask as TaskIcon } from 'react-icons/bs';

export const Navbar = () => {
    console.log("rendered!");
    
    return (
        <header>
          <nav className='text-xs bg-gradient-to-r from-emerald-400 to-cyan-400 border-b border-slate-200 
            shadow-lg flex items-center justify-evenly gap-x-2 h-12'>
            <div className='flex gap-1'>
              <div className='text-blue-900'>Penny</div><div>Wise Dashboard</div>
            </div>
            <div className='flex gap-2'>
              <a href='#' className='rounded text-zinc-800 no-underline flex items-center justify-center gap-x-1
               hover:bg-zinc-200 hover:text-blue-800 p-1'>
                <HomeIcon />
                <div>Home</div>
              </a>
              <a href='#' className='rounded text-zinc-800 no-underline flex items-center justify-center gap-x-1 
                hover:bg-zinc-200 hover:text-blue-800 p-1'>
                <CategoryIcon />
                <div>Categories</div>  
              </a>
              <a href='#' className='rounded text-zinc-800 no-underline flex items-center justify-center gap-x-1 
                hover:bg-zinc-200 hover:text-blue-800 p-1'>
                <GraphIcon />
                <div>Analytics</div>  
              </a>
              <a href='#' className='rounded text-zinc-800 no-underline flex items-center justify-center gap-x-1 
                hover:bg-zinc-200 hover:text-blue-800 p-1'>
                <TaskIcon />
                <div>Challenges</div>  
              </a>
              <a href='#' className='rounded text-zinc-800 no-underline flex items-center justify-center gap-x-1 
                hover:bg-zinc-200 hover:text-blue-800 p-1'>
                <StngIcon />
                <div>Settings</div>  
              </a>
              <hr className='w-px h-8 bg-black border-none' />
              <div className='inline-flex justify-center items-center group gap-x-1' data-te-dropdown-ref>
                <img className='w-8 h-8 rounded-full'/>
                <button className='text-zinc-900 hover:text-blue-800'
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="light">Username</button>
              </div>
            </div>
          </nav>
        </header>
    );
}