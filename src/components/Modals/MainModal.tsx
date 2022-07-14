import LoginLayout from "@/layout/LoginLayout";
import RegisterLayout from "@/layout/RegisterLayout";
import Modal from "@/ui/Actions/Modal";
import Tabs from "@/ui/Navigation/Tabs";
import Tab from "@/ui/Navigation/Tabs/Tab";

const MainModal = ({ value, setValue, closeModal }) => {
  return (
    <>
      <Modal.Header className="font-bold">
        <div className="flex flex-col gap-4 items-center">
          <Tabs size="md" value={value} onChange={(e) => setValue(Number(e))}>
            <Tab key={0} className="tab-bordered" value={0}>
              Login
            </Tab>
            <Tab key={1} className="tab-bordered" value={1}>
              Registrarse
            </Tab>
          </Tabs>
        </div>
      </Modal.Header>

      <Modal.Body>
        {value === 0 ? (
          <LoginLayout closeModal={closeModal} />
        ) : (
          <RegisterLayout closeModal={closeModal} />
        )}
      </Modal.Body>
    </>
  );
};

export default MainModal;
