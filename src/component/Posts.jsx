import React from "react";
import PostItem from "./PostItem";

const posts = [
  {
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: "Sarthak Kamra",
    views: "1.4k",
    type: "article",
    image: "/img/daniel-plan-1123199-unsplash.jpg",

    logo: "✍️",
    authorName: "Sarthak Kamra",
    authorImg: "/img/sarthak.jpg",
  },
  {
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei..",
    author: "Sarthak Kamra",
    views: "1.4k",
    type: "education",
    image: "/img/da-kraplak-1635130-unsplash.jpg",

    logo: "🔬️",
    authorName: "Sarah West",
    authorImg: "/img/sarah.jpg",
  },
  {
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    author: "Sarthak Kamra",
    views: "1.4k",
    type: "meetup",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    image: "/img/david-clarke-1633258-unsplash.jpg",

    logo: "🗓️",
    authorName: "Ronal Jones",
    authorImg: "/img/ronal.jpg",
  },
  {
    title: "Software Developer",
    author: "Joseph Gray",
    views: "1.4k",
    type: "job",
    company: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    siteUrl: "#",

    logo: "💼️",
    authorName: "Joseph Gray",
    authorImg: "/img/joseph.jpg",
  },
];

const Posts = () => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </div>
  );
};

export default Posts;
