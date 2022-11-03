import styled from "styled-components";
import { FaPhoneAlt } from 'react-icons/fa';
import { Button } from "components/ContactForm/ContactForm.styles";

export const List = styled.ul`
    text-align: left;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.s};
    
    :not(:last-child) {
        margin-bottom: 10px;
    };
`;

export const Icon = styled(FaPhoneAlt)`
    margin-right:  ${p => p.theme.space[3]}px;
`;

export const ContactButton = styled(Button)`
    display: inline-block;
    width: auto;
    text-align: right;
    margin-top: 0;
    margin-left: auto;
    background-color: ${p => p.theme.colors.secondary};
    transition: box-shadow 150ms linear;

    :hover, :focus {
        box-shadow: ${p => p.theme.shadows.normal};
    };
`;