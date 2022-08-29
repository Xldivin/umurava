import { Delete, RemoveRedEye } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { Avatar, Box } from "@mui/material";
import {
  StatusWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "../../StyledComponents";
import { Paragraph, Small } from "components/Typography";
import BazarSwitch from "components/BazarSwitch";
import { FlexBox } from "components/flex-box";

// ========================================================================
type UserSkillRowProps = { userSkill: any };
// ========================================================================

const UserSkillRow: FC<UserSkillRowProps> = ({ userSkill }) => {
  const { level, id, skill, user, backgroundChecked, isDeleted, approved } = userSkill;
  const [ backgroundCheck , setBackgroundCheck] = useState(backgroundChecked);
  const router = useRouter();

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
    <StyledTableCell align="left">
     <FlexBox alignItems="center" gap={1.5}>
       <Avatar src={user?.photo} sx={{ borderRadius: "8px" }} />
       <Box>
         <Paragraph>{user?.firstName}</Paragraph>
         <Small color="grey.600">#{user?.id}</Small>
       </Box>
     </FlexBox>
   </StyledTableCell>
   <StyledTableCell align="left">{skill.name}</StyledTableCell>

   <StyledTableCell align="left">
     <StatusWrapper status={level}>{level}</StatusWrapper>
   </StyledTableCell>

   <StyledTableCell align="left">
     <BazarSwitch
       color="info"
       checked={backgroundCheck}
       onChange={() => setBackgroundCheck((state) => !state)}
     />
   </StyledTableCell>

   <StyledTableCell align="left">
     <BazarSwitch
       color="info"
       checked={isDeleted}
     />
   </StyledTableCell>

   <StyledTableCell align="left">
     <StatusWrapper status={approved}>{approved}</StatusWrapper>
   </StyledTableCell>

   
      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/skills/userskills/${id}`)}>
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