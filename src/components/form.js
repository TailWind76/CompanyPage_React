

function Form() {
    

    return(

        <section id="contact" className="Form">

            <h2>Send us a Message</h2>

            <p>Sending us a message is the first step towards enhancing your cybersecurity and protecting your digital assets.we value open communication and are here to listen to your concerns, answer your questions, and provide the assistance you need.</p>

            <form>

                    <div className="form_contact__info">
                    <input type="text" placeholder="Name" className="Form_name"></input>
                    <input type="text" placeholder="Number" className="Form_number"></input>
                    <input type="email" placeholder="Email" className="Form_email"></input>
                    </div>
                    <div className="form_contact__message">
                    <textarea type="message" placeholder="Message" className="Form_message"></textarea>

                    <button type="submit"> Submit Now </button>
                    </div>

                 



            </form>






        </section>

    )
}

export default Form