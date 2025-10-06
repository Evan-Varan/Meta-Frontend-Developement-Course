import "./Footer.css"
import { SocialIcon } from 'react-social-icons';
import videoSrc from "../../assets/854750-hd_1920_1080_25fps.mp4"

export default function Footer({
    landingPageRef,
    specialsPageRef,
    aboutPageRef,
    testimonialsSectionRef,
    experienceRef,
    instagramGalleryRef,
    scrollToSection}
){
    return(
        <footer className="footer-col">
            <div className="header-row">
                <h3 className="little-h3">Little</h3>
                <video src = {videoSrc} className="video" muted loop autoPlay/>
                <h3 className="lemon-h3">Lemon</h3>
            </div>
            
            <div className="footer-row">
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>INFORMATION</h2>
                    <div className="info-text-col">
                        <p>Little Lemon Restaurant</p>
                        <p>1009 Vulture Rd, Chicago, IL</p>
                        <p>info@littlelemon.com</p>
                    </div>
                </div>
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>SITEMAP</h2>
                    <ul className="info-text-col">
                        <li onClick={() => scrollToSection(landingPageRef)}>HOME</li>
                        <li onClick={() => scrollToSection(specialsPageRef)}>SPECIALS</li>
                        <li onClick={() => scrollToSection(aboutPageRef)}>ABOUT</li>
                    </ul>
                </div>
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>SITEMAP</h2>
                    <ul className="info-text-col">
                        <li onClick={() => scrollToSection(testimonialsSectionRef)}>TESTIMONIALS</li>
                        <li onClick={() => scrollToSection(experienceRef)}>EXPERIENCE</li>
                        <li onClick={() => scrollToSection(instagramGalleryRef)}>GALLERY</li>
                    </ul>
                </div>
                
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>FOLLOW US</h2>
                    <ul className="social-col">
                        <div className="social-row">
                            <SocialIcon
                                url="https://instagram.com/yourprofile"
                                style={{ height: 20, width: 20 }}
                                borderRadius="0"          // square corners
                            />
                            <li>INSTAGRAM</li>
                        </div>
                        
                        <div className="social-row">
                            <SocialIcon
                                url="https://facebook.com/yourprofile"
                                style={{ height: 20, width: 20 }}
                                borderRadius="0"          // square corners
                            />
                            <li>FACEBOOK</li>
                        </div>
                        <div className="social-row">
                            <SocialIcon
                                url="https://tiktok.com/yourprofile"
                                style={{ height: 20, width: 20 }}
                                borderRadius="0"          // square corners
                            />
                            <li>TIKTOK</li>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    )
}