import { Label } from "components/ContactForm/ContactForm.styles";
import styled from "styled-components";

export const FilterLabel = styled(Label)`
    color: ${p => p.theme.colors.white};
`;

export const FilterInput = styled.input`
    width: 100%;
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.space[2]}px 4px;
    margin-top: 6px;
    margin-bottom: 16px;
    outline: none;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-sizing: border-box;
    color: ${p => p.theme.colors.text};
`;