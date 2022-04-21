import styled from "styled-components";

type StyledProps = {
    $section?: string;
};

const innerContainer = styled.div`
    position: relative;
    max-width: 1440px;
    min-width: 600px;
    width: 100%;
    height: ${(props: StyledProps) => (props.$section == "header" ? "100%" : "auto")};
`;

export default {
    innerContainer,
};
