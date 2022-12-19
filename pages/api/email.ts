/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

export default (req: any, res: any) => {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    //   port: 465,
    //   host: 'mail31.mydevil.net',
    //   auth: {
    //       user: 'd.tomczyk@ernabo.pl',
    //       pass: 'Titanum97',
    //   },
    //   secure: true,
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: 'daw.tomczyk1997@gmail.com',
        pass: 'kfuubtckhttmtluv',
    },
    secure: true,
  })

  const mailData = {
    from: req.body.email,
    to: 'daw.tomczyk1997@gmail.com',
    subject: `Wiadomość od ${req.body.firstname} ${req.body.lastname}`,
    text: 'aaaaaa',
    html: `<div>
    Numer telefonu: ${req.body.phone}
    ${req.body.content}</div>
    <p>Od:${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).end();
};
