import { Field } from "formik";
import styled from "styled-components";

export const Label = styled.label`
    display: block;
    text-align: left;
    font-weight: ${p => p.theme.fontWeights.semibold};
    margin-top:  ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.text};
`

export const Input = styled(Field)`
    width: 100%;
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.space[2]}px 4px;
    margin-top: 6px;
    outline: none;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
    border-radius: ${p => p.theme.radii.normal};
    box-sizing: border-box;
`

export const Button = styled.button`
    display: block;
    width: 100%;
    margin-top:  ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.white};
    transition: all 100ms linear;
    background-color: ${p => p.theme.colors.primary};

    :hover, :focus {
        background-color: ${p => p.theme.colors.secondary};
    }
`
