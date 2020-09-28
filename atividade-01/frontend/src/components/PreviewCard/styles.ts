import { Card, Typography } from "@material-ui/core";
import styled from "styled-components";
import colors from "../../utils/colors";

export const CardContainer = styled(Card)`
  :hover {
    cursor: pointer;
  }

  transition: box-shadow 0.3s ease-in-out opacity 0.3s ease-in-out margin 0.3s
    ease-in-out;

  &.MuiPaper-outlined {
    opacity: 0.8;
  }
`;

type CardTextType = "confirmed" | "canceled";
type CardTextProps = {
  marginTop?: number;
  type?: CardTextType;
};

/**
 * FONTE: Archivo
 */

const cardTextTypeColor = {
  confirmed: colors.success,
  canceled: colors.error,
} as Record<CardTextType, string>;

export const CardText = styled(Typography).attrs((p) => ({
  variant: "body1",
  ...p,
}))<CardTextProps>`
  &.MuiTypography-body1 {
    /* color: red; */
    font-weight: 600;
    ${(p) => p.marginTop && `margin-top: ${p.marginTop}px;`}
    ${(p) => p.type && `color: ${cardTextTypeColor[p.type]};`}
  }
`;
