import {app} from './app';

const PORT = process.env.PORT || 3000;
const response = {
    PORT:PORT,
    RESPONSE:"SERVIDOR ESTÁ RODANDO",
    STATUS:"OK",
    CODE:"200",
    PATH:"localhost",
    PROTOCOL:"http",
}
const URL = `${response.PROTOCOL}://${response.PATH}:${response.PORT}`
app.listen(PORT, () => {
  console.log(`URL: ${URL},`);
  console.log(`CODE: ${response.CODE},`);
  console.log(`CAMINHO: ${response.PATH},`);
  console.log(`PORTA: ${response.PORT},`);
  console.log(`MENSAGEM: ${response.RESPONSE}`);
});