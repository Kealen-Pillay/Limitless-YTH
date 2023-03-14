import "../Gallery/GalleryScreen.css";
import 'react-slideshow-image/dist/styles.css';
import {Slide} from "react-slideshow-image";

const GalleryScreen = (): JSX.Element => {

    const images: string[] = [
        "https://mediashout.com/wp-content/uploads/2020/11/worship-1080x675.jpg",
        "https://wallpaperaccess.com/full/5356528.jpg",
        "https://rare-gallery.com/uploads/posts/5384561-crowd-concert-red-background-cheering-show-red-neon-neon-neon-light-hands-people-concert-hall-performance-performer-surrender-worship-worshiping-music-music-festival-hand-free-stock-photos.jpg"
    ];

    return (
        <>
            <section id="gallery">
                <div className="gallery-container">
                    <Slide>
                        {
                            images.map((image: string, index: number) => {
                                return (
                                    <div className="each-slide-effect" key={index}>
                                        <div className="slide-img" style={{'backgroundImage': `url(${image})`}}>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slide>
                </div>
            </section>
        </>
    );
};

export default GalleryScreen;
