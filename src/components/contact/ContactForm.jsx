import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mb0fhhm', 'template_p50977t', form.current, 'o49ebjgNF0QsumxD5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <section className='contact-form-container container'>
            <div className='row'>


                <form ref={form} onSubmit={sendEmail} className='contact-form col-3 offset-5'>
                    <div className='contact-form-text'>
                        <h3 className='contact-form-title'>Tenés alguna consulta?</h3>
                        <p className='contact-form-subtitle'>Envianos un mensaje con tus consultas, sugerencias o comentarios y te responderemos a la brevedad.</p>
                    </div>
                    <input type="text" name="user_name" placeholder='Nombre' className='contact-form-input' />
                    <input type="email" name="user_email" placeholder='Correo Electrónico' className='contact-form-input' />
                    <textarea name="message" className='contact-form-textarea' placeholder='Dejanos tu mensaje acá...' />
                    <input type="submit" value="Enviar" className='contact-button' />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;




