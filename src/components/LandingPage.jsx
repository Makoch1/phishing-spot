export default function LandingPage() {
    return (
        <div className="full-page dead-center">
            <div className="landing-page flex-col">
                <div className="flex-row">
                    <p className="large-title">Phishing Spot</p>
                </div>
                <div className="flex-row">
                    <a href="#What is Phishing?" className="button-to-right">BASICS</a>
                    <a href="#Phishing detection approaches" className="button-to-right">ADVANCED GUIDE</a>
                    <a href="#Link Checking" className="button-to-right">LINK CHECK</a>
                </div>
            </div>
        </div>
    )
}