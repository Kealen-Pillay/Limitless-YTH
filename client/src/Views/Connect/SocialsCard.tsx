import React from "react";
import "./SocialsCard.css";
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import FacebookIcon from "@mui/icons-material/Facebook"
import EmailIcon from "@mui/icons-material/Email"

interface ISocialsCardProps {
    icon: string,
    link: string,
    label: string,
}

interface IButtonProps {
    icon: string,
}

export const SocialsCard = ({icon, link, label}: ISocialsCardProps): JSX.Element => {
    const ButtonIcon = ({icon}: IButtonProps): JSX.Element => {
        if (icon === "instagram") {
            return <InstagramIcon className="icon" fontSize="medium"/>
        } else if (icon === "youtube") {
            return <YouTubeIcon className="icon" fontSize="medium"/>
        } else if (icon === "facebook") {
            return <FacebookIcon className="icon" fontSize="medium"/>
        } else {
            return <EmailIcon className="icon" fontSize="medium"/>
        }
    }

    return (
        <>
            <a href={link} target="_blank" rel="noreferrer">
                <button className="socials-card">
                    <div className="button-contents">
                        <ButtonIcon icon={icon}/>
                        <span>{label}</span>
                    </div>
                </button>
            </a>

        </>
    );
}
