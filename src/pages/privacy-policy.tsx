import 'modern-css-reset'
import React from 'react'
import {HeadFC, PageProps} from 'gatsby'

const PrivacyPolicy: React.FC<PageProps> = () => (
        <main>
            <h1>Privacy Policy for Jared Web Extension</h1>
            <p>Last updated: November 26, 2023</p>
            <article>
                <h2>Introduction</h2>
                <p>As an individual developer distributing "Jared" as open-source software under the MIT license, I
                    respect the privacy of the users ("user" or "you"). This Privacy Policy explains how I handle
                    information in relation to the Jared Web Extension (the "Extension"). Please read this privacy
                    policy carefully. If you do not agree with the terms of this privacy policy, please do not access
                    the Extension.</p>
                <h2>Collection of Your Information</h2>
                <p>The only information collected is that which is provided by the Chrome Web Store in its standard
                    operation. I do not collect any personal data, financial data, or other information from the users
                    of the Extension.</p>
                <h2>Use of Your Information</h2>
                <p>As the Extension currently does not collect any user data, there is no use of such data in any form.
                    Should this change in the future, this policy will be updated accordingly.</p>
                <h2>Disclosure of Your Information</h2>
                <p>Since no user data is collected, there is no disclosure of user information to any third parties.</p>
                <h2>Tracking Technologies</h2>
                <p>The Extension does not use cookies, web beacons, tracking pixels, or any other tracking
                    technologies.</p>
                <h2>Third-Party Websites</h2>
                <p>The Extension does not include or offer third-party products or services.</p>
                <h2>Security of Your Information</h2>
                <p>As no personal information is collected, there are no measures in place for data security pertaining
                    to personal information.</p>
                <h2>Policy for Children</h2>
                <p>The Extension does not knowingly collect information from or market to children under the age of
                    13.</p>
                <h2>Controls for Do-Not-Track Features</h2>
                <p>Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting
                    you can activate to signal your privacy preference not to have data about your online browsing
                    activities monitored and collected. No uniform technology standard for recognizing and implementing
                    DNT signals has been finalized. As such, the Extension does not currently respond to DNT browser
                    signals or any other mechanism that automatically communicates your choice not to be tracked
                    online.</p>
                <h2>Options Regarding Your Information</h2>
                <p>As the Extension does not collect or store any personal information, there are no options or actions
                    required regarding your information.</p>
                <h2>Changes to This Privacy Policy</h2>
                <p>I may update this privacy policy from time to time in order to reflect, for example, changes to the
                    Extension's practices or for other operational, legal, or regulatory reasons.</p>
                <h2>Contact Me</h2>
                <p>If you have questions or comments about this Privacy Policy, please feel free to contact me through
                    the Chrome Web Store developer contact link.</p>
            </article>
        </main>
    )

export const Head: HeadFC = () => <>
    <title>Privacy Policy for Jared Web Extension</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet"/>
</>

export default PrivacyPolicy
