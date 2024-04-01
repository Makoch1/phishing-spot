function ApproachAnchor({ approach, description }) {
    return (
        <a href={`#${approach}`}>
            <div className="approach-anchor">
                <p className="approach-name">{approach}</p>
                <p className="approach-description">{description}</p>
            </div>
        </a>
    )
}

function RuleBasedDetection() {
    return (
        <div className="detection-approach container" id="Rule-based detection">
            <p className="topic-head">Rule-based detection</p>
            <p className="overview">
                Rule-based detection relies on predefined rules or conditions to identify phishing emails. 
                These rules are often based on specific patterns, characteristics, or attributes commonly found in phishing emails. 
                When an email matches these predefined rules, it is flagged as suspicious and potentially phishing.
            </p>

            <p className="topic-head small-head">Components:</p>
            <div className="components-tab">
                <div className="component">
                    <div className="component-title">
                        <p className="com-p">Predefined Rules</p>
                    </div>
                    <div className="component-info">
                        <p>
                            These rules are created based on known patterns or characteristics of phishing emails. 
                            For example, rules may check for certain keywords in the email subject or body, suspicious URLs, 
                            or mismatched sender information.
                        </p>
                    </div>
                    
                    <div className="component-title">
                        <p className="com-p">Rule Matching Engine</p>
                    </div>
                    <div className="component-info">
                        <p>
                            This component is responsible for applying the predefined rules to incoming emails and determining whether 
                            they meet the criteria for being flagged as phishing.
                        </p>
                    </div>
                </div>
            </div>

            <div className="advan-and-disadvan">
                <div className="half-container adv">
                    <p className="half-container-header adv">ADVANTAGES</p>
                    <ul>
                        <li>
                            <div>
                                <p className="title">Simplicity</p>
                                <p className="info">Rule-based systems are relatively simple to implement and understand since they rely on explicit rules.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Transparency</p>
                                <p className="info">Since the rules are predefined, it&apos;s easier to understand why an email was flagged as phishing.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Low Computational Overhead</p>
                                <p className="info">
                                    Rule-based systems typically have low computational overhead since they do not require extensive training or complex algorithms.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="half-container disadv">
                    <p className="half-container-header disadv">DISADVANTAGES</p>
                    <ul>
                        <li>
                            <div>
                                <p className="title">Limited Adaptability</p>
                                <p className="info">Rule-based systems may struggle to detect new or evolving phishing tactics that do not match the predefined rules.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">High False Positives</p>
                                <p className="info">
                                    Depending on the specificity of the rules, rule-based systems may generate false positives, flagging legitimate emails as phishing.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Maintenance Overhead</p>
                                <p className="info">
                                    Constant updates and maintenance are required to keep the rule set up-to-date with emerging phishing techniques.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="example-tab">
                <p className="example-header">Example:</p>
                <p className="example-info">
                    A rule-based system might have a rule that checks if the email contains certain keywords commonly found in phishing emails 
                    (e.g., &quot;urgent action required,&quot; &quot;verify your account&quot;). If these keywords are present, the email is flagged as suspicious.
                </p>
            </div>
        </div>
    )
}

function HeuristicBasedDetection() {
    return (
        <div className="detection-approach container" id="Heuristic-based detection">
            <p className="topic-head">Heuristic-based detection</p>
            <p className="overview">
                Heuristic-based detection relies on analyzing the characteristics and behavior of emails to identify phishing attempts. 
                Unlike rule-based systems, heuristic-based systems employ a more dynamic approach by analyzing various attributes of 
                emails to determine their likelihood of being phished.
            </p>

            <p className="topic-head small-head">Components:</p>
            <div className="components-tab">
                <div className="component">
                    <div className="component-title">
                        <p className="com-p">Heuristics</p>
                    </div>
                    <div className="component-info">
                        <p>
                            These are general guidelines or principles used to evaluate the legitimacy of emails. Heuristics can 
                            include factors such as the sender&quot;s reputation, email structure, language used, and embedded URLs.
                        </p>
                    </div>
                    
                    <div className="component-title">
                        <p className="com-p">Heuristic Engine</p>
                    </div>
                    <div className="component-info">
                        <p>
                            This component applies the heuristics to incoming emails and assesses their likelihood of being 
                            phishing based on the observed characteristics.
                        </p>
                    </div>
                </div>
            </div>

            <div className="advan-and-disadvan">
                <div className="half-container adv">
                    <p className="half-container-header adv">ADVANTAGES</p>
                    <ul>
                        <li>
                            <div>
                                <p className="title">Flexibility</p>
                                <p className="info">
                                    Heuristic-based systems can adapt to new phishing tactics and variations by considering a broader range of email attributes.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Reduced False Positives</p>
                                <p className="info">
                                    By considering multiple attributes, heuristic-based systems can reduce false positives compared to strict rule-based systems.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Detection of Polymorphic Threats</p>
                                <p className="info">
                                    Heuristic-based systems can detect polymorphic threats, where attackers frequently change tactics to evade detection.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="half-container disadv">
                    <p className="half-container-header disadv">DISADVANTAGES</p>
                    <ul>
                        <li>
                            <div>
                                <p className="title">False Negatives</p>
                                <p className="info">Heuristic-based systems may miss sophisticated phishing attempts that effectively mimic legitimate emails.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Complexity</p>
                                <p className="info">
                                    Developing effective heuristics and implementing them into a detection system can be complex and require expertise.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Performance Overhead</p>
                                <p className="info">
                                    Analyzing multiple email attributes can incur higher computational costs compared to rule-based systems.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="example-tab">
                <p className="example-header">Example:</p>
                <p className="example-info">
                    A heuristic-based system might analyze an email&quot;s sender reputation, email header information, and URL 
                    structure to determine if it exhibits suspicious characteristics commonly associated with phishing.
                </p>
            </div>
        </div>
    )
}

