import { Box } from "@mui/material";
import Setting from "components/Setting";
import Footer from "pages-sections/landing/Footer";
import Section1 from "pages-sections/landing/Section1";
import Section2 from "pages-sections/landing/Section2";
import Section3 from "pages-sections/landing/Section3";
import Section4 from "pages-sections/landing/Section4";
import Section6 from "pages-sections/landing/Section6";
import Landing from "pages-sections/landing/Landing";
import TrustedBy from "pages-sections/landing/TrustedBy";
import { useState } from "react";

const IndexPage = () => {
  const [filterDemo, setFilterDemo] = useState("");

  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Landing />
      <TrustedBy />
      {/* <Section6 setFilterDemo={setFilterDemo} />
      <Section2 />
      <Section3 filterDemo={filterDemo} setFilterDemo={setFilterDemo} />
      <Section4 />
      <Footer /> */}

      {/* <Setting /> */}
    </Box>
  );
};

export default IndexPage;
