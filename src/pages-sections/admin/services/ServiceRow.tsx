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
type ServiceRowProps = { service: any };
// ========================================================================

const ServiceRow: FC<ServiceRowProps> = ({ service }) => {
  const {  name,description,isActive,isDeleted, price, image, brand, id } = service;

  // state
  const router = useRouter();
  const [serviceActive, setServiceActive] = useState(isActive);

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
      <FlexBox alignItems="left" gap={1.5}>
          <Box>
            <Small color="grey.600">{description}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="center">
        <BazarSwitch
          color="info"
          checked={serviceActive}
          onChange={() => setServiceActive((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <BazarSwitch
          color="info"
          checked={isDeleted}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/services/${id}`)}>
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

export default ServiceRow;
