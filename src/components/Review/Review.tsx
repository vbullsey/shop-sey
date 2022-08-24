import Avatar from "@/ui/Data display/Avatar";

const Review = () => {
  return (
    <div>
      <div className="flex items-center">
        <Avatar
          className="uppercase mr-2 "
          shape="circle"
          size="xs"
          letters="x"
        />
        <div className="mr-4">
          <div className="text-sm">Danielle Mark</div>
          <div className="flex items-center">x x x x x</div>
        </div>
      </div>
      <div className="mt-1 text-sm">
        "Lorem ipsum dolor sit amet, consectetur adip, ipsum dolor sit amet,
        consectetur adip"
      </div>
    </div>
  );
};

export default Review;
