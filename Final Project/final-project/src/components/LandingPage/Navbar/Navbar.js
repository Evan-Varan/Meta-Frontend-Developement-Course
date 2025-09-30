import './navbar.css';
export default function Navbar(){
    return(
        <nav>
            <ul className = "leftNav">
                <li>SHOP</li>
                <li>OUR STORY</li>
                <li>ABOUT</li>
                <li>RECIPES</li>
            </ul>
            <p className='logo-text'>Little Lemon</p>
            <ul className = "rightNav">
                <li>FIND US</li>
                <li>SUBSCRIBE</li>
                <li>SOURCING</li>
            </ul>
        </nav>
    )
}

