import React from "react";

//Components
import Button from "../Button";
import Input from "../Input";

//Icons
import { MdAttachEmail } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

type Props = {};

function UserSignUpForm({}: Props) {
  return (
    <form action="">
      <Input
        type="email"
        label="Seu endereço de email"
        placeholder="seunome@gmail.com"
        icon={MdAttachEmail}
      />
      <Input
        type="phone"
        label="Número de celular"
        placeholder="+55 22222-2222"
        icon={MdLocalPhone}
      />
      <Input
        type="text"
        label="Nomo completo"
        placeholder="Fulano da Silva"
        icon={MdOutlineAccountCircle}
      />
      <Input type="password" label="Crie sua senha" icon={IoMdLock} />
      <Input type="password" label="Confirme a senha" icon={IoMdLock} />
      <Button label="Sign Up" />
    </form>
  );
}

export default UserSignUpForm;
