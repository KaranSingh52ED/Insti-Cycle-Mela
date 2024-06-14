import React from 'react';
import Layout from '../Layout/Layout';
import { useState } from 'react';
import img1 from "./assets/5672795-removebg-preview.png";
import img2 from "./assets/18939283816bc18797283b6b249f0401.jpg";
import './FAQ.css';



function WelcomeMessage() {

    return (
        <div className="WelcomeMessage">
            <div class="header">
                <h1 class="header-title">FAQ</h1>
                <p class="header-desc">Frequently Ask Questions</p>
                <div class="search">
                    <input type="text" placeholder="Search...." />
                    <button>Search</button>
                </div>
            </div>

        </div>
    );
}
function Neck() {
    return (
        <div class="faq">
            <div class="faq-name">
                <h1 class="faq-header">Have<br />Questions?</h1>
                <img className="faq-img" src={img1} alt="" />
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
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)

        }

        setSelected(i)
    }
    return (
        <Layout>
            <div className="abc">
                <div className="left"><WelcomeMessage /></div>
                <div className="footer">
                    <div className="Leftbottom"><Neck /></div>
                    <div className="accordian">
                        {data.map((item, i) => (
                            <div className="main" key={i}>
                                <div className="title" onClick={() => toggle(i)}>
                                    <h2>{item.question}</h2>
                                    <span>{selected == i ? '<' : '>'}</span>
                                </div>
                                <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </Layout>
    );
}

export default FAQ;