function MachineLearningBasedDetection() {
    return (
        <div className="detection-approach container" id="Machine learning-based detection">
            <p className="topic-head">Machine Learning-Based Detection</p>
            <p className="overview">
                Machine learning-based detection employs algorithms that automatically learn patterns and 
                characteristics of phishing emails from labeled training data. These algorithms analyze 
                various features extracted from emails to classify them as phishing or legitimate.
            </p>

            <p className="topic-head small-head">Components:</p>
            <div className="components-tab">
                <div className="component">
                    <div className="component-title">
                        <p className="com-p">Feature Extraction</p>
                    </div>
                    <div className="component-info">
                        <p>
                            Relevant features such as email content, sender information, header details, and URL attributes are extracted from emails.
                        </p>
                    </div>
                    
                    <div className="component-title">
                        <p className="com-p">Machine Learning Model</p>
                    </div>
                    <div className="component-info">
                        <p>
                            This component consists of a machine learning algorithm trained on labeled datasets. 
                            Common algorithms include decision trees, support vector machines (SVM), random forests, and neural networks.
                        </p>
                    </div>

                    <div className="component-title">
                        <p className="com-p">Training Data</p>
                    </div>
                    <div className="component-info">
                        <p>
                            Labeled datasets containing examples of phishing and legitimate emails are used to train the machine learning model.
                        </p>
                    </div>
                </div>
            </div>

            <div className="advan-and-disadvan">
                <div className="half-container adv">
                    <p className="half-container-header adv">ADVANTAGES</p>
                    <ul>
                        <li>
                            <div>
                                <p className="title">Adaptability</p>
                                <p className="info">
                                    Machine learning models can adapt to new phishing tactics and variations by learning from new data.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">High Accuracy</p>
                                <p className="info">
                                    With sufficient training data and appropriate feature selection, machine learning-based systems can achieve high detection accuracy.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Automation</p>
                                <p className="info">
                                    Once trained, machine learning models can automate the detection process, reducing the need for manual intervention.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="half-container disadv">
                    <p className="half-container-header disadv">DISADVANTAGES</p>
                    <ul>
                        <li>
                            <div>
                                <p className="title">Data Dependency</p>
                                <p className="info">
                                    Machine learning models rely heavily on the quality and representativeness of the training data. 
                                    Biased or incomplete datasets can affect model performance.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Complexity</p>
                                <p className="info">
                                    Developing and training effective machine learning models requires expertise in data preprocessing, 
                                    feature engineering, and model selection.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className="title">Resource Intensive</p>
                                <p className="info">
                                    Training and deploying machine learning models can be resource-intensive in terms of computational power and storage.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="example-tab">
                <p className="example-header">Example:</p>
                <p className="example-info">
                    A machine learning-based system might use a neural network trained on a dataset containing features such as email content, 
                    sender reputation, and URL characteristics to classify emails as phishing or legitimate based on learned patterns.
                </p>
            </div>
        </div>
    )
}

export default function PhishingDetectionApproaches() {
    return(
        <>
        <div className="phishing-detection-approaches container" id="Phishing detection approaches">
            <p className="topic-title">Phishing Detection Approaches</p>
            <p className="">Phishing detection methods are categorized into three main approaches:</p>
            <ApproachAnchor approach="Rule-based detection" description="relies on predefined rules and patterns to identify phishing emails." />
            <ApproachAnchor approach="Heuristic-based detection" description="uses heuristic analysis to detect suspicious behaviours in emails." />
            <ApproachAnchor 
                approach="Machine learning-based detection"
                description="utilizes algorithms to automatically learn and classify emails as phishing or legitimate based on features extracted from the data."
            />
        </div>

        <RuleBasedDetection />
        <HeuristicBasedDetection />
        <MachineLearningBasedDetection />
        </>
    )
}