import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import BazarSwitch from "components/BazarSwitch";
import { FlexBox } from "components/flex-box";
import { Paragraph, Small } from "components/Typography";
import currency from "currency.js";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  CategoryWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "../../StyledComponents";

// ========================================================================
type UserSkillRowProps = { userSkill: any };
// ========================================================================

const UserSkillRow: FC<UserSkillRowProps> = ({ userSkill }) => {
  const { category, name, price, image, brand, id, published } = userSkill;

  // state
  const router = useRouter();
  const [userSkillPulish, setUserSkillPublish] = useState(published);

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src={image} sx={{ borderRadius: "8px" }} />
          <Box>
            <Paragraph>{name}</Paragraph>
            <Small color="grey.600">#{id}</Small>
          </Box>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{category}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Avatar
          src={brand}
          sx={{ width: 55, height: "auto", borderRadius: 0 }}
        />
      </StyledTableCell>

      <StyledTableCell align="left">
        {currency(price, { separator: "," }).format()}
      </StyledTableCell>

      <StyledTableCell align="left">
        <BazarSwitch
          color="info"
          checked={userSkillPulish}
          onChange={() => setUserSkillPublish((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/userSkills/${id}`)}>
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

export default UserSkillRow;
