function FeatureItem({ image, altImage, title, description }) {
    return (
        <div className="feature-item">
            <img src={image} alt={altImage} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItem;
