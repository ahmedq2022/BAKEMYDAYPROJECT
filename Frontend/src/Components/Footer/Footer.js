import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import { motion } from "framer-motion";

const SocialIconButton = motion(IconButton);

const Footer = () => {
  const socialLinks = [
    { icon: <FacebookIcon sx={{ color: "white", fontSize: "40px" }} />, url: 'https://www.facebook.com/your-page' },
    { icon: <WhatsAppIcon sx={{ color: "white", fontSize: "40px" }} />, url: 'https://wa.me/your-phone-number' },
    { icon: <TwitterIcon sx={{ color: "white", fontSize: "40px" }} />, url: 'https://twitter.com/your-handle' },
    { icon: <ShareIcon sx={{ color: "white", fontSize: "40px" }} />, onClick: handleShare },
    // Add more social icons and their URLs as needed
  ];

  const iconVariants = {
    hover: {
      scale: 1.2,
    },
  };

  // Function to handle the share button click
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: 'Your Title',
        text: 'Your Text',
        url: 'https://your-website-url.com',
      })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback if navigator.share is not supported
      console.log('Web Share API not supported on this browser');
    }
  }

  return (
    <div
      style={{
        paddingBlock: "100px",
        backgroundColor: "#F16A6A",
        marginTop: "auto"
      }}
      id="section-5"
    >
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {socialLinks.map((social, index) => (
          <SocialIconButton
            key={index}
            component="a"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            onClick={social.onClick}
          >
            {social.icon}
          </SocialIconButton>
        ))}
      </Box>
      <Typography
        variant="h6"
        sx={{ textTransform: "capitalize", textAlign: "center", m: 3 }}
      >
        @2023 MAQ | All Rights Reserved
      </Typography>
    </div>
  );
};

export default Footer;
