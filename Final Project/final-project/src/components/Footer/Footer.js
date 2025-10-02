import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer-col">
            <h1>Little Lemon</h1>
            <div className="footer-row">
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>INFORMATION</h2>
                    <div className="info-text-col">
                        <p>text1</p>
                        <p>text2</p>
                        <p>text3</p>
                    </div>
                </div>
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>SITEMAP</h2>
                    <div className="info-text-col">
                        <p>text1</p>
                        <p>text2</p>
                        <p>text3</p>
                    </div>
                </div>
                
                <div className="info-col">
                    <div className="divider"></div>
                    <h2>FOLLOW US</h2>
                    <div className="info-text-col">
                        <p>text1</p>
                        <p>text2</p>
                        <p>text3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}