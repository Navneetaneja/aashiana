import sdmail from '@sendgrid/mail';

sdmail.setApiKey("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");
const msg = {
    to: 'navneet0010.cse19@chitkara.edu.in', // Change to your recipient
    from: 'navneetaneja2001@hotmail.com', // Change to your verified sender
    subject: 'AAshiana Event',
    text: '',
    html: '<strong>Birthday here</strong>',
}
const sendmess=()=>{
    sdmail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}
export default sendmess;

