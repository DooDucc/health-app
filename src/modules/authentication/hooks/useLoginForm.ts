import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store";
import type { AppDispatch } from "../../base";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      dispatch(login({ email }));
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleSubmit,
  };
};
