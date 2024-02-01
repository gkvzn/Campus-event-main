import { SliderItemProps } from "@/types_and_interfaces/types";
import { strLimit } from "@/utils/helper";
import Link from "next/link";

const SldierItem: React.FC<SliderItemProps> = ({ data, path }) => {
  return (
    <>
      <div className="slider_item">
        <Link href={`${path}/${data.id}/${data.slug}`}>
          {" "}
          <img src={data.feature_image} />
          <span>{strLimit(data.name, 100)}</span>
        </Link>
      </div>
    </>
  );
};

export default SldierItem;
