import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next/types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'INVALID_METHOD' })
    return
  }

  // Variables
  const { firstName, lastName, company, email, message } = req.body

  if (!firstName || !lastName || !email || !message) {
    res.status(400).json({ message: 'INVALID_PARAMETER' })
    return
  }

  // Syntaxe adresse email
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!pattern.test(email)) {
    res.status(400).send({
      message: 'EMAIL_SYNTAX_INCORRECT',
    })
    return
  }

  // Donner la clé API
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  // Création du message
  const msg = {
    to: 'contact@dupuisweb.com',
    from: 'contact@dupuisweb.com',
    subject: 'Nouveau message depuis le portfolio',
    text: message,
    html: `
    Une demande de contact vient d'être initiée <br/>
    <br/>
    <div>
      <b>Nom </b> ${lastName} <br/>
      <b>Prénom </b> ${firstName} <br/>
      <b>Société </b> ${company} <br/>
      <b>Email </b> <a href='mailto:${email}'>${email}</a> <br/>
      <b>Message </b> ${message} <br/>
    </div>
    `,
  }
  // SendGrid
  sgMail.send(msg).then(
    () => {
      res.status(200).json({
        message: 'EMAIL_SENDED_SUCCESSFULLY',
      })
    },
    (error) => {
      console.error(error)
      if (error.response) {
        console.error(error.response.body)
      }
      res.status(500).json({
        message: 'ERROR_WITH_SENDGRID',
      })
    }
  )
  return
}
