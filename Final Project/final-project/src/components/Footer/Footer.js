import "./Footer.css"

export default function Footer(){
    return(
        <footer className="footer-col">
            <h1>Little Lemon</h1>
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
                    <div className="info-text-col">
                        <p>HOME</p>
                        <p>SPECIALS</p>
                        <p>ABOUT</p>
                    </div>
                </div>
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>SITEMAP</h2>
                    <div className="info-text-col">
                        <p>TESTIMONIALS</p>
                        <p>EXPERIENCE</p>
                        <p>GALLERY</p>
                    </div>
                </div>
                
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>FOLLOW US</h2>
                    <div className="info-text-col">
                        <p>INSTAGRAM</p>
                        <p>FACEBOOK</p>
                        <p>TIKTOK</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}