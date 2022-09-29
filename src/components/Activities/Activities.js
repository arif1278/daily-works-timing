import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = ({ addToList }) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
            {
                activities.map(activity => <Activity key={activity.id} activity={activity} addToList={addToList}></Activity>)
            }
        </div>
    );
};

export default Activities;