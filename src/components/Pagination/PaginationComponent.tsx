import Button from "@/ui/Actions/Button";
import Pagination from "@/ui/Navigation/Pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaginationComponent = ({ page, setPage, total, limit }) => {
  const goToFirstPage = () => setPage(1);

  const goToLastPage = () => setPage(getLastPage());

  const incrementPage = () => page < getLastPage() && setPage(page + 1);

  const decrementPage = () => page > 1 && setPage(page - 1);

  const atFirstPage = () => page === 1;

  const atLastPage = () => page === getLastPage();

  const getLastPage = () => Math.ceil(total / limit);
  return (
    <div>
      <Pagination>
        <Button onClick={() => goToFirstPage()} disabled={atFirstPage()}>
          <FaArrowLeft />
        </Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button onClick={() => decrementPage()} disabled={atLastPage()}>
          <FaArrowRight />
        </Button>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
