import './MainHeader.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import sector from '../assets/sector.png';
import logout from '../assets/logout.png'

// @ts-ignore
export const MainHeader = ({props}) => {
    const userInfoTW = "font-bold montserrat";
    return (
        <div className="bg-sky-500 h-24 flex items-center justify-between px-4 bg-gradient-to-r from-blue-500 to-blue-900">
            <div className="flex items-center">
                <img className="h-16 ml-4 cursor-pointer" src={logo} alt="logo" />
                <h1 className="font-delvon text-6xl ml-3 cursor-pointer">Login</h1>
            </div>
            <div id="session">
                <ul id="sessionInfo" className="mr-3">
                    <li>
                        <img className="size-6 fixed" src={user} alt="user"/>
                        <p><span className={userInfoTW}>Operador:</span> {props.name}</p>
                    </li>
                    <li>
                        <img className="size-6 fixed"  src={sector} alt="sector"/>
                        <p><span className={userInfoTW}>Setor:</span> {props.sector}</p>
                    </li>
                    <li>
                    <p><span className={userInfoTW}>Unidade:</span> {props.unity}</p>
                    </li>
                </ul>
                <div id="logout" className="cursor-pointer">
                    <h2 className="text-2xl ml-20">
                        <img className="size-8 right-12 absolute" src={logout} alt="logout"/>
                        Sair
                    </h2>
                </div>
            </div>
        </div>
    );
}
