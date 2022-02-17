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
    <div className="mx-auto sm:ml-0 md:ml-5 lg:ml-12 flex flex-col justify-center  ">
      <h2 className="font-bold text-2xl ">Here is my Some Favorite Tweets</h2>
      <TwitterTweetEmbed tweetId={"1494315637744623616"} />
      <TwitterTweetEmbed tweetId={"1491806412745621504"} />
      <TwitterTweetEmbed tweetId={"1468882457827045379"} />
      <TwitterTweetEmbed tweetId={"1468113723273269255"} />
    </div>
  );
};

export default tweets;
