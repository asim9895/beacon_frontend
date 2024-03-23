import styled from "styled-components/native";
import { colors } from "../theme/colors";

export const AppContainer = styled.View`
  background-color: ${colors.background};
  flex: 1;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColumnCenter = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const RowJustifyCenter = styled(RowCenter)`
  justify-content: center;
`;
export const RowJustifySpaceBetween = styled(RowCenter)`
  justify-content: space-between;
`;
export const ColumnJustifyCenter = styled(ColumnCenter)`
  justify-content: center;
`;
export const ColumnJustifySpaceBetween = styled(RowCenter)`
  justify-content: space-between;
`;
