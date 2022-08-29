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
import { UserSkillRow } from "pages-sections/admin";
import React, { ReactElement } from "react";
import api from "utils/api/dashboard";

// table column list
const tableHeading = [
  { id: "user", label: "User", align: "left" },
  { id: "name", label: "Skill Name", align: "left" },
  { id: "level", label: "Skill Level", align: "left" },
  { id: "backgroundChecked", label: "Background Checked", align: "left" },
  { id: "isDeleted", label: "Is Deleted", align: "left" },
  { id: "approved", label: "Approved", align: "left" },
  { id: "actions", label: "Actions", align: "left" }
];

// =============================================================================
UserSkillList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type UserSkillListProps = { userSkills: any[] };

// =============================================================================

export default function UserSkillList({ userSkills }: UserSkillListProps) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: userSkills,
    defaultSort: "createdAt",
    defaultOrder: "desc",
  });

  return (
    <Box py={4}>
      <H3 mb={2}>User Skills</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Create User Skill"
        handleBtnClick={() => {}}
        searchPlaceholder="Search User Skill..."
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
                rowCount={userSkills.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((userSkill, index) => (
                  <UserSkillRow userSkill={userSkill} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(userSkills.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const userSkills = await api.userSkills();

  return { props: { userSkills } };
};