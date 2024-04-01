/* eslint-disable react/prop-types */
import { useState } from "react"

function Challenge(props) {
    const [ hidden, setHidden ] = useState(true)
    const title = props.title

    return (
        <div id={props.id} className="challenge">
            <div className="challenge-top">
                <p className="challenge-title">{title}</p>
                <button className="challenge-btn" onClick={() => setHidden(!hidden)}>[Click to expand]</button>
            </div>
            <div className={`challenge-info ${hidden ? 'hidden': ''}`}>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default function Challenges() {
    return (
        <div id="Challenges" className="container">
            <p className="topic-title">Challenges</p>
            <p className="">Some phishing challenges you may face from bad-actors include:</p>

            <Challenge id="Zero-day Attacks" title="Zero-day Attacks">
                Zero-day attacks refer to new and previously unseen phishing tactics that exploit vulnerabilities 
                before they are discovered and mitigated. Traditional detection methods may struggle to identify 
                zero-day attacks, leading to increased risk of successful phishing attempts. Developing proactive 
                detection techniques that can quickly adapt to emerging threats, such as anomaly detection and behavior-based analysis.
            </Challenge>

            <Challenge id="Evasion Techniques" title="Evasion Techniques">
                Attackers continuously develop evasion techniques to bypass detection systems, such as obfuscating phishing URLs 
                or using polymorphic malware. Detection systems may fail to recognize sophisticated phishing attempts, leading to an 
                increased likelihood of successful attacks. Enhancing detection capabilities with advanced features like natural language 
                processing <i>(NLP)</i>, image analysis, and network traffic analysis to identify evasive tactics.
            </Challenge>

            <Challenge id="Adversarial Attacks" title="Adversarial Attacks">
                Attackers actively attempt to evade detection by crafting phishing emails specifically designed to fool detection systems. 
                Traditional detection methods may be susceptible to adversarial attacks, leading to decreased effectiveness. Developing 
                robust detection models that can withstand adversarial attacks through techniques such as adversarial training, model 
                assembling, and feature diversification.
            </Challenge>

            <Challenge id="Data Quality & Availability" title="Data Quality & Availability">
                The quality and availability of labeled datasets for training phishing detection models may be limited, leading to 
                suboptimal performance. Detection systems may suffer from overfitting, bias, or inadequate generalization due to data 
                scarcity or imbalance. Curating diverse and representative datasets, leveraging transfer learning from related domains, 
                and employing data augmentation techniques to enhance model performance.
            </Challenge>

            <Challenge id="User Behaviour Variablity" title="User Behavior Variability">
                Users&#34; behaviors and interactions with emails vary widely, making it challenging to distinguish between legitimate 
                and phishing emails. Detection systems may struggle to accurately classify emails based on user behavior alone, leading 
                to false positives or negatives. Integrating user behavior analytics, user feedback mechanisms, and user education 
                initiatives to enhance the effectiveness of detection systems and reduce human error.
            </Challenge>

            
        </div>
    )
}