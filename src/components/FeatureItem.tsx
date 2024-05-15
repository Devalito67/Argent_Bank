import "../styles/FeatureItem.css"

interface FeatureItemProps {
    imageSource: string;
    imageAlt: string;
    featureTitle: string;
    featureText: string;
  }

export default function FeatureItem({imageSource, imageAlt, featureTitle, featureText} :FeatureItemProps) {
  return <div className="feature-item">
  <img src={`src/assets/${imageSource}`} alt={imageAlt} className="feature-icon" />
  <h3 className="feature-item-title">{featureTitle}</h3>
  <p>
    {featureText}
  </p>
</div>
}
