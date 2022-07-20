import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import SearchArea from "components/dashboard/SearchArea";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import { GetStaticProps } from "next";
import { ServiceRow } from "pages-sections/admin";
import React, { ReactElement } from "react";
import api from "utils/api/dashboard";

const tableHeading = [
  { id: "name", label: "Name", align: "left" },
  { id: "description", label: "Description", align: "left" },
  { id: "isActive", label: " Active", align: "center" },
  { id: "isDeleted", label: "Deleted", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

// =============================================================================
ServiceList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type ServiceListProps = { services: any[] };
// =============================================================================

export default function ServiceList(props: ServiceListProps) {
  const { services } = props;

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: services });

  return (
    <Box py={4}>
      <H3 mb={2}>Service List</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Add Service"
        handleBtnClick={() => {}}
        searchPlaceholder="Search Service..."
      />

      <Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 900 }}>
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={services.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((service, index) => (
                  <ServiceRow service={service} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(services.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await api.services();

  return { props: { services } };
};