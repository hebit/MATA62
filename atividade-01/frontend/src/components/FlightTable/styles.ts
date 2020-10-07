import styled from "styled-components";

export const Container = styled.div`
  margin-top: 42px;
`;

export const Badget = styled.span<{ error?: boolean }>`
  min-height: 16px;
  width: 8px;
  background: ${(p) => (p.error ? "red" : "yellow")};
  display: inline-flex;
  margin-left: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transform: translateY(5px);
`;
