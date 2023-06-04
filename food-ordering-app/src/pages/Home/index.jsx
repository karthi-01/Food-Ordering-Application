import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home = ({active}) => {
    return (
        <>
            <Banner />
            <ProductsPreview />
            <About />
        </>
    )
}

export default Home;
