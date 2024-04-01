export default function EvaluationMetrics() {
    return (
        <>
        <p id="Evaluation Metrics" className="topic-title">Evaluation Metrics</p>
        
        <div className="evaluation-metrics-container">
            <div id="Accuracy" className="eval-metric">
                <p className="eval-metric-title">Accuracy</p>
                <div className="eval-metric-info">
                    <p>
                        Accuracy measures the overall correctness of the phishing detection system by calculating the 
                        ratio of correctly classified emails <i>(both phishing and legitimate)</i> to the total number of emails.<br /><br />

                        This provides a simple and intuitive measure of overall system performance. Easy to interpret and understand.<br /><br />

                        But accuracy can be misleading when the dataset is imbalanced <i>(i.e., when the number of phishing emails differs significantly 
                        from legitimate emails)</i>. In scenarios where false positives and false negatives have different costs <i>(e.g., false negatives 
                        are more costly)</i>, accuracy alone may not provide a complete picture of system effectiveness.
                    </p>
                </div>
            </div>

            <div id="Precision and Recall" className="eval-metric">
                <p className="eval-metric-title">Precision and Recall</p>
                <div className="eval-metric-info">
                    <p>
                        Precision measures the proportion of true phishing emails among all emails classified as phishing. 
                        It focuses on the correctness of positive predictions. Recall <i>(also known as sensitivity)</i> measures 
                        the proportion of true phishing emails that were correctly identified by the system. It focuses 
                        on the system&#34;s ability to identify all positive instances.<br /><br />

                        They provide insights into the trade-off between false positives and false negatives. 
                        Useful for understanding the system&#34;s performance in terms of identifying phishing emails accurately.<br /><br />

                        Precision and recall are often inversely related, which means improving one may degrade the other. 
                        They do not account for true negatives <i>(legitimate emails correctly classified as such)</i>, which may be important in certain contexts.
                    </p>
                </div>
            </div>

            <div id="F1-Score" className="eval-metric">
                <p className="eval-metric-title">F1-Score</p>
                <div className="eval-metric-info">
                    <p>
                        The F1-score is the harmonic mean of precision and recall. It balances the trade-off between precision and recall, 
                        providing a single metric that considers both false positives and false negatives.<br /><br />

                        This provides a single value that captures both precision and recall, offering a comprehensive evaluation of the 
                        system&#34;s performance. Useful for comparing different phishing detection systems and algorithms.<br /><br />

                        Take note that the F1-score does not consider the true negative rate, which may be important in certain applications. 
                        Like precision and recall, F1-score does not provide information about the costs associated with false positives and false negatives.
                    </p>
                </div>
            </div>

            <div id="Area Under the ROC Curve (AUC-ROC)" className="eval-metric">
                <p className="eval-metric-title">Area Under the ROC Curve (AUC-ROC)</p>
                <div className="eval-metric-info">
                    <p>
                        The ROC <i>(Receiver Operating Characteristic)</i> curve is a graphical representation of the trade-off between true 
                        positive rate (<b>TPR</b>) and false positive rate (<b>FPR</b>) at various threshold settings. AUC-ROC measures the 
                        area under the ROC curve, providing a single scalar value that represents the overall performance of the system across 
                        different threshold settings.<br /><br />

                        AUC-ROC is threshold-independent, meaning it evaluates the model&#34;s performance across all possible threshold settings. 
                        Useful for assessing the system&#34;s ability to discriminate between phishing and legitimate emails across different operating points.<br /><br />

                        AUC-ROC does not provide insights into the specific performance at a particular operating point, unlike precision, 
                        recall, and F1-score. It may not be suitable for imbalanced datasets, as it treats false positives and false negatives equally.
                    </p>
                </div>
            </div>

            <div className="considerations-container">
                <p className="considerations-header">Some considerations:</p>

                <div className="consideration">
                    <p className="consideration-title">Imbalanced Datasets</p>
                    <p className="consideration-info">
                        When evaluating phishing detection systems, it&#34;s important to consider the balance between phishing and legitimate 
                        emails in the dataset. Metrics like precision, recall, and F1-score are especially valuable in imbalanced scenarios.
                    </p>
                </div>

                <div className="consideration">
                    <p className="consideration-title">Cost Sensitivity</p>
                    <p className="consideration-info">
                        Depending on the application, the costs associated with false positives and false negatives may vary. 
                        Evaluating system performance using metrics that account for these costs can provide a more meaningful assessment.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}