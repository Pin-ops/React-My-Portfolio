
import React from 'react'
import { FaCloudversify, FaConnectdevelop, FaKeybase } from 'react-icons/fa'
import Jump from 'react-reveal/Jump';


function ServicesCard({ id, title, text}) {

    return (
        <div style={{width: '33%', height: '300px'}}>
            <div className="m-3 shadow cardbox">
                <Jump>
                    <div className="mt-5 mb-4 text-center display-4 text-success">
                        {
                            id === 1 ? <FaCloudversify /> :
                            id === 2 ? <FaConnectdevelop /> :
                            <FaKeybase />
                        }
                    </div>
                </Jump>
                <h6 style={{textAlign: 'center', fontWeight: 'bold', margin: '15px 0 0 0'}}>{title}</h6>
                <p style={{textAlign: 'center', color: 'grey', fontSize: '14px', padding: '15px 15px 40px'}}>{text}</p>
            </div>
        </div>
    )
}

export default ServicesCard