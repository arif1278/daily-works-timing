import me from './../../media/arif cover photo.jpg';
// import me from './../../images/me.png';
import React from 'react';

const About = () => {
    return (
        <>
            <div className="my-4" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={me} className="img-fluid rounded" style={{ maxHeight: '50px' }} alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body p-0">
                            <h5 className="card-title m-0">Arif Hossain</h5>
                            <p className="card-text"><small className="text-muted">Mohakhali, Dhaka, Bangladesh</small></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-light p-3 rounded d-flex justify-content-around align-items-center">
                <div>
                    <h4 className='d-inline'>64 <sub>kg</sub></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4 className='d-inline'>5' 5"</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4 className='d-inline'>23 <sub>yrs</sub></h4>
                    <p>Age</p>
                </div>
            </div>

            <div className="bg-light p-3 rounded">
                <p>My Name is Arif, I am trying hard to become a full stack web developer. I live in old Dhaka. but my home town is in Netrokuna</p>
            </div>
        </>
    );
};

export default About;