import './ImageAboutUs.scss'

const ImageAboutUs = ({img, alt}) => {
    return(
        <div className="ImageAboutUs">
                <img src={img} alt={alt} />
        </div>
    )
}

export default ImageAboutUs
