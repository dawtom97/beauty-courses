/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

export default (req: any, res: any) => {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
      port: 465,
      host: 'mail31.mydevil.net',
      auth: {
          user: 'd.tomczyk@ernabo.pl',
          pass: 'Titanum97',
      },
      secure: true,
    // port: 465,
    // host: 'smtp.gmail.com',
    // auth: {
    //     user: 'ernaboszkolenia1@gmail.com',
    //     pass: '12q1290nowe',
    // },
    // secure: true,
  })

  const mailData = {
    from: 'szkolenia.beauty@ernabo.pl',
    to: 'd.tomczyk@ernabo.pl',
    subject: `Nowe zgłoszenie na kurs: ${req.body.firstname} ${req.body.lastname}`,
    text: 'aaaaaa',
    html: `<div>
    <h3>${req.body.firstname} ${req.body.lastname}</h3>
    <p>Numer telefonu: <strong> ${req.body.phone} </strong></p>
    <p>Email: <strong> ${req.body.email} </strong></p>
    <br>
    <hr>
    ${req.body.content}
    </div>
   `,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).end();
};
