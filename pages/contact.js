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
      <h2>Contact Page </h2>
      <form action="#" className="flex flex-col space-y-5">
        <input
          className="w-full p-3 rounded-lg"
          placeholder="Name"
          value={name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          required
        />

        <input
          className="w-full p-3 rounded-lg"
          type="email"
          placeholder="Email id"
          value={email}
          onChange={(e) => setPost({ ...post, email: e.target.value })}
          required
        />
        <input
          className="w-full p-3 rounded-lg"
          type="text"
          placeholder="Mobile No."
          value={mobile}
          onChange={(e) => setPost({ ...post, mobile: e.target.value })}
          required
        />
        <button
          className="bg-green-500  hover:bg-green-600 p-3 rounded-lg w-auto justify-center flex items-center"
          onClick={createPost}
        >
          Create Post
        </button>
      </form>

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
