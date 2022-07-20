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
import { SkillRow } from "pages-sections/admin";
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
SkillList.getLayout = function getLayout(page: ReactElement) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

type SkillListProps = { skills: any[] };
// =============================================================================

export default function SkillList(props: SkillListProps) {
  const { skills } = props;

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: skills });

  return (
    <Box py={4}>
      <H3 mb={2}>Skill List</H3>

      <SearchArea
        handleSearch={() => {}}
        buttonText="Add Skill"
        handleBtnClick={() => {}}
        searchPlaceholder="Search Skill..."
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
                rowCount={skills.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((skill, index) => (
                  <SkillRow skill={skill} key={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(skills.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const skills = await api.skills();

  return { props: { skills } };
};
