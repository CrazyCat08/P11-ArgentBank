import FeatureItem from "../FeatureItem";

import featuresData from "../../data/features-data.json";
import iconChat from "../../assets/icons/icon-chat.webp";
import iconMoney from "../../assets/icons/icon-money.webp";
import iconSecurity from "../../assets/icons/icon-security.webp";

function HomeFeatures() {
    const iconsPaths = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity,
    };

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map((item) => (
                <FeatureItem
                    key={item.id}
                    image={iconsPaths[item.image]}
                    altImage={item.altImage}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </section>
    );
}

export default HomeFeatures;
