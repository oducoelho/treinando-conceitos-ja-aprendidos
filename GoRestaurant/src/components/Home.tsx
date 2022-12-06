import { Header } from "../styles/pages/Home"
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Logo from '../assets/logo.svg'
import { PlusCircle } from "phosphor-react";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  Fieldset,
  Input,
  Button,
  IconButton
} from "../styles/pages/FirtstModal"
import { useContextSelector } from 'use-context-selector'
import { RestaurantContext } from "../context/RestaurantContext";

const newPlateFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  link: z.string(),
  title: z.string(),
})
type NewPlateFormInputs = z.infer<typeof newPlateFormSchema>
export const Home = () => {
  const createPlate = useContextSelector(
    RestaurantContext,
    (context) => {
      return context.createPlate
    },
  )

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<NewPlateFormInputs>({
    resolver: zodResolver(newPlateFormSchema),
  })

  const handleAddNewPlate = async (data: NewPlateFormInputs) => {
    const { description, price, link, title } = data

    await createPlate({
      description,
      price,
      link,
      title,
    })
    reset()
  }
  return (
    <Header>
      <div>
        <img src={Logo} alt="" />

        <Dialog.Root>1
          <Dialog.Trigger asChild>
            <Button>Novo Prato <PlusCircle /></Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <DialogTitle>Adicionar um novo prato</DialogTitle>
              <form onSubmit={handleSubmit(handleAddNewPlate)}>
                <Fieldset>
                  <Input
                    type="text"
                    placeholder="Cole o link aqui"
                    required
                    {...register('link')}
                  />
                </Fieldset>
                <Fieldset>
                  <Input
                    type="text"
                    placeholder="Ex: Moda italiana"
                    required
                    {...register('title')}
                  />
                </Fieldset>
                <Fieldset>
                  <Input
                    type="text"
                    placeholder="Ex: 19.90"
                    required
                    {...register('price')}
                  />
                </Fieldset>
                <Fieldset>
                  <Input
                    type="text"
                    placeholder="Descrição"
                    required
                    {...register('description')}
                  />
                </Fieldset>

                <Button type="submit" variant="green">Adicionar prato</Button>
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
