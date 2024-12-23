
import { Card, CardBody, Input, Textarea, Button } from "@material-tailwind/react";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navigation } from "../components/navigationHome";
import { TopHeader } from "../components/top-header";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'jabinkm007@gmail.com'
        };

        emailjs.send('service_xe8ivs1', 'template_m6z04de', {
            publicKey: 'EvyYYe6XpycuOpbkV',
          })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <TopHeader />
            <Navigation />
            <Card className="w-full max-w-md">
                <CardBody>
                    <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input
                                type="text"
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <Textarea
                                name="message"
                                label="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" color="blue" className="w-full">Submit</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default ContactUs;
import { useEffect } from 'react';



const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
};

useEffect(() => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            alert('Please fill out all fields correctly.');
        }
    });
}, [formData]);