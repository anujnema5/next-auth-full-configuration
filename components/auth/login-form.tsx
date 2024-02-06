'use client'

import * as z from 'zod'

import React from 'react'

import CardWrapper from '@/components/auth/card-wrapper'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { useForm } from 'react-hook-form'

import { loginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { fields } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import { Button } from '@/components/ui/button'
import FormError from '../form-error'
import FormSuccess from '../form-success'


const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: '',
      password: ''
    }
  })


  return (
    <div>
      <CardWrapper
        headerLabel='Welcome back'
        backButtonHref='/auth/register'
        backButtonLabel='Don
        t have an account'
        showSocial
      >
        <Form {...form}>
          <form
            action=""
            onSubmit={form.handleSubmit(() => { })}
            className='space-y-6'
          >

            <div className="space-y-4">
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field}
                        placeholder='Enter your email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' placeholder='*******' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormError message=''/>
            <FormSuccess message=''/>
            <Button className='w-full' type='submit'>Login</Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  )
}

export default LoginForm