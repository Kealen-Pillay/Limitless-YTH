import react, {useEffect, useState} from "react";
import About from "../../images/About.png";
import "../About/AboutScreen.css";
import {ApiAboutDataType, IAbout} from "../../type";
import {getAbout} from "../../API";

const AboutScreen = (): JSX.Element => {
    const [about, setAbout] = useState<IAbout | null>(null);

    useEffect(() => {
        fetchAbout();
    }, []);

    const fetchAbout = (): void => {
        getAbout()
            .then(({data: {aboutBody}}: IAbout | any) => {
                setAbout(aboutBody);
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <section>
                <div className="about-container">
                    <img src={About} alt={"about-img"}/>
                    <p className="about-header">
                        About
                    </p>
                    <div className="about-body-container">
                        {about &&
                            (
                                <p className="about-body">
                                    {about.body}
                                </p>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutScreen;
