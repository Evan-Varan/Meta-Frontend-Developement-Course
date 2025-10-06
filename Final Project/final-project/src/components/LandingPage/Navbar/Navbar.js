import './navbar.css';
export default function Navbar({
    landingPageRef,
    specialsPageRef,
    aboutPageRef,
    testimonialsSectionRef,
    experienceRef,
    instagramGalleryRef,
    scrollToSection}
){
    return(
        <nav>
            <ul className = "leftNav">
                <li onClick={() => scrollToSection(landingPageRef)}>HOME</li>
                <li onClick={() => scrollToSection(specialsPageRef)}>SPECIALS</li>
                <li onClick={() => scrollToSection(aboutPageRef)}>ABOUT</li>
                
            </ul>
            <p className='logo-text'>Little Lemon</p>
            <ul className = "rightNav">
                <li onClick={() => scrollToSection(testimonialsSectionRef)}>TESTIMONIALS</li>
                <li onClick={() => scrollToSection(experienceRef)}>EXPERIENCE</li>
                <li onClick={() => scrollToSection(instagramGalleryRef)}>GALLERY</li>
            </ul>
        </nav>
    )
}

