import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const tweets = () => {
  return (
    <div className="mx-auto flex flex-col justify-center sm:ml-0 md:ml-5 lg:ml-12  ">
      <h2 className="text-2xl font-bold ">Here is my some Favourite Tweets</h2>
      <TwitterTweetEmbed tweetId={"1494315637744623616"} />
      <TwitterTweetEmbed tweetId={"1491806412745621504"} />
      <TwitterTweetEmbed tweetId={"1468882457827045379"} />
      <TwitterTweetEmbed tweetId={"1468113723273269255"} />
      <TwitterTweetEmbed tweetId={"1494400631712501764"} />
      <TwitterTweetEmbed tweetId={"1496491053196931073"} />
    </div>
  );
};

export default tweets;
