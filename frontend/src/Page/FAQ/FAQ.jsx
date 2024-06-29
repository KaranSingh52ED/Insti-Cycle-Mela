import React from 'react';
import { useState } from 'react';
import firstone from './../../assets/firstone.jpg';
function WelcomeMessage() {
    return (
        <div className="WelcomeMessage ">
            <div className="header h-96 bg-cover bg-center flex flex-col items-center p-10 mx-6 my-6 rounded-2xl " style={{ backgroundImage: `url(${firstone})` }}>
                <h1 className="header-title text-5xl font-bold mb-2 text-white">FAQ</h1>
                <p className="header-desc text-lg text-center mt-2 text-white">Frequently Ask Questions</p>
                <div className="search w-3/4 h-12 bg-white mt-5 rounded-full flex justify-between p-1">
                    <input className="w-4/5 h-full p-2 bg-transparent border-none text-base" type="text" placeholder="Search...." />
                    <button className="w-1/5 min-w-max h-full bg-yellow-500 text-white rounded-full hover:bg-black">Search</button>
                </div>
            </div>
        </div>
    );
}

function Neck() {
    return (
        <div className="faq w-full  flex justify-center items-center flex-col p-3">
            <div className="faq-name flex-1/2 pt-24 flex flex-col w-1/2 justify-center ml-10">
                <h1 className="faq-header text-5xl font-bold ml-12 mb-0">Have<br />Questions?</h1>
                <img className="faq-img w-full max-w-md h-auto mt-0" src="secondone.png" alt="" />
            </div>
        </div>
    );
}

const data = [
    {
        question: 'What should I look for when buying a used bicycle?',
        answer: 'Check the overall condition of the bike, including the frame, tires, brakes, and gears. If possible, arrange to see the bike in person and take it for a test ride. Don"t hesitate to ask the seller about the bike"s history and any maintenance it has undergone.',
    },
    {
        question: 'How do I contact the seller?',
        answer: 'Each listing includes a contact form to reach the seller directly. Fill out the form with your inquiry, and the seller will respond to arrange a meeting or provide more information.',
    },
    {
        question: 'How do I list my bicycle for sale?',
        answer: 'To list your bicycle, log in to your account and go to the "Sell a Bicycle" section. Fill out the listing form with details about your bike, including photos, description, price, and contact information. Your listing will be reviewed and published within 24 hours.',
    },
    {
        question: ' How should I price my bicycle?',
        answer: ' Consider the age, condition, and original price of the bike. Research similar listings on the platform to gauge a competitive price. Be honest about the bike’s condition to ensure a fair deal for both parties.',
    },
    {
        question: 'How do I edit or remove my listing?',
        answer: ' You can manage your listings through your account dashboard. From there, you can edit the details or remove the listing if the bike is sold or you change your mind.',
    },
    {
        question: 'How do I ensure a safe transaction?',
        answer: ' Always meet in a public place, preferably on campus, to exchange the bicycle and payment. Avoid sharing personal information beyond what’s necessary for the transaction. Consider bringing a friend along for added safety.',
    },
    {
        question: 'What payment methods are recommended?',
        answer: 'Cash is often the simplest method for in-person transactions. If both parties agree, you can also use digital payment platforms like gpay,paytm,phonepay…',
    },
    {
        question: 'Who can use this platform?',
        answer: 'This platform is exclusively for current students, faculty, and staff of the college. You must have a valid college ID to create an account and participate in the exchange.',
    },
    {
        question: ' How do I sign up?',
        answer: 'You can sign up using your college email address. Simply click on the "Sign Up" button on the homepage, enter your details, and verify your email to get started.',
    },
    {
        question: 'How do I find a bicycle to buy?',
        answer: 'Browse the listings by visiting the "Buy a Bicycle" section. You can filter the results by price, type, condition, and location to find the perfect bike for your needs',
    }
]

const FAQ = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    }

    return (

        <div className="abc flex flex-col">
            <div className="left"><WelcomeMessage /></div>
            <div className="footer flex flex-row">
                <div className="Leftbottom w-1/2"><Neck /></div>
                <div className="accordian  w-1/2  p-3 border-l-2 border-yellow-500 mt-3">
                    {data.map((item, i) => (
                        <div className="main w-f mb-2 mt-1.5 border-b border-black" key={i}>
                            <div className="title h-10 text-yellow-500 flex justify-between items-center cursor-pointer" onClick={() => toggle(i)}>
                                <h2 className="font-semibold text-xl">{item.question}</h2>
                                <span>{selected == i ? '<' : '>'}</span>
                            </div>
                            <div className={selected == i ? 'content text-gray-500 font-serif font-bold transition-max-height duration-500 ease-in-out' : 'content max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out'}>{item.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default FAQ;