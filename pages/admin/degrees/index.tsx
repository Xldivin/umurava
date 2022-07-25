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
import { DegreeRow } from "pages-sections/admin";
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
DegreeList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type DegreeListProps = { degrees: any[] };
// =============================================================================

export default function DegreeList(props: DegreeListProps) {
  const { degrees } = props;

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: degrees });

  return (
    <Box py={4}>
      <H3 mb={2}>Degree List</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Add Degree"
        handleBtnClick={() => {}}
        searchPlaceholder="Search Degree..."
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
                rowCount={degrees.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((degree, index) => (
                  <DegreeRow degree={degree} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(degrees.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const degrees = await api.degrees();

  return { props: { degrees } };
};
