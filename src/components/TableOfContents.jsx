/* eslint-disable react/prop-types */


const contents = {
    "What is Phishing?": [],
    "Common types of phishing": [],
    "Simple steps to avoid getting phished": [],
    "Phishing detection approaches": ["Rule-based detection", "Heuristic-based detection", "Machine learning-based detection"],
    "Evaluation Metrics": ["Accuracy", "Precision and Recall", "F1-Score", "Area Under the ROC Curve (AUC-ROC)"],
    "Dataset Considerations": ["Representation", "Size", "Labelling", "Diversity", "Privacy and Ethics", "Benchmarking"],
    "Challenges": ["Zero-day Attacks", "Evasion Techniques", "Adversarial Attacks", "Data Quality & Availability", "User Behaviour Variablity"],
    "Future Directions": [
        "Integration of Multiple Detection Approaches",
        "Real-Time Detection Systems",
        "Focus on User Education and Awareness",
        "Advanced Threat Intelligence Sharing",
        "Conscious Innovation and Research"
    ]
}

function Content({ title, subContents }) {

    return (
        <div className="flex-col content">
            <a className="main-title" href={`#${title}`}>{title}</a>
            <div className="flex-col sub-content">
                {
                    subContents.map(subTitle => <a href={`#${subTitle}`} className="sub-title" key={subTitle}>{subTitle}</a>)
                }
            </div>
        </div>
    )
}

export default function TableOfContents() {
    return (
        <div className="table-of-contents">
            <p className="table-header">TABLE OF CONTENTS</p>
            {
                Object.keys(contents).map(content => 
                    <Content key={content} title={content} subContents={contents[content]}/>
                )
            }
        </div>
    )
}