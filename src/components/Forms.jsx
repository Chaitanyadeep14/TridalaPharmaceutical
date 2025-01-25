import { useState } from "react";
import axios from "axios";

export default function Forms() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        content: "",
    });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = "https://script.google.com/macros/s/AKfycbwqZycR8FIA_t11SKcGoXkzDQ3xywM13OuuEllCPELWGJMd6dv0cA-CdR5krl03fw3wmA/exec";
        if (!scriptURL) {
            setStatus("Error: Script URL is not configured in the environment.");
            return;
        }
        setIsSubmitting(true); // Start loading state
        setStatus(""); // Clear previous status messages
        try {
            const response = await axios.post(scriptURL, formData, {
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            });
            if (response.status === 200) {
                setStatus("Form submitted successfully!");
            } else {
                setStatus("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false); // Stop loading state
        }
        setFormData({ name: "", email: "", phone: "", content: "" });
    };

    return (
        <>
            <form
                className="font-lato flex flex-col items-start space-y-4"
                onSubmit={handleSubmit}
            >
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="p-1 bg-inherit w-60"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="p-1 bg-inherit w-60"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        className="p-1 bg-inherit w-44"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col border-b-[1px]">
                    <label>What are you looking for:</label>
                    <textarea
                        name="content"
                        className="p-1 bg-inherit"
                        rows={4}
                        cols={31}
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className={`py-2 px-4 rounded-full border-[1px] bg-inherit text-white hover:bg-gray-200 hover:text-green-700 ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
                {/* {status && (
                    <p
                        className={`mt-4 ${
                            status.includes("success") ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {status}
                    </p>
                )} */}
            </form>
        </>
    );
}