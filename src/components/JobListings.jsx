import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import jobs from '../jobs.json';

const JobListings = ({ isHome = false, rj = 'Recent Jobs', bj = 'Browse Jobs' }) => {
    const jobListings = isHome ? jobs.data.slice(0, 3) : jobs.data;
    const [showFullDescription, setShowFullDescription] = useState({});

    const toggleDescription = (index) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? rj : bj}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobListings.map((job, index) => {
                        const description = showFullDescription[index] ? job.description : job.description.substring(0, 90) + '...';

                        return (
                            <div key={job.id} className="bg-white rounded-xl shadow-md relative">
                                <div className="p-4">
                                    <div className="mb-6">
                                        <div className="text-gray-600 my-2">
                                            {job.type}
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            {job.title}
                                        </h3>
                                    </div>

                                    <div className="mb-5">
                                        {description}
                                    </div>

                                    <button
                                        onClick={() => toggleDescription(index)}
                                        className="text-indigo-500 mb-5 hover:text-indigo-600"
                                    >
                                        {showFullDescription[index] ? 'Read Less' : 'Read More'}
                                    </button>

                                    <h3 className="text-indigo-500 mb-2">
                                        {job.salary} / year
                                    </h3>

                                    <div className="border border-gray-100 mb-5"></div>

                                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                                        <div className="text-orange-700 mb-3">
                                            <FaMapMarker className="inline ml-1 mr-1 text-lg" />
                                            {job.location}
                                        </div>
                                        <a
                                            href={`/job/${job.id}`}
                                            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );

                    })}
                </div>
            </div>
        </section>
    );
};

export default JobListings;
