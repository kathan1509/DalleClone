import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { preview } from "../assets";

import { getRandomPromt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  const handleSurpriseMe = () => {};

  return (
    <section className=" max-w-7xl mx-auto">
      <div>
        <h1 className=" font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text][16px] max-2[500px]">
          Create Imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="John Snow"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a painting of a fox in the style of Starry Night"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
