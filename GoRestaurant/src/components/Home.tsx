import { Header } from "../styles/pages/Home"
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Logo from '../assets/logo.svg'
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { 
  DialogOverlay, 
  DialogContent, 
  DialogTitle, 
  Fieldset,
  Input, 
  Button, 
  IconButton 
} from "../styles/pages/FirtstModal"


export const Home = () => {
  const [newPlate, SetNewPlate] = useState([])

  const HandleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    SetNewPlate(data)

    console.log(newPlate);
  }
  return (
    <Header>
      <div>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Novo Prato <PlusCircle /></Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <DialogTitle>Adicionar um novo prato</DialogTitle>
              <form onSubmit={HandleSubmit}>
                <Fieldset>
                  <Input 
                    id="image" 
                    placeholder="Cole o link aqui"
                    name='image'
                    />
                </Fieldset>
                <Fieldset>
                  <Input 
                    id="name" 
                    placeholder="Ex: Moda italiana"
                    name='name' 
                    />
                </Fieldset>
                <Fieldset>
                  <Input 
                    id="price"
                    placeholder="Ex: 19.90" 
                    name='price' 
                    />
                </Fieldset>
                <Fieldset>
                  <Input 
                    id="description" 
                    placeholder="Descrição" 
                    name='description'
                    />
                </Fieldset>

                    <Button variant="green">Adicionar prato</Button>
                  <Dialog.Close asChild>
                  </Dialog.Close>

              </form>
              <Dialog.Close asChild>
                <IconButton aria-label="Close">
                  <Cross2Icon />
                </IconButton>
              </Dialog.Close>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </Header>
  )
}
