import { Box } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import { DegreeForm } from "pages-sections/admin";
import React, { ReactElement } from "react";
import * as yup from "yup";

// form field validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required("required"),
  category: yup.string().required("required"),
  description: yup.string().required("required"),
  stock: yup.number().required("required"),
  price: yup.number().required("required"),
  sale_price: yup.number().required("required"),
  tags: yup.object().required("required"),
});

// =============================================================================
EditDegree.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function EditDegree() {
  const initialValues = {
    name: "",
    tags: "",
    stock: "",
    price: "",
    category: "",
    sale_price: "",
    description: "",
  };

  const handleFormSubmit = () => {};

  return (
    <Box py={4}>
      <H3 mb={2}>Edit Degree</H3>

      <DegreeForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
      />
    </Box>
  );
}
