import solutionSvg1 from './icons/SolutionIcon1.svg' 
import solutionSvg2 from './icons/SolutionIcon2.svg' 
import solutionSvg3 from './icons/SolutionIcon3.svg' 
import solutionSvg4 from './icons/SolutionIcon4.svg' 
import solutionSvg5 from './icons/SolutionIcon5.svg' 
import solutionSvg6 from './icons/SolutionIcon6.svg' 
import AdvantagesImage from './images/advantagesImage.png'
import marker from './icons/complete.svg'

function Solutions() {
    


    return(

        <section className="Solutions">


            <h2>We Provide Expert Security Solutions</h2>

            <p>Safeguarding Your Digital Assets with Comprehensive Expertise, Innovative Strategies, and Unparalleled Security Solutions Tailored to Your Unique Needs</p>



            <div className="Solutions__main">

                <div className="Solutions__main_item">

                    <img src={solutionSvg1}/>


                    <h3>Application Security</h3>


                    <p>Mitigating Application Risks, Strengthening Digital Fortifications, and Ensuring Robust Protection to Safeguard Your Critical Systems and User Data in the Dynamic Landscape of Application Security</p>




                </div>



                <div className="Solutions__main_item">

                    <img src={solutionSvg2}/>


                    <h3>Cloud Security</h3>


                    <p>Enabling Secure Cloud Environments, Fortifying Data Privacy, and Safeguarding Your Business Operations in the Expansive Realm of Cloud Security to Inspire Confidence in the Cloud-First Era.</p>




                </div>



                <div className="Solutions__main_item">

                    <img src={solutionSvg3}/>


                    <h3>Threat Hunter</h3>


                    <p>Unleashing the Power of Proactive Defense, Advanced Analytics, and Cutting-Edge Techniques to Illuminate the Shadows, Identify Evolving Threats, and Empower Your Organization as an Elite Threat Hunter.</p>




                </div>
                <div className="Solutions__main_item">

                    <img src={solutionSvg4}/>


                    <h3>System Protection</h3>


                    <p>Building Robust Digital Fortresses, Strengthening Resilience, and Safeguarding the Heartbeat of Your Operations: Our Comprehensive System Protection Solutions for Unwavering Confidence.</p>




                </div>

                <div className="Solutions__main_item">

                    <img src={solutionSvg5}/>


                    <h3>Data Recovery</h3>


                    <p>Restoring Lost Possibilities, Retrieving Critical Insights, and Rebuilding Digital Foundations: Our Expert Data Recovery Services, Delivering Reliable Solutions to Safeguard Your Business Continuity.</p>




                </div>

                <div className="Solutions__main_item">

                    <img src={solutionSvg6}/>


                    <h3>Server Recovery</h3>


                    <p>Reviving Mission-Critical Operations, Navigating the Path to Resilience, and Restoring Server Infrastructures: Our Dedicated Server Recovery Solutions, Empowering Businesses.</p>




                </div>


                

                


            </div>


            <div className='Solutions__advantages'>

                    <img src={AdvantagesImage}/>

                    
                    <div className='Solutions__advantages_text'>

                        <h3>Securing the Future by Protecting Your Digital Present</h3>

                        <p>Championing Digital Resilience, Fostering Trust, and Spearheading Innovation: Our Commitment to Securing the Future by Safeguarding Your Digital Present, Ensuring a Thriving and Secure Cyber Landscape for Generations to Come.</p>

                        <div className='Solutions__advantages_markers'>

                            <div className='Solutions__advantages_marker'>  <img src={marker}/>  <p>Talent Advisory Team</p>  </div>
                            <div className='Solutions__advantages_marker'>  <img src={marker}/>  <p>Creative Solutions</p>  </div>
                            <div className='Solutions__advantages_marker'>  <img src={marker}/>  <p>High-Quality Results</p>  </div>
                            <div className='Solutions__advantages_marker'>  <img src={marker}/>  <p>100% Security System</p>  </div>
                            

                            <button>Contact now</button>

                        </div>




                    </div>



            </div>
        </section>
    )
}

export default Solutions