import "./Awards.css"

export default function Awards(){
    return(
        <div className="award-container">
            <div className="award">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="trophyTitle">
                    <title id="trophyTitle">Award Trophy</title>
                    <g fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 12h36v8a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8v-8z" />
                        <path d="M22 20v6a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-6" />
                        <rect x="28" y="36" width="8" height="6" rx="1" fill="#ffffff"/>
                        <path d="M20 46h24v2a2 2 0 0 1-2 2H22a2 2 0 0 1-2-2v-2z" />
                    </g>
                </svg>
                <p>Digital Digest</p>
            </div>
            <div className="award">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="ribbonTitle">
                <title id="ribbonTitle">Award Ribbon 2025</title>
                <g fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round">
                    <circle cx="32" cy="22" r="14" />
                    <path d="M20 34l-6 18h10l4-12z" />
                    <path d="M44 34l6 18H40l-4-12z" />
                </g>
                <text x="32" y="25.2" fill="#ffffff" font-size="7" font-family="Helvetica, Arial, sans-serif" text-anchor="middle" dominant-baseline="middle">2025</text>
                </svg>
                <p>Best Eats 2025</p>
            </div>
            <div className="award">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="laurelTitle">
                <title id="laurelTitle">Laurel Award</title>

                <g fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M32 44c-6-6-10-12-12-18-2.5 1.8-6 4.5-8 8 4 1.5 8.5 3.5 12 7 2 2 4 4 8 3z"/>
                    <path d="M32 44c6-6 10-12 12-18 2.5 1.8 6 4.5 8 8-4 1.5-8.5 3.5-12 7-2 2-4 4-8 3z"/>
                    <circle cx="32" cy="20" r="6" fill="#ffffff"/>
                </g>
                </svg>
                <p>Fred's Favorite Spots </p>
            </div>
            <div className="award">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="sealTitle">
                <title id="sealTitle">Star Seal Award</title>
                <circle cx="32" cy="32" r="20" fill="none" stroke="#ffffff" stroke-width="1.8"/>
                <polygon points="32,18 35,28 46,28 37,34 40,45 32,38 24,45 27,34 18,28 29,28" fill="#ffffff"/>
                </svg>

                <p>Star Cuisine</p>
            </div>


        </div>
    )
}