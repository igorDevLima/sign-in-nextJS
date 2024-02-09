import React from "react";

//Components
import Button from "../Button";
import Input from "../Input";

//Icons
import { MdLocationCity } from "react-icons/md";


type Props = {};

function AddressSignUpForm({}: Props) {
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

export default AddressSignUpForm;
