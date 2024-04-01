export default function DatasetConsiderations() {
    return (
        <>
            <p id="Dataset Considerations" className="topic-title">Dataset Considerations</p>
            <div className="dataset-considerations">
                <div id="Representation" className="consideration">
                    <p className="consideration-title">Representation</p>
                    <div className="consideration-info">
                        Datasets should accurately represent the diversity of phishing emails encountered in real-world scenarios. 
                        They should include various types of phishing attacks, such as email phishing, spear phishing, and pharming, 
                        as well as different techniques and strategies employed by attackers.<br /><br />

                        Obtaining diverse and representative datasets can be challenging due to the dynamic nature of phishing attacks. 
                        Publicly available datasets may not always reflect the latest trends and tactics used by attackers.
                    </div>
                </div>

                <div id="Size" className="consideration">
                    <p className="consideration-title">Size</p>
                    <div className="consideration-info">
                        The size of the dataset can impact the performance and generalization ability of phishing detection models. 
                        Larger datasets provide more examples for training, leading to potentially more robust and accurate models.<br /><br />

                        Acquiring large-scale labeled datasets for phishing detection can be resource-intensive and time-consuming. 
                        Imbalanced class distributions <i>(i.e., significantly more legitimate emails than phishing emails)</i> may 
                        necessitate techniques such as oversampling or data augmentation to address class imbalance.
                    </div>
                </div>

                <div id="Labelling" className="consideration">
                    <p className="consideration-title">Labelling</p>
                    <div className="consideration-info">
                        Datasets must be accurately labeled to distinguish between phishing and legitimate emails. 
                        Ground truth labels are crucial for training supervised machine learning models and evaluating system performance.<br /><br />

                        Labeling large volumes of emails manually is labor-intensive and prone to human error. Ambiguity and subjectivity in 
                        labeling certain emails, especially those exhibiting characteristics of both phishing and legitimate emails, can 
                        introduce noise and uncertainty into the dataset.
                    </div>
                </div>

                <div id="Diversity" className="consideration">
                    <p className="consideration-title">Diversity</p>
                    <div className="consideration-info">
                        Datasets should capture a wide range of phishing tactics, including variations in email content, sender information, 
                        URL structures, and social engineering techniques. Diversity enables detection models to generalize well to unseen 
                        phishing attacks and variations.<br /><br />

                        Phishing attacks continually evolve, making it challenging to anticipate and capture all possible variations in a dataset. 
                        Maintaining a diverse dataset requires regular updates and additions to incorporate new phishing trends and tactics.
                    </div>
                </div>

                <div id="Privacy and Ethics" className="consideration">
                    <p className="consideration-title">Privacy and Ethics</p>
                    <div className="consideration-info">
                        Respect for user privacy and ethical considerations are paramount when collecting and using email datasets for research purposes. 
                        Safeguards should be in place to ensure that sensitive information contained in emails is handled appropriately and securely.<br /><br />

                        Anonymizing email data while preserving its utility for research purposes can be challenging. Ensuring compliance with privacy 
                        regulations and obtaining appropriate consent from users for the use of their email data is essential.
                    </div>
                </div>

                <div id="Benchmarking" className="consideration">
                    <p className="consideration-title">Benchmarking</p>
                    <div className="consideration-info">
                        Datasets serve as benchmarks for evaluating the performance of phishing detection systems and comparing different algorithms 
                        and approaches. Standardized datasets enable fair comparisons and reproducibility of research results across studies.<br /><br />

                        Lack of consensus on standardized benchmark datasets and evaluation protocols can hinder the comparability of results across studies. 
                        Overreliance on a small set of benchmark datasets may limit the generalizability of findings to real-world scenarios.
                    </div>
                </div>
            </div>
        </>
    )
}