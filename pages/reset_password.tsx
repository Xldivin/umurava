import { FlexRowCenter } from "components/flex-box";
import Header from 'pages-sections/login/Header'
import Reset from "pages-sections/sessions/Reset";
import Footer from 'pages-sections/login/Footer'
import React from "react";

const ResetPage = () => {
  return (
    <FlexRowCenter flexDirection="column" sx={{ justifyContent: 'space-between'}}>
      <Header />
      <Reset />
      <Footer />
    </FlexRowCenter>
  );
};

export default ResetPage;
