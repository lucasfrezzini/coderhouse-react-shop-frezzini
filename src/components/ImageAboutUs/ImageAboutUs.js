import './ImageAboutUs.scss';

const ImageAboutUs = ({img, alt}) => {
    return(
        <div class="ImageAboutUs">
                <img src={img} alt={alt} />
        </div>
    );
}

export { ImageAboutUs }
