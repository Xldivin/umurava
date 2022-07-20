import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Box } from "@mui/material";
import BazarSwitch from "components/BazarSwitch";
import { FlexBox } from "components/flex-box";
import { Paragraph, Small } from "components/Typography";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledComponents";

// ========================================================================
type DegreeRowProps = { degree: any };
// ========================================================================

const DegreeRow: FC<DegreeRowProps> = ({ degree }) => {
  const { isDeleted,isActive,description, name, id } = degree;

  // state
  const router = useRouter();
  const [degreeActive, setDegreeActive] = useState(isActive);

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Box>
            <Paragraph>{name}</Paragraph>
            <Small color="grey.600">#{id}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">
      <FlexBox alignItems="center" gap={1.5}>
          <Box>
            <Small color="grey.600">{description}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="center">
        <BazarSwitch
          color="info"
          checked={degreeActive}
          onChange={() => setDegreeActive((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <BazarSwitch
          color="info"
          checked={isDeleted}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/degrees/${id}`)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default DegreeRow;
