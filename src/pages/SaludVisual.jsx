import React from 'react';
import Logo from '../assets/img/logo-big.png'
import './SaludVisual.css'
import SaludVisualImg from '../assets/img/salud-visual-img.png'
import underline from '../assets/img/underline.png'

const SaludVisual = () => {
    return (
        <div className="salud-visual">
            <div className="body">
                <div className="main">

                    <img className="underline-icon" alt="" src={underline} />
                    <div className="salud-visual-section">
                        <b className="salud-visual-title">SALUD VISUAL</b>
                    </div>

                    <img className="logo-icon" alt="" src={Logo} />
                </div>

                <div className="salud-visual-text-container">
                    <p className="salud-visual-p">
                        La salud visual es crucial para la calidad de vida, la seguridad y
                        el bienestar emocional. Exámenes regulares de la vista y hábitos
                        saludables son clave para mantener una visión óptima.
                    </p>

                    <img className="salud-visual-img" alt="" src={SaludVisualImg} />

                    <p className="salud-visual-section-title">
                        ¿SABÉS CUÁLES SON LOS PROBLEMAS MÁS FRECUENTES?
                    </p>
                    
                    <p className='salud-visual-subtitle'>MIOPÍA</p>

                    <p className="salud-visual-p">
                        <span>
                            <span>
                                La miopía implica mala visión a distancia debido a que los rayos
                                de luz se enfocan delante de la retina, y se corrige con lentes
                                divergentes en gafas o lentillas. El grado de miopía puede
                                aumentar si la longitud ocular del ojo crece, y no se puede
                                compensar sin corrección óptica.
                            </span>
                        </span>
                    </p>
                    
                    <p className='salud-visual-subtitle'>HIPERMETROPÍA</p>

                    <p className="salud-visual-p">
                        La hipermetropía se debe a que los rayos de luz se cruzan detrás
                        de la retina, y puede ser parcialmente compensada por el
                        cristalino. No aumenta con el crecimiento y se corrige con
                        lentes convergentes en gafas o lentillas..
                    </p>

                    <p className='salud-visual-subtitle'>ASTIGMATISMO</p>

                    <p className="salud-visual-p">
                        El astigmatismo se produce cuando las superficies dióptricas del
                        ojo tienen diferentes curvaturas en sus ejes, causando una
                        visión desenfocada en todas las distancias. No suele cambiar con
                        el crecimiento, pero puede estar asociado con miopía o
                        hipermetropía. En casos de progresión, se debe descartar
                        enfermedades como el queratocono mediante exámenes específicos.
                    </p>

                    <h3 className="salud-visual-section-title">
                        ¿CÓMO CUIDAR TU SALUD VISUAL?
                    </h3>

                    <ol className="revisar-la-vista-anualmente-p">
                        <li className="revisar-la-vista-anualmente-li">
                            Revisar la vista anualmente.
                        </li>
                        <li className="revisar-la-vista-anualmente-li">
                            Proteger los ojos de los rayos UV con gafas de sol.
                        </li>
                        <li className="revisar-la-vista-anualmente-li">
                            Mantener una buena iluminación y distancia adecuada con los
                            objetos observados.
                        </li>
                        <li className="revisar-la-vista-anualmente-li">
                            Evitar frotarse los ojos.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default SaludVisual
