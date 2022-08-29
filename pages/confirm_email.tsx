import { FlexRowCenter } from "components/flex-box";
import Confirm_email from "pages-sections/sessions/Confirm_email";
import React from "react";

const ResetPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <Confirm_email />
    </FlexRowCenter>
  );
};

export default ResetPage;
