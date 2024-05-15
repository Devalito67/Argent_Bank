import "../../styles/HomePage.css"
import FeatureItem from "../FeatureItem"
import Hero from "../Hero"

export default function HomePage() {
  return (
    <div className="main-container">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
        imageSource="icon-chat.png"
        imageAlt="Chat icon"
        featureTitle="You are our #1 priority"
        featureText="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
        <FeatureItem 
        imageSource="icon-money.png"
        imageAlt="Money icon"
        featureTitle="More savings means higher rates"
        featureText="The more you save with us, the higher your interest rate will be!" />
        <FeatureItem
        imageSource="icon-security.png"
        imageAlt="Security icon"
        featureTitle="Security you can trust"
        featureText=" We use top of the line encryption to make sure your data and money
            is always safe." />
      </section>
    </div>
  )
}

