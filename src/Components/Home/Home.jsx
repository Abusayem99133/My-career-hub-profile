import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../Banner/Banner";
import CategoryList from "../Category/CategoryList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
