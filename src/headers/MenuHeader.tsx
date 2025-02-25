import './MenuHeader.css'
import {MenuList} from '../arrays/MenuList.tsx'

export const MenuHeader = () => {
    return(
        <div>
            <div className="w-full h-full">
                <ul id="menu-header" className="flex bg-gradient-to-r from-blue-500 to-blue-900">
                    {MenuList.map((item) => (
                        <li className="self-center flex-1 text-center text-white">{item}</li> //[#0168dd]
                    ))}
                </ul>
            </div>
        </div>
    )
}