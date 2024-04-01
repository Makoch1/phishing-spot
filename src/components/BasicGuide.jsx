export default function BasicGuide() {
    return (
        <>
        <div className="container" id="What is Phishing?">
            <p className="topic-title">What is phishing?</p>
            <p className="topic-info">Phishing is introduced as a form of cyber-attack where attackers attempt to trick individuals into revealing sensitive information through deceptive means. The importance of robust phishing detection mechanisms is emphasized due to the evolving nature of phishing attacks and their potential impact on individuals and organizations.</p>
        </div>
        <div className="container">
            <p className="topic-title" id="Common types of phishing">Common types of phishing</p>
            <p><i>Common types of phishing include (but are not limited to): </i></p>
            <div className="phishing-types">
                <div className="phishing-type">
                    <p className="phishing-type-title">Email phishing</p>
                    <p className="phishing-type-info">
                        A type of phishing where a bad-actor may impersonate legitimate entities <i>(i.e. banks, other establishments)</i> 
                        to trick unsuspecting users into divulging personal information <i>(i.e. banking information etc.)</i>.
                    </p>
                </div>
                <div className="phishing-type">
                    <p className="phishing-type-title">Spear phishing</p>
                    <p className="phishing-type-info">
                        Targeted phishing attacks customized for specific individuals or organizations, often leveraging personal information.
                    </p>
                </div>
                <div className="phishing-type">
                    <p className="phishing-type-title">Pharming</p>
                    <p className="phishing-type-info">
                        A type of phishing attack where a victim is redirected to a fake website. Unsuspecting users, mistakenly
                        believing they are on the correct website, log in to the fake website, giving the attackers their
                        log in information.
                    </p>
                </div>
            </div>

            <p id="Simple steps to avoid getting phished" className="topic-title">Simple steps to avoid getting phished</p>
            <div className="simple-phishing-prevention">
                <p className="simple-prevention-title">
                    Set software update of your computer and phone to automatic
                </p>
                <p className="simple-prevention-info">
                    This is mostly found in the lowest section of the settings in your device. 
                    Doing this will help keep your device up-to-date on how to protect you from new potential security threats.
                </p>

                <p className="simple-prevention-title">
                    Use multi-factor authentication on important accounts
                </p>
                <p className="simple-prevention-info">
                    Examples of these are PINs, security questions, one-time verification passcodes you receive via text/email, 
                    or even biometrics, such as face scanner or fingerprint scanner. Enabling these will give you extra layers of 
                    protection to accounts that you deem important or personal.
                </p>

                <p className="simple-prevention-title">
                    Back up the data in your computer and phone
                </p>
                <p className="simple-prevention-info">
                    Two common ways to do these are by copying or moving important files into a hard drive <i>(i.e. USB aka thumbdrive)</i> 
                    or uploading those files into a cloud storage <i>(e.g. Google Drive, OneDrive, iCloud, or Dropbox)</i>. 
                    This will provide you another copy of files that you do not want to afford losing either due to phishing, 
                    hacks, or even by accident of human error.
                </p>
            </div>
        </div>
        </>
    )
}