import React from 'react';

const ActivityDetails = ({ list, breakTime }) => {
    let totalTime = 0;
    for (const t of list) {
        totalTime = totalTime + t;
    }
    return (
        <>
            <h3 className='h4 my-4'>Activity Details</h3>
            <div className="bg-light p-3 rounded d-flex justify-content-between align-items-center my-3">
                <h5>works Time:</h5>
                <h5>{totalTime} seconds</h5>
            </div>
            <div className="bg-light p-3 rounded d-flex justify-content-between align-items-center my-3">
                <h5>Break Time:</h5>
                <h5>{breakTime} seconds</h5>
            </div>
        </>
    );
};

export default ActivityDetails;