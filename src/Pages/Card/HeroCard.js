import React from 'react'
import styles from './HeroCardStyle.module.css'
import { Link, NavLink } from 'react-router-dom'

const HeroCard = ({ results, page }) => {
    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            return (
                <Link style={{ textDecoration: "none" }} to={`${page}${id}`} key={id} className='col-lg-3 col-md-6 col-sm-12 mb-4 position-relative text-dark'>
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div style={{ padding: "10px" }} className='content'>
                            <div className='fs-4 fw-bold mb-4'>{name}</div>
                            <div className=''>
                                <div className='fs-6'>Location</div>
                                <div className='fs-5'>{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        switch (status) {
                            case "Alive":
                                return (
                                    <div className={`${styles.badge} position-absolute badge bg-success`}>
                                        {status}
                                    </div>
                                );
                            case "Dead":
                                return (
                                    <div className={`${styles.badge} position-absolute badge bg-danger`}>
                                        {status}
                                    </div>
                                );
                            default:
                                return (
                                    <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                                        {status}
                                    </div>
                                );
                        }
                    })()}

                </Link>
            )
        })
    } else {
        display = "There are no similar names"
    }
    return (
        <>
            {display}
        </>
    )
}

export default HeroCard
