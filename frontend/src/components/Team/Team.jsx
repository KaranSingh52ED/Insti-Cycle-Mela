import React from 'react';
import Layout from '../../Page/Layout/Layout';

function Team() {
    const coreTeam = [
        { id: 1, name: 'John Doe', description: 'CEO and Founder' },
        { id: 2, name: 'Jane Smith', description: 'CTO and Co-Founder' },
        { id: 3, name: 'Bob Johnson', description: 'CMO and Co-Founder' },
    ];

    const superCoordinators = [
        { id: 4, name: 'Alice Brown', description: 'Head of Marketing' },
        { id: 5, name: 'Mike Davis', description: 'Head of Sales' },
        { id: 6, name: 'Emily Chen', description: 'Head of Operations' },
    ];

    const coordinators = [
        { id: 7, name: 'Sarah Lee', description: 'Marketing Coordinator' },
        { id: 8, name: 'David Kim', description: 'Sales Coordinator' },
        { id: 9, name: 'Lisa Nguyen', description: 'Operations Coordinator' },
    ];

    return (
        <Layout>
            <div className="container mx-auto my-24 p-4 pt-6 md:p-6 lg:p-12">
                <h1 className="text-3xl font-bold mb-4">Our Team</h1>
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Core Team</h2>
                    <ul className="flex flex-wrap justify-center">
                        {coreTeam.map((member) => (
                            <li key={member.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                                <div className="bg-white rounded shadow-md p-4">
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Super Coordinators</h2>
                    <ul className="flex flex-wrap justify-center">
                        {superCoordinators.map((member) => (
                            <li key={member.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                                <div className="bg-white rounded shadow-md p-4">
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Coordinators</h2>
                    <ul className="flex flex-wrap justify-center">
                        {coordinators.map((member) => (
                            <li key={member.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                                <div className="bg-white rounded shadow-md p-4">
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
}

export default Team;