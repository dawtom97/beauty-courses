/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const nodemailer = require('nodemailer');

export default async (req: any, res: any) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'mail31.mydevil.net',
    auth: {
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: 'szkolenia.beauty@ernabo.pl',
    to: process.env.REACT_APP_EMAIL,
    subject: `Nowe zgłoszenie na kurs: ${req.body.firstname} ${req.body.lastname}`,
    text: 'aaaaaa',
    html: `<div>
  <h2>Kurs: ${req.body.course} (Grupa: ${req.body.ageGroup})</h2>
  <h3>${req.body.firstname} ${req.body.lastname}</h3>
  <p>Numer telefonu: <strong> ${req.body.phone} </strong></p>
  <p>Email: <strong> <a>${req.body.email}</a> </strong></p>
  <p>${req.body.zipcode} ${req.body.city}</p>
  <br>
  <hr>
  ${req.body.content}
  </div>
 `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: 'OK' });
};

// export default (req: any, res: any) => {
//   let nodemailer = require('nodemailer');
//   const transporter = nodemailer.createTransport({
//       port: 465,
//       host: 'mail31.mydevil.net',
//       auth: {
//           user: process.env.REACT_APP_EMAIL,
//           pass: process.env.REACT_APP_EMAIL_PASS,
//       },
//       secure: true,
//     // port: 465,
//     // host: 'smtp.gmail.com',
//     // auth: {
//     //     user: 'ernaboszkolenia1@gmail.com',
//     //     pass: '12q1290nowe',
//     // },
//     // secure: true,
//   })

//   console.log(req.body)

//   const mailData = {
//     from: 'szkolenia.beauty@ernabo.pl',
//     to: process.env.REACT_APP_EMAIL,
//     subject: `Nowe zgłoszenie na kurs: ${req.body.firstname} ${req.body.lastname}`,
//     text: 'aaaaaa',
//     html: `<div>
//     <h2>Kurs: ${req.body.course} (Grupa: ${req.body.ageGroup})</h2>
//     <h3>${req.body.firstname} ${req.body.lastname}</h3>
//     <p>Numer telefonu: <strong> ${req.body.phone} </strong></p>
//     <p>Email: <strong> <a>${req.body.email}</a> </strong></p>
//     <p>${req.body.zipcode} ${req.body.city}</p>
//     <br>
//     <hr>
//     ${req.body.content}
//     </div>
//    `,
//   };
//   transporter.sendMail(mailData, function (err: any, info: any) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
//   res.status(200).end();
// };
