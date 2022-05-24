import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Contact() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ name: "", email: "", mobile: "" });
  const { name, email, mobile } = post;

  //useEffetct to load fetch data
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await supabase.from("contactForm").select();
    setPosts(data);
    // console.log("Data : ", data);
  };

  const createPost = async () => {
    if (name === "" || email == "" || mobile == "") {
      return;
    }
    await supabase
      .from("contactForm")
      .insert([{ name, email, mobile }])
      .single();

    setPost({ name: "", email: "", mobile: "" });
    fetchPosts();
    // alert("Thank you !!! You information Stroed In Database.");
    toast("Thank you ✌️ !!! Your infomation Stored in Database");
  };

  return (
    <div className="flex flex-col space-y-5 ">
      <h2 className="font-mono text-xl ">
        Want to hire me as a full-stack developer , Connect with Me below{" "}
      </h2>

      <div className="mx-auto w-full md:w-96 md:max-w-full">
        <div className="border border-gray-600 bg-gray-800 p-6 sm:rounded-sm ">
          <form method="POST">
            <label className="mb-6 block">
              <span className="text-gray-300">Your name</span>
              <input
                value={name}
                onChange={(e) => setPost({ ...post, name: e.target.value })}
                required
                name="name"
                type="text"
                className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-600
            bg-transparent
            text-gray-300
            placeholder-gray-600
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="John Deo"
              />
            </label>
            <label className="mb-6 block">
              <span className="text-gray-300">Email address</span>
              <input
                name="email"
                type="email"
                className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-600
            bg-transparent
            text-gray-300
            placeholder-gray-600
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="john.deo@example.com"
                required
              />
            </label>
            <label className="mb-6 block">
              <span className="text-gray-300">Message</span>
              <textarea
                name="message"
                className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-600
            bg-transparent
            text-gray-300
            placeholder-gray-600
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
            focus:shadow-outline
            h-10
            rounded-lg
            bg-indigo-700
            px-5
            text-indigo-100
            transition-colors
            duration-150
            hover:bg-indigo-800
          "
              >
                Connect With Me
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <form action="#" className="flex flex-col space-y-5">
        <input
          className="w-full rounded-lg p-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          required
        />

        <input
          className="w-full rounded-lg p-3"
          type="email"
          placeholder="Email id"
          value={email}
          onChange={(e) => setPost({ ...post, email: e.target.value })}
          required
        />
        <input
          className="w-full rounded-lg p-3"
          type="text"
          placeholder="Mobile No."
          value={mobile}
          onChange={(e) => setPost({ ...post, mobile: e.target.value })}
          required
        />
        <button
          className="flex  w-auto items-center justify-center rounded-lg bg-green-500 p-3 hover:bg-green-600"
          onClick={createPost}
        >
          Create Post
        </button>
      </form> */}

      <ToastContainer />

      {/* {posts.map((post, id) => (
        <div
          className="border-2 bg-gray-700 p-4 w-auto max-w-sm "
          key={post.id}
        >
          <h2>Name: {post.name}</h2>
          <p>Email: {post.email}</p>
          <p>Mobile No: {post.mobile}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Contact;
