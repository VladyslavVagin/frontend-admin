import styled from "@emotion/styled";

export const ColumnContent = styled.td`
  min-width: 58px;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.17;
  border-bottom: 1px solid var(--border-color);
  padding: 14px 0;
  text-align: flex-start;

  &:first-of-type {
    max-width: 160px;
    min-width: 160px;
  }

  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(2) {
    padding-right: 8px;
    padding-left: 24px;
  }

  &:nth-of-type(2) {
    width: 148px;
    max-width: 148px;
  }

  &:not(:last-of-type) {
    border-right: 1px solid var(--border-color);
  }

  &:last-of-type {
    padding-left: 14px;
  }

  @media screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    padding: 20px 0;

    &:last-of-type {
      padding-left: 20px;
    }
  }
`;
