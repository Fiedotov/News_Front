import getDetails from "@/app/actions/details";
import List from "@/components/list";

interface DetailsPageProps {
  params: {
    slug: string;
  };
}

const Details: React.FC<DetailsPageProps> = async ({ params }) => {
  const details = await getDetails(params.slug[0]);
  console.log(
    "🚀 ~ file: page.tsx:12 ~ constDetails:React.FC<DetailsPageProps>= ~ details:",
    details
  );
  console.log(
    "🚀 ~ file: page.tsx:13 ~ constDetails:React.FC<DetailsPageProps>= ~ details:",
    details
  );

  return (
    <div>
      <div className="StockDetails border-4 text-center text-3xl py-5">
        StockDetails
      </div>
      <List data={details} />
    </div>
  );
};

export default Details;
