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
import { UserDegreeRow } from "pages-sections/admin";
import React, { ReactElement } from "react";
import api from "utils/api/dashboard";

// table column list
const tableHeading = [
  { id: "user", label: "User", align: "left" },
  { id: "school", label: "School Name", align: "left" },
  { id: "degree", label: "Degree", align: "left" },
  { id: "backgroundChecked", label: "Background Checked", align: "left" },
  { id: "isDeleted", label: "Is Deleted", align: "left" },
  { id: "approved", label: "Approved", align: "left" },
  { id: "actions", label: "Actions", align: "left" }
];

// =============================================================================
UserDegreeList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type UserDegreeListProps = { userDegrees: any[] };

// =============================================================================

export default function UserDegreeList({ userDegrees }: UserDegreeListProps) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: userDegrees,
    defaultSort: "createdAt",
    defaultOrder: "desc",
  });

  return (
    <Box py={4}>
      <H3 mb={2}>User Degrees</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Create User Degree"
        handleBtnClick={() => {}}
        searchPlaceholder="Search User Degree..."
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
                rowCount={userDegrees.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((userDegree, index) => (
                  <UserDegreeRow userDegree={userDegree} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(userDegrees.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const userDegrees = await api.userDegrees();

  return { props: { userDegrees } };
};
