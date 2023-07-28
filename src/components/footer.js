import phone from './icons/phone.svg'
import contacs from './icons/contacts.svg'
import email from './icons/email.svg'

function Footer() {


    return(

        <footer>

            <div className="About_company">
                <h2>TechSecure</h2>
                <p>Championing Digital Resilience, Fostering Trust, and Spearheading Innovation: Our Commitment to Securing the Future by Safeguarding Your Digital Present</p>
            </div>

            <ul className="About_links">

                    <h2>About</h2>
                    <li>Service</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact us</li>

            </ul>

            <div className="Contact_info">

                    <h2>Contact info</h2>

                    <div className="Contact_info__item">
                            <img src={phone}></img>

                            <p>+1 123-456-0606</p>

                    </div>

                    <div className="Contact_info__item">
                            <img src={email}></img>

                            <p>info@techsecureexample.com</p>

                    </div>


                    <div className="Contact_info__item">
                            <img src={contacs}></img>

                            <p>120 King St, Charleston SC29401, USA</p>

                    </div>
                
            </div>

            <div className="Newsletter">

                <h2>Sign up for Newsletter</h2>

                <p>Stay informed and be the first to know about the latest trends, insights, and updates.</p>

                <form>
                    
                     <input placeholder='Enter Email' /> 

                     <button> Subscribe </button>
                     
                     </form>
            </div>






        </footer>
    )
    

    
}

export default Footer