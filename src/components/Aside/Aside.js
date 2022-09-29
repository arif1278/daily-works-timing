import React, { useEffect, useState } from 'react';
import About from '../About/About';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import AddBreaks from '../AddBreaks/AddBreaks';

const Aside = ({ list }) => {
    const [breakTime, setBreakTime] = useState(0);
    const [showToast, setShowToast] = useState(false);

    if (showToast) {
        setTimeout(() => {
            setShowToast(false);
        }, 2000)
    }

    useEffect(() => {
        const storedData = localStorage.getItem('breakTime');
        if (storedData) {
            setBreakTime(parseInt(storedData));
        }
    }, [])

    return (
        <aside className="col-sm-12 col-md-6 col-lg-3 bg-white">
            <About></About>
            <AddBreaks breakTime={breakTime} setBreakTime={setBreakTime}></AddBreaks>
            <ActivityDetails list={list} breakTime={breakTime}></ActivityDetails>

            <h3 className={showToast ? 'bg-danger p-3' : 'd-none'} style={{ zIndex: '90', position: 'fixed', top: '40px', right: '40px' }}>Congratulations!!! You're done your activity!</h3>

            <button className="btn btn-danger w-100 py-2 mx-1 my-5" id="liveToastBtn" onClick={() => setShowToast(true)}>Activity Completed</button>
        </aside>
    );
};

export default Aside;