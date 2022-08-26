import { FlexRowCenter } from "components/flex-box";
import New_password from "pages-sections/sessions/New_password";
import React from "react";

const ResetPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <New_password />
    </FlexRowCenter>
  );
};

export default ResetPage;
