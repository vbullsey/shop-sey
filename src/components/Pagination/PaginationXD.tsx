import Button from '@/ui/Actions/Button';
import Pagination from '@/ui/Navigation/Pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';

const Page = ({ value, isActive, onClick, isDisabled }) => (
  <Button active={isActive ? true : false} onClick={onClick} disabled={isDisabled} responsive>
    {value}
  </Button>
);

const Ellipsis = ({ onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled}>
    ...
  </button>
);

const FirstPageLink = ({ isActive, onClick, isDisabled }) => null;

const PreviousPageLink = ({ isActive, onClick, isDisabled }) => (
  <Button onClick={onClick} disabled={isDisabled} responsive>
    <FaArrowLeft />
  </Button>
);

const NextPageLink = ({ isActive, onClick, isDisabled }) => (
  <Button onClick={onClick} disabled={isDisabled} responsive>
    <FaArrowRight />
  </Button>
);

const LastPageLink = ({ isActive, onClick, isDisabled }) => null;

function Wrapper(props) {
  return <Pagination>{props.children}</Pagination>;
}

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink,
};

const UltimatePaginationBasic = createUltimatePagination({
  itemTypeToComponent,
  WrapperComponent: Wrapper,
});

export default UltimatePaginationBasic;
