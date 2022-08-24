import Dropdown from '@/ui/Actions/Dropdown';
import Menu from '@/ui/Navigation/Menu';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

type DropdownProps = {
  title: string;
  data: [];
};

const DropdownMenu: React.FC<DropdownProps> = ({ title = '', setOrder, data = [] }) => {
  const [currentTitle, setTitle] = useState<string>(title);

  return (
    <div className="">
      <Dropdown horizontal="center" vertical="end">
        <Dropdown.Toggle color="primary">
          {currentTitle}
          <span className="ml-1">
            <FaArrowRight />
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="">
          <Menu className="rounded-lg ">
            {data &&
              data.map((item, i) => (
                <Menu.Item key={i} className={item.title === currentTitle ? 'bordered' : ''}>
                  <a
                    {...item}
                    className="flex justify-between"
                    onClick={() => (setTitle(item.title), setOrder(item.value))}
                  >
                    <span>{item.title}</span>
                    <span className="text-primary">{item.icon}</span>
                  </a>
                </Menu.Item>
              ))}
          </Menu>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;
