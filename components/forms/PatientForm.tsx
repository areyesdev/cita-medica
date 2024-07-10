"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField"
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validation";

const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
        },
      });


    const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
        console.log(setIsLoading)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">Hola👋</h1>
                    <p className="text-dark-700">Agenda tu primera cita</p>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name='name'
                    label='Nombre Completo'
                    placeholder='Andres Reyes'
                    iconSrc='/assets/icons/user.svg'
                    iconAlt='user'
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="andres@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(312) 123-4353"
                />

                <SubmitButton isLoading={isLoading}>Enviar</SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm