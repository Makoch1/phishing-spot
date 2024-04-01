export default function FutureDirections() {
    return (
        <div className="container">
            <p className="topic-title">Future Directions</p>
            <p>
                <i>As cybercriminals continue to innovate new tactics to decieve us, the need for progress in the field of phiishing prevention grows as well.
                As such we can look forward to better phishing prevention techniques to be developed which may include the following:</i>
            </p>
            <ul className="future-directions-links">
                <li>
                    <a href="#Integration of Multiple Detection Approaches">Integration of Multiple Detection Approaches</a>
                </li>
                <li>
                    <a href="#Real-Time Detection Systems">Real-Time Detection Systems</a>
                </li>
                <li>
                    <a href="#Focus on User Education and Awareness">Focus on User Education and Awareness</a>
                </li>
                <li>
                    <a href="#Advanced Threat Intelligence Sharing">Advanced Threat Intelligence Sharing</a>
                </li>
                <li>
                    <a href="#Continuous Innovation and Research">Continuous Innovation and Research</a>
                </li>
            </ul>

            <div id="Future Directions" className="future-directions">
                <div id="Integration of Multiple Detection Approaches" className="future-direction">
                    <p className="future-title">Integration of Multiple Detection Approaches</p>
                    <p className="future-info">
                        Combining rule-based, heuristic-based, and machine learning-based detection approaches to leverage 
                        their respective strengths and mitigate their weaknesses. This could effectively enhance detection accuracy, 
                        robustness, and adaptability to diverse phishing tactics and attack vectors. 
                    </p>
                </div>
                <div id="Real-Time Detection Systemse" className="future-direction">
                    <p className="future-title">Real-Time Detection Systems</p>
                    <p className="future-info">
                        Developing real-time phishing detection systems capable of identifying and mitigating phishing threats as they emerge. 
                        This could minimize response time to phishing attacks, reduces potential damage, and enhances overall cybersecurity posture. 
                    </p>
                </div>
                <div id="Focus on User Education and Awareness" className="future-direction">
                    <p className="future-title">Focus on User Education and Awareness</p>
                    <p className="future-info">
                        Investing time on user education programs to increase awareness of phishing threats such as better email hygiene practices, 
                        and empower users to recognize and report suspicious emails. This will reduce the likelihood of successful phishing attacks, 
                        mitigates the impact of human error, and strengthens the human firewall against cyber threats.
                    </p>
                </div>
                <div id="Advanced Threat Intelligence Sharing" className="future-direction">
                    <p className="future-title">Advanced Threat Intelligence Sharing</p>
                    <p className="future-info">
                        Establishing collaborative platforms for sharing threat intelligence and information sharing among organizations, 
                        security researchers, and law enforcement agencies. This may facilitate proactive threat detection and response, 
                        enhances situational awareness, and strengthens collective defense against phishing and other cyber threats.
                    </p>
                </div>
                <div id="Continuous Innovation and Research" className="future-direction">
                    <p className="future-title">Continuous Innovation and Research</p>
                    <p className="future-info">
                        Encouraging ongoing research and innovation in phishing detection techniques, tools, and methodologies. 
                        This could drive advancements in cybersecurity capabilities, fosters resilience against evolving threats, 
                        and ensures the effectiveness of phishing detection measures in the long term. 	
                    </p>
                </div>
            </div>

        </div>
    )
}