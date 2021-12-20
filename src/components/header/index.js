import react from "react";
import { LogoImg, Wrapper, Content, IGDBLogoImg } from "./header.styles";

//images
import IGDBLogo from "../../images/IGDBLogo.svg";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src="https://via.placeholder.com/200x100"></LogoImg>
                <IGDBLogoImg src={IGDBLogo}></IGDBLogoImg>
            </Content>      
        </Wrapper>
    )
}

export default Header;