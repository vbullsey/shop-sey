import { useState } from 'react';

import Button from '@/ui/Actions/Button';
import Input from '@/ui/Data input/Input';

const Index = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <div className="h-full dark:bg-black">
      <header className="bg-white dark:bg-black">
        <nav>JE 2022</nav>
      </header>
      <div className="mx-auto mt-4 flex w-3/12 items-center">
        <Button className="mr-2" onClick={() => setDisabled(!disabled)}>
          Submit
        </Button>
        <Input disabled={disabled} />
      </div>
    </div>
  );
};

export default Index;
