import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareButtons = () => {
  const shareUrl = "https://jbc-booking.vercel.app/";
  const title = "Book with us today to enjoy our limited offer";

  const handleCopy = () => {
    // Implement any feedback or logic after copying to clipboard
    console.log("URL copied to clipboard!");
  };

  return (
    <div className="share">
      <p> Share</p>

      <div className="share-icons">
        {/* Facebook Share Button */}
        <FacebookShareButton url={shareUrl} quote={title} hashtag="#muo">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        {/* Twitter Share Button */}
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        {/* LinkedIn Share Button */}
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        {/* Reddit Share Button */}
        <RedditShareButton url={shareUrl} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        {/* Email Share Button */}
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="Check out this awesome content!"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        {/* Copy URL Button */}
        <CopyToClipboard text={shareUrl} onCopy={handleCopy}>
          <i class="fa-solid fa-copy copyIcon"></i>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtons;
