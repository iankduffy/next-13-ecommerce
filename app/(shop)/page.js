import { HeroComp } from "@components/pageComponents/hero";
import { TextSection } from "@components/pageComponents/textSection";
import { ProductSlider } from "@components/pageComponents/product-slider";
import { ProductCard } from '@components/shared/productCard'


export default function Page() {
  return (
    <main>
      <HeroComp />
      <TextSection />
      <ProductSlider>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </ProductSlider>
    </main>
  );
}