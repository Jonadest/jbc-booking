import React from "react";
import { Helmet } from "react-helmet";
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
  const shareUrl = "https://jannybeautycare.com/services";
  const title = "JBC | New Jersey";

  const handleCopy = () => {
    console.log("URL copied to clipboard!");
  };

  return (
    <div className="share">
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="We are open for booking" />
        <meta property="og:url" content={shareUrl} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/di2ftwqmk/image/upload/v1709038887/18_l1y3oz.jpg"
        />
      </Helmet>

      <div className="share-icons">
        {/* Facebook Share Button */}
        <FacebookShareButton url={shareUrl} quote={title} hashtag="#braids">
          <FacebookIcon size={25} round />
        </FacebookShareButton>
        {/* Twitter Share Button */}
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={25} round />
        </TwitterShareButton>
        {/* LinkedIn Share Button */}
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>
        {/* Reddit Share Button */}
        <RedditShareButton url={shareUrl} title={title}>
          <RedditIcon size={25} round />
        </RedditShareButton>
        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
        {/* Email Share Button */}
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="Check out this awesome content!"
        >
          <EmailIcon size={25} round />
        </EmailShareButton>
        {/* Copy URL Button */}
        <CopyToClipboard text={shareUrl} onCopy={handleCopy}>
          <i className="fa-solid fa-copy copyIcon text-light"></i>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtons;
