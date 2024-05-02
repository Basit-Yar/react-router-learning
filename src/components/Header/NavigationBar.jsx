import { Link, NavLink } from "react-router-dom";


function NavigationBar() {

    return (

        // <h1 className="text-6xl mx-96 my-8">This is a navbar.</h1>
        <div className="px-5 py-1 sticky top-0 z-10 bg-white shadow">

            <nav className="flex flex-wrap justify-between items-center">
                <div id="logo" className="">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div id="links" className="">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 
                            ${isActive ? "text-green-700" : "text-gray-400"}
                            font-semibold`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `px-4 
                            ${isActive ? "text-green-700" : "text-gray-400"}
                            font-semibold`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="contact"
                        className={({ isActive }) =>
                            `px-4
                            ${isActive ? "text-green-700" : "text-gray-400"}
                            font-semibold`
                        }
                    >
                        Contact
                    </NavLink>

                    <NavLink
                    title="please also provide userid in path, ex : user/basit"
                        to="user"
                        className={({ isActive }) =>
                            `px-4
                            ${isActive ? "text-green-700" : "text-gray-400"}
                            font-semibold`
                        }
                    >
                        User
                    </NavLink>

                </div>

                <div id="end-links" className="">
                    <Link
                        to="#"
                        className="text-white bg-green-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Get started
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;