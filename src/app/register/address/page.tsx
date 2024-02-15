//Components
import Button from "../../components/Button";
import Input from "../../components/Input";

//Icons
import { MdLocationCity } from "react-icons/md";

type Props = {};

export default function AddressSignUpPage() {
  return (
    <form action="">
      <Input
        type="text"
        label="Seu Cep"
        placeholder="22222-000"
        icon={MdLocationCity}
      />
      <Input type="text" label="Cidade" />
      <Input type="text" label="Bairro" />
      <Input type="text" label="Número de Residência" />
      <Button label="Sign Up" />
    </form>
  );
}
