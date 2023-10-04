import { NavLink } from "react-router-dom";

import logoIgnite from '../../assets/Logo.png'
import { Timer, Scroll} from 'phosphor-react'
import { HeaderContent } from "./styles";




export function Header () {
    return (
        <HeaderContent>
            <img src={logoIgnite} alt="" />
            <nav>
                <a>
                    <NavLink to="/" >
                        <Timer size={24}/>
                    </NavLink>
                    
                </a>
                <a>
                    <NavLink to="/history" >
                        <Scroll size={24}/>
                    </NavLink>
                </a>
            </nav>
        </HeaderContent>
        
    )
}