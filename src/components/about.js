import AboutImage from './icons/AboutImage.svg'
import AboutMap  from './images/AboutMap.png'
import reviewer from './images/reviewer.jpg'
import RateExample from './icons/rate.svg'
import quote from './icons/quote.svg'
import nextBtn from './icons/BtnNext.svg'
import prebBtn from './icons/BtnNext.svg'
import { useState } from 'react'



const exampleUsers = [
    {
      id: 1,
      name: "Albert fores",
      job: "Marketing Coordinator",
      text:"Their expertise in cybersecurity and their commitment to our security needs have given us peace of mind and confidence in our digital operations. We have experienced a significant reduction in security incidents and can trust that our sensitive data is protected"
    },
    {
      id: 2,
      name: "David Guetta",
      job: "Engineer",
      text:"Their cybersecurity services are top-notch! With their expertise, our digital assets are well-protected and secure. Highly recommended!"
    },
    {
      id: 3,
      name: "Mark Harrison",
      job: "IT specialist",
      text:"Impressed with their cybersecurity solutions! They've effectively minimized security incidents and provided us with peace of mind. A reliable choice for cyber defense."
    }
  ];



function About() {




      const [CurrentSlide, setCurrentSlide] = useState(0);
      
      const NextSlide = () => {
        if (CurrentSlide < exampleUsers.length - 1) {
          setCurrentSlide(CurrentSlide + 1);
        }
      };
      
      const BackSlide = () => {
        if (CurrentSlide > 0) {
          setCurrentSlide(CurrentSlide - 1);
        }
      };
      
 



    return(

        <section id='about' className="About">

                <div className='About_main'> 
                        <div className="About_main__text">


                            <h2>Empowering Your Digital Confidence with Cutting-Edge Security</h2>

                            <p>Elevating Your Digital Resilience, Strengthening Trust, and Empowering Your Online Ventures with State-of-the-Art Security Solutions: Unleashing Cutting-Edge Technologies to Safeguard Your Digital Confidence in an Evolving Cyber Landscape.</p>

                            <button>Get Started Now</button>


                        </div>
                
                </div>


                <div className="About_info__wrapper">


                    <div className="About_info__text">

                        <h2>What Is Cyber Security?</h2>

                        <p>Cybersecurity refers to the practice of protecting computers, servers, networks, mobile devices, and digital systems from unauthorized access, data breaches, cyber attacks, and other malicious activities.</p>


                    </div>

                    <div className="About_info_main">

                            <div className="About_info_main__item">
                                    <h3>Network Secutriy</h3>

                                    <p>This focuses on securing computer networks from unauthorized access, intrusions, and network-based attacks through technologies like firewalls, intrusion detection systems.</p>

                            </div>

                            <div className="About_info_main__item">
                                    <h3>Incident Response</h3>

                                    <p>Incident response plans outline how organizations detect, respond to, and recover from security incidents. It involves incident identification, containment, eradication.</p>

                            </div>



                            <div className="About_info_main__item">
                                    <h3>Endpoint Security</h3>

                                    <p>This focuses on securing individual devices such as computers, laptops, mobile devices, and IoT (Internet of Things) devices. Endpoint protection includes antivirus software, host intrusion prevention systems.</p>

                            </div>


                            <div className="About_info_main__item">
                                    <h3>Security Awareness and Training</h3>

                                    <p> Educating employees and users about potential cyber threats, best practices, and safe online behaviors is crucial. Security awareness programs help promote a security-conscious culture within organizations.</p>

                            </div>





                    </div>

                    <div className="About_info__achivment">
                        <img src={AboutImage}></img>

                        <div className='About_info__achivment_text'>

                            <h2>We Dedicate 20,000 Hours Annually to Combatting Virus Threats</h2>

                            <p>With deep expertise in virus detection, prevention, and mitigation, we employ cutting-edge technologies and proactive measures to stay one step ahead of emerging threats. We continuously monitor, analyze, and respond to the latest virus trends, ensuring that your systems remain resilient and your data remains secure.</p>

                            <div className='About_info__numbers'>
                                    <div className='About_info__numbers_item'>
                                            <h3>3k+</h3>
                                            <p>Cybersecurity Projects</p>

                                    </div>


                                    <div className='About_info__numbers_item'>
                                            <h3>54k</h3>
                                            <p>Clients Protection</p>

                                    </div>


                                    <div className='About_info__numbers_item'>
                                            <h3>500+</h3>
                                            <p>Expert Employees</p>

                                    </div>


                            </div>

                        </div>




                    </div>

                  



                </div>


                <div className='About_reviews'>
                        <h2>What Our Client Says About Us</h2>

                        <p>Client satisfaction is at the heart of everything we do. Don't just take our word for it – hear what our clients have to say about their experiences partnering with us.</p>

                    <div className='About_reviews__main'>
                        <img className='Map_image' src={AboutMap}/>

                        <div className='About_reviews__main__review'>

                              
                            <div className='About__review_quote'>


                            <div className='review_carousel__viewport'>
                            <div  style={{
                                      transform: `translateX(${-100 * (CurrentSlide)}%)`,
                            }} 
                            
                            className='review_carousel__wrapper'>

                            {exampleUsers.map((item)=>( 
                                            <div key={item.id} className='review'>
                                            <p>{item.text}</p>
                                             <div className='reviewer_profile'>
                                                    <img className='reviewer_photo' src={reviewer}/>
                                                            <div className='reviewer_info'> 
                                                                <h3 className='reviewer_name'>{item.name}</h3>
                                                        
                                                                <p className='reviewer_job'>{item.job}</p>

                                                                <span className='reviewer_rate'><img src={RateExample}></img></span>

                                                            </div>
                                                            </div>
                                                            </div>
                                                                       )) }


                                                            
                                            

                                                           





                                                </div>  
                                                </div>
                                    <img src={quote} className='qute_sign' />
                            </div>

                            <div className='review_buttons'>

                                   <span onClick={BackSlide} className='btn_back toggleButton'> <img src={prebBtn} /></span>


                                    <span onClick={NextSlide} className='btn_next toggleButton'><img src={nextBtn} /></span>

                                 

                            </div>

                        </div>


                        </div>


                </div>

        </section>
    )
}


export default About