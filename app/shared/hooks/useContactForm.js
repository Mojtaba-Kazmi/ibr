import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const useContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      location: "",
      email: "",
      contactNumber: "",
      services: [],
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post("/api/send-email", data);

      if (res.status === 200) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        reset(); // Reset form fields
        setModalOpen(true);
      } else {
        setMessage({ type: "error", text: "Failed to send message. Please try again later." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error submitting form. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    message,
    modalOpen,
    setModalOpen,
  };
};

export default useContactForm;