import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo-light.png';

const Navigaton = () => {
  return (
    <nav className="h-16 whitespace-nowrap flex flex-row items-center">
      <div>
        <Link to="/barker">
          <img
            className=" cursor-pointer min-w-28 w-28"
            src={Logo}
            alt="barker logo"
          />
        </Link>
      </div>
      <div className="flex justify-end w-full">
        {[
          ['Already a member?', '/log-in'],
          ['Sign up', '/sign-up'],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-stone-300 text-xs hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigaton;
