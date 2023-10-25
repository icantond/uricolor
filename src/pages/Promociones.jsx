import React from 'react'
import underline from '../assets/img/underline.png'
import Logo from '../assets/img/logo-big.png'
import './Promociones.css'
// import PromocionesCard from '../components/promociones/PromocionesCard'
import promo1 from '../assets/img/01card-promo1@2x.png';
import promo2 from '../assets/img/02card-promo1@2x.png';
import promo3 from '../assets/img/03card-promo1@2x.png';
import promo4 from '../assets/img/04card-promo1@2x.png';
import arrowButton from '../assets/img/property-1default.svg'


const Promociones = () => {

    let promociones = [
        {
            "nombre": "BANCO GALICIA",
            "img": `${promo1}`
        },
        {
            "nombre": "BANCO NACIÓN",
            "img": `${promo2}`
        },
        {
            "nombre": "LOS ANDES PASS",
            "img": `${promo3}`
        },
        {
            "nombre": "CIUDAD UNIVERSITARIA",
            "img": `${promo4}`
        },
    ]

    return (
        <div className="salud-visual">
            <div className="body">
                <div className="main">

                    <img className="underline-icon" alt="" src={underline} />
                    <div className="salud-visual-section">
                        <b className="salud-visual-title">PROMOCIONES</b>
                    </div>
                    <img className="logo-icon" alt="" src={Logo} />
                </div>

                <div className='promociones-card-container'>

                    {promociones.map((promocion) => (
                        <div className="promociones-card">
                            <div className="promociones-card-img-container">
                                <img className="promociones-card-img" alt="" src={promocion.img} />
                            </div>
                            <div className="label-container">
                                <b className="label3">{promocion.nombre}</b>
                            </div>
                            <div className="atombutton-primary-group">
                                <div className="atombutton-primary1">
                                    <div className="label4">Más información</div>
                                </div>
                                <img className="atomarrow-icon1" alt="" src={arrowButton} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Promociones
