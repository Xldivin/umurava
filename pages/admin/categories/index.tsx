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
import { CategoryRow } from "pages-sections/admin";
import React, { ReactElement } from "react";
import api from "utils/api/dashboard";

const tableHeading = [
  { id: "name", label: "Name", align: "left" },
  { id: "service", label: "Service", align: "left" },
  { id: "description", label: "Description", align: "left" },
  { id: "isActive", label: " Active", align: "center" },
  { id: "isDeleted", label: "Deleted", align: "center" },
  { id: "action", label: "Action", align: "center" },
];

// =============================================================================
CategoryList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type CategoryListProps = { categories: any[] };
// =============================================================================

export default function CategoryList(props: CategoryListProps) {
  const { categories } = props;

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: categories });

  return (
    <Box py={4}>
      <H3 mb={2}>Category List</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Add Category"
        handleBtnClick={() => {}}
        searchPlaceholder="Search Category..."
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
                rowCount={categories.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((category, index) => (
                  <CategoryRow category={category} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(categories.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await api.category();

  return { props: { categories } };
};